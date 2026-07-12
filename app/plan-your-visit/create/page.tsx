"use client";

import React, { useState, useMemo, useCallback } from "react";
import CreatePlanTutorial from "@/components/CreatePlanTutorial";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { savePlan, type PlanPreferences } from "@/lib/planStorage";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Landmark,
  Leaf,
  UtensilsCrossed,
  Palette,
  Flower2,
  Music2,
  ShoppingBag,
  Camera,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/components/LocaleContext";

/* ─────────────────────────────── helpers ─────────────────────────────── */

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isDateBetween(date: Date, start: Date, end: Date) {
  const t = date.getTime();
  return t > start.getTime() && t < end.getTime();
}

function formatTime(h: number, m: number) {
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${period}`;
}

function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/* ─────────────────────────────── step data ─────────────────────────────── */

const COMPANIONS = [
  { id: "solo", image: "/assets/plan-flying-solo.png" },
  { id: "partner", image: "/assets/plan-my-partner.png" },
  { id: "family", image: "/assets/plan-whole-family.png" },
  { id: "friends", image: "/assets/plan-my-friends.png" },
];

const INTERESTS: { id: string; icon: LucideIcon }[] = [
  { id: "culture", icon: Landmark },
  { id: "nature", icon: Leaf },
  { id: "culinary", icon: UtensilsCrossed },
  { id: "art", icon: Palette },
  { id: "spiritual", icon: Flower2 },
  { id: "nightlife", icon: Music2 },
  { id: "shopping", icon: ShoppingBag },
  { id: "photography", icon: Camera },
];

const STEP_COUNT = 5; // wizard steps (step 6 = results page, not counted in wizard)

const LOADING_MSG_COUNT = 5;

/* ─────────────────────────────── component ─────────────────────────────── */

export default function CreatePlanPage() {
  const { t } = useLocale();
  const [currentStep, setCurrentStep] = useState(1);

  /* ─── Localized arrays ─── */
  const monthNames = useMemo(
    () => Array.from({ length: 12 }, (_, i) => t(`createPlan.monthNames.${i}`)),
    [t],
  );
  const dayLabels = useMemo(
    () => Array.from({ length: 7 }, (_, i) => t(`createPlan.dayLabels.${i}`)),
    [t],
  );
  const getTimeLabel = useCallback(
    (h: number) => {
      if (h >= 5 && h < 12) return t("createPlan.timeLabels.morning");
      if (h >= 12 && h < 17) return t("createPlan.timeLabels.afternoon");
      if (h >= 17 && h < 21) return t("createPlan.timeLabels.evening");
      return t("createPlan.timeLabels.night");
    },
    [t],
  );

  /* Step 1: Calendar + Active Hours */
  const today = useMemo(() => new Date(), []);
  const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
  const [calendarYear, setCalendarYear] = useState(today.getFullYear());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startHour, setStartHour] = useState(9);
  const [startMinute] = useState(0);
  const [endHour, setEndHour] = useState(22);
  const [endMinute] = useState(0);

  /* Step 2: Companions */
  const [selectedCompanion, setSelectedCompanion] = useState<string | null>(
    null,
  );

  /* Step 3: Budget */
  const [budget, setBudget] = useState<number>(500000);

  /* Step 4: Interests */
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  /* Step 6: Itinerary Results */
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  /* ─── calendar helpers ─── */

  const daysInMonth = useMemo(
    () => new Date(calendarYear, calendarMonth + 1, 0).getDate(),
    [calendarYear, calendarMonth],
  );

  const firstDayOfWeek = useMemo(
    () => new Date(calendarYear, calendarMonth, 1).getDay(),
    [calendarYear, calendarMonth],
  );

  const prevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear((y) => y - 1);
    } else {
      setCalendarMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear((y) => y + 1);
    } else {
      setCalendarMonth((m) => m + 1);
    }
  };

  const handleDateClick = useCallback(
    (day: number) => {
      const clicked = new Date(calendarYear, calendarMonth, day);
      if (!startDate || (startDate && endDate)) {
        setStartDate(clicked);
        setEndDate(null);
      } else {
        if (clicked.getTime() < startDate.getTime()) {
          setEndDate(startDate);
          setStartDate(clicked);
        } else if (isSameDay(clicked, startDate)) {
          setEndDate(clicked);
        } else {
          setEndDate(clicked);
        }
      }
    },
    [calendarYear, calendarMonth, startDate, endDate],
  );

  const getDayClass = useCallback(
    (day: number) => {
      const date = new Date(calendarYear, calendarMonth, day);
      const isStart = startDate && isSameDay(date, startDate);
      const isEnd = endDate && isSameDay(date, endDate);
      const isBetween =
        startDate && endDate && isDateBetween(date, startDate, endDate);
      const isToday = isSameDay(date, today);
      const isPast = date.getTime() < today.getTime() && !isToday;

      if (isStart || isEnd) {
        return {
          cell: "bg-[#2C2C2C] text-white rounded-full",
          wrapper:
            isStart && endDate && !isSameDay(startDate!, endDate!)
              ? "bg-gray-200 rounded-l-full"
              : isEnd && startDate && !isSameDay(startDate!, endDate!)
                ? "bg-gray-200 rounded-r-full"
                : "",
        };
      }
      if (isBetween) {
        return { cell: "text-gray-900", wrapper: "bg-gray-100" };
      }
      if (isPast) {
        return { cell: "text-gray-300 cursor-not-allowed", wrapper: "" };
      }
      if (isToday) {
        return { cell: "text-black font-bold", wrapper: "" };
      }
      return {
        cell: "text-gray-700 hover:bg-gray-100 rounded-full",
        wrapper: "",
      };
    },
    [calendarYear, calendarMonth, startDate, endDate, today],
  );

  /* ─── proceed logic ─── */
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!startDate && !!endDate;
      case 2:
        return !!selectedCompanion;
      case 3:
        return budget >= 50000 && budget <= 3000000;
      case 4:
        return selectedInterests.length > 0;
      case 5:
        return true;
      default:
        return false;
    }
  };

  const next = () => {
    if (currentStep < STEP_COUNT && canProceed()) setCurrentStep((s) => s + 1);
  };
  const prev = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  /* ─── format dates ─── */
  const formatDateShort = useCallback(
    (d: Date) => `${d.getDate()} ${monthNames[d.getMonth()].slice(0, 3)}`,
    [monthNames],
  );

  const formatDateFull = useCallback(
    (d: Date) =>
      `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
    [monthNames],
  );

  /* ─── Generate itinerary ─── */
  const generateItinerary = useCallback(async () => {
    if (!startDate || !endDate || !selectedCompanion || !budget) return;

    setIsGenerating(true);
    setGenerationError(null);
    setCurrentStep(6);
    setLoadingMsgIndex(0);

    // Cycle loading messages
    const msgInterval = setInterval(() => {
      setLoadingMsgIndex((prev) => (prev + 1) % LOADING_MSG_COUNT);
    }, 3000);

    try {
      const interestLabels = selectedInterests.map((id) =>
        t(`createPlan.interestLabels.${id}`),
      );

      const preferences: PlanPreferences = {
        startDate: formatDateFull(startDate),
        endDate: formatDateFull(endDate),
        startHour,
        endHour,
        companion: selectedCompanion
          ? t(`createPlan.companions.${selectedCompanion}`)
          : selectedCompanion,
        budget: `${formatRupiah(budget)} per day`,
        interests: interestLabels,
      };

      const res = await fetch("/api/itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preferences }),
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.error || "Failed to generate itinerary");

      // Save to localStorage and navigate to dedicated result page
      const planId = `plan_${Date.now()}`;
      savePlan({
        id: planId,
        createdAt: Date.now(),
        preferences,
        itinerary: data.itinerary,
      });
      clearInterval(msgInterval);
      setIsGenerating(false);
      router.push(`/plan-your-visit/result/${planId}`);
      return;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setGenerationError(msg);
    } finally {
      clearInterval(msgInterval);
      setIsGenerating(false);
    }
  }, [
    startDate,
    endDate,
    selectedCompanion,
    budget,
    selectedInterests,
    startHour,
    endHour,
    t,
    formatDateFull,
    router,
  ]);

  return (
    <main className="min-h-screen bg-cream text-gray-900 font-jakarta w-full">
      {/* ──────── MAIN CONTENT AREA ──────── */}
      <div className="flex flex-col min-h-screen relative">
        {/* Top bar — hide on results step */}
        {currentStep <= STEP_COUNT && (
          <div className="flex items-center justify-between px-6 md:px-12 pt-8">
            <Link
              href="/plan-your-visit"
              className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm font-medium"
            >
              <ArrowLeft size={18} />
            </Link>

            <div className="flex lg:hidden items-center gap-2">
              {Array.from({ length: STEP_COUNT }, (_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i + 1 === currentStep
                    ? "w-8 bg-black"
                    : i + 1 < currentStep
                      ? "w-4 bg-gray-400"
                      : "w-4 bg-gray-200"
                    }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        {currentStep <= STEP_COUNT && (
          <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-8">
            {/* Step Badge + Title */}
            <div
              id="create-plan-header"
              className="flex flex-col items-center mb-8"
            >
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mb-4">
                {currentStep}
              </span>

              {currentStep === 1 && (
                <h1 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
                  {t("createPlan.step1Title")}
                </h1>
              )}
              {currentStep === 2 && (
                <h1 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
                  {t("createPlan.step2Title")}
                </h1>
              )}
              {currentStep === 3 && (
                <h1 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
                  {t("createPlan.step3Title")}
                </h1>
              )}
              {currentStep === 4 && (
                <h1 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
                  {t("createPlan.step4Title")}
                </h1>
              )}
              {currentStep === 5 && (
                <h1 className="text-3xl md:text-5xl font-bold text-center tracking-tight">
                  {t("createPlan.step5Title")}
                </h1>
              )}
            </div>

            {/* ─── STEP 1: Calendar + Active Hours ─── */}
            {currentStep === 1 && (
              <div className="w-full max-w-md">
                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-gray-200 mb-8 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#2C2C2C] transition-all duration-500"
                    style={{
                      width:
                        startDate && endDate
                          ? "100%"
                          : startDate
                            ? "50%"
                            : "0%",
                    }}
                  />
                </div>

                {/* Calendar Card */}
                <div
                  id="create-plan-calendar"
                  className="bg-gray-50 rounded-3xl p-6 md:p-8 shadow-sm"
                >
                  {/* Month nav */}
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={prevMonth}
                      className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/80 transition-colors"
                    >
                      <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <h2 className="text-lg font-bold text-gray-900">
                      {monthNames[calendarMonth]} {calendarYear}
                    </h2>
                    <button
                      onClick={nextMonth}
                      className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/80 transition-colors text-black"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Day labels */}
                  <div className="grid grid-cols-7 mb-2">
                    {dayLabels.map((d) => (
                      <div
                        key={d}
                        className="text-center text-xs font-semibold text-gray-400 py-2"
                      >
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Day cells */}
                  <div className="grid grid-cols-7">
                    {Array.from({ length: firstDayOfWeek }, (_, i) => (
                      <div key={`empty-${i}`} className="h-11" />
                    ))}

                    {Array.from({ length: daysInMonth }, (_, i) => {
                      const day = i + 1;
                      const date = new Date(calendarYear, calendarMonth, day);
                      const isPast =
                        date.getTime() < today.getTime() &&
                        !isSameDay(date, today);
                      const cls = getDayClass(day);

                      return (
                        <div key={day} className={`${cls.wrapper}`}>
                          <button
                            disabled={isPast}
                            onClick={() => handleDateClick(day)}
                            className={`
                              w-full h-11 flex items-center justify-center text-sm font-medium
                              transition-all duration-200
                              ${cls.cell}
                            `}
                          >
                            {day}
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Selected range preview */}
                  {startDate && (
                    <div className="mt-4 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
                      {endDate && !isSameDay(startDate, endDate) ? (
                        <>
                          <span className="font-semibold text-black">
                            {formatDateShort(startDate)}
                          </span>
                          {" — "}
                          <span className="font-semibold text-black">
                            {formatDateShort(endDate)}
                          </span>
                          <span className="text-gray-400 ml-2">
                            (
                            {Math.round(
                              (endDate.getTime() - startDate.getTime()) /
                              86400000,
                            )}{" "}
                            {t("createPlan.nights")})
                          </span>
                        </>
                      ) : endDate ? (
                        <span className="font-semibold text-black">
                          {formatDateShort(startDate)} (
                          {t("createPlan.dayTrip")})
                        </span>
                      ) : (
                        <span className="text-gray-400">
                          {t("createPlan.selectEndDate")}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Active Hours */}
                <div id="create-plan-active-hours" className="mt-8">
                  <h3 className="text-xl font-bold mb-5">
                    {t("createPlan.activeHours")}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Start */}
                    <div className="bg-white rounded-2xl px-5 py-4 text-center">
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                        {t("createPlan.start")}
                      </span>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <button
                          onClick={() =>
                            setStartHour((h) => (h - 1 + 24) % 24)
                          }
                          className="w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:bg-white transition-colors text-xs"
                        >
                          <ChevronLeft size={14} />
                        </button>
                        <span className="text-2xl font-bold text-gray-900 min-w-[110px]">
                          {formatTime(startHour, startMinute)}
                        </span>
                        <button
                          onClick={() =>
                            setStartHour((h) => (h + 1) % 24)
                          }
                          className="w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:bg-white transition-colors text-xs"
                        >
                          <ChevronRight size={14} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-black mt-1 inline-block">
                        {getTimeLabel(startHour)}
                      </span>
                    </div>
                    {/* End */}
                    <div className="bg-white rounded-2xl px-5 py-4 text-center">
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                        {t("createPlan.end")}
                      </span>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <button
                          onClick={() => setEndHour((h) => (h - 1 + 24) % 24)}
                          className="w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:bg-white transition-colors text-xs"
                        >
                          <ChevronLeft size={14} />
                        </button>
                        <span className="text-2xl font-bold text-gray-900 min-w-[110px]">
                          {formatTime(endHour, endMinute)}
                        </span>
                        <button
                          onClick={() => setEndHour((h) => (h + 1) % 24)}
                          className="w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:bg-white transition-colors text-xs"
                        >
                          <ChevronRight size={14} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-black mt-1 inline-block">
                        {getTimeLabel(endHour)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── STEP 2: Companions ─── */}
            {currentStep === 2 && (
              <div
                id="create-plan-companions"
                className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl w-full"
              >
                {COMPANIONS.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedCompanion(comp.id)}
                    className={`
                      group relative rounded-xl overflow-hidden border-2 transition-all duration-300
                      hover:shadow-xl hover:scale-[1.02]
                      ${selectedCompanion === comp.id ? "border-black shadow-lg ring-2 ring-black/10" : "border-gray-200 hover:border-gray-400"}
                    `}
                  >
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={comp.image}
                        alt={t(`createPlan.companions.${comp.id}`)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-4 py-3 bg-white">
                      <span className="font-medium text-sm md:text-base text-gray-900">
                        {t(`createPlan.companions.${comp.id}`)}
                      </span>
                    </div>
                    {selectedCompanion === comp.id && (
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black text-white flex items-center justify-center">
                        <Check size={16} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* ─── STEP 3: Budget ─── */}
            {currentStep === 3 && (
              <div className="w-full max-w-md">
                <div className="w-full h-2 rounded-full bg-gray-200 mb-8 overflow-hidden">
                  <div className="h-full rounded-full bg-[#2C2C2C] w-full" />
                </div>

                <div
                  id="create-plan-budget"
                  className="bg-gray-50 rounded-3xl p-6 md:p-8 shadow-sm"
                >
                  <p className="text-gray-500 text-center text-sm mb-8">
                    {t("createPlan.selectDailyBudget")}
                  </p>

                  <div className="flex flex-col items-center gap-8">
                    <span className="text-4xl font-bold text-black tracking-tight">
                      {formatRupiah(budget)}
                    </span>
                    <div className="w-full">
                      <input
                        type="range"
                        min="50000"
                        max="3000000"
                        step="50000"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                      />
                      <div className="w-full flex justify-between text-xs text-gray-400 font-medium mt-3">
                        <span>Rp 50.000</span>
                        <span>Rp 3.000.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── STEP 4: Interests (multi-select) ─── */}
            {currentStep === 4 && (
              <div className="flex flex-col items-center w-full max-w-2xl">
                <p className="text-gray-500 mb-6 text-center">
                  {t("createPlan.selectInterests")}
                </p>
                <div
                  id="create-plan-interests"
                  className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full"
                >
                  {INTERESTS.map((int) => (
                    <button
                      key={int.id}
                      onClick={() => toggleInterest(int.id)}
                      className={`
                        rounded-xl border-2 px-4 py-5 flex flex-col items-center gap-2 transition-all duration-300
                        hover:shadow-md hover:scale-[1.02]
                        ${selectedInterests.includes(int.id) ? "border-black bg-gray-50 shadow-md ring-2 ring-black/10" : "border-gray-200 hover:border-gray-400 bg-white"}
                      `}
                    >
                      <int.icon size={28} strokeWidth={1.5} />
                      <span className="text-sm font-medium text-center leading-tight">
                        {t(`createPlan.interestLabels.${int.id}`)}
                      </span>
                      {selectedInterests.includes(int.id) && (
                        <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center mt-1">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ─── STEP 5: Summary ─── */}
            {currentStep === 5 && (
              <div
                id="create-plan-summary"
                className="max-w-lg w-full bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      {t("createPlan.travelDates")}
                    </span>
                    <p className="text-lg font-semibold mt-1">
                      {startDate && endDate
                        ? `${formatDateShort(startDate)} — ${formatDateShort(endDate)}`
                        : "—"}
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {formatTime(startHour, startMinute)} –{" "}
                      {formatTime(endHour, endMinute)}
                    </p>
                  </div>
                  <div className="h-px bg-gray-200" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      {t("createPlan.travelingWith")}
                    </span>
                    <p className="text-lg font-semibold mt-1">
                      {selectedCompanion
                        ? t(`createPlan.companions.${selectedCompanion}`)
                        : "—"}
                    </p>
                  </div>
                  <div className="h-px bg-gray-200" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      {t("createPlan.dailyBudget")}
                    </span>
                    <p className="text-lg font-semibold mt-1">
                      {formatRupiah(budget)}{" "}
                      <span className="text-sm text-gray-500 font-normal">
                        {t("createPlan.perDay")}
                      </span>
                    </p>
                  </div>
                  <div className="h-px bg-gray-200" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      {t("createPlan.interests")}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedInterests.map((id) => {
                        const int = INTERESTS.find((i) => i.id === id);
                        return (
                          <span
                            key={id}
                            className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium flex items-center gap-1.5"
                          >
                            {int && <int.icon size={14} strokeWidth={1.75} />}{" "}
                            {t(`createPlan.interestLabels.${id}`)}
                          </span>
                        );
                      })}
                      {selectedInterests.length === 0 && (
                        <span className="text-gray-400">—</span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={generateItinerary}
                  disabled={isGenerating}
                  className="w-full mt-8 bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-semibold text-base transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      {t("createPlan.generating")}
                    </>
                  ) : (
                    <>{t("createPlan.generateItinerary")}</>
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        {/* ─── STEP 6: GENERATING / ERROR STATE ─── */}
        {currentStep === 6 && (
          <>
            {/* ── Loading State ── */}
            {isGenerating && (
              <div className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="flex flex-col items-center gap-6 max-w-md text-center">
                  {/* Animated spinner */}
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="animate-pulse">
                        <svg
                          width="47"
                          height="137"
                          viewBox="0 0 94 273"
                          fill="#000000"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M45.093 1.32497C43.485 4.32897 43.754 6.29597 45.934 7.46297C48.9 9.04997 49.142 8.78597 48.424 4.74797C47.563 -0.0940342 46.459 -1.22803 45.093 1.32497ZM44 11.438C44 12.481 43.766 13.944 43.48 14.689C42.996 15.951 48.612 20.219 49.538 19.293C49.758 19.073 49.676 17.278 49.356 15.304C48.954 12.826 48.036 11.38 46.387 10.628C44.328 9.68997 44 9.80096 44 11.438ZM43 22.731C43 25.676 43.555 26.441 47.156 28.466L51.313 30.802L50.67 28.4C50.317 27.079 50.021 25.283 50.014 24.409C50.002 23.054 48.83 22.172 43.75 19.697C43.338 19.496 43 20.861 43 22.731ZM41.819 31.678C41.627 33.677 41.003 34.899 40.25 34.748C39.563 34.61 39 35.398 39 36.498C39 38.193 38.333 38.498 34.622 38.498C27.919 38.498 27.289 40.091 29.577 51.248C30.033 53.471 30.235 53.498 46.421 53.498H62.804L63.503 47.472C64.353 40.152 63.316 38.498 57.878 38.498C55.446 38.498 53.997 38.032 53.993 37.248C53.987 36.1 52.119 34.633 44.819 30.044L42.137 28.358L41.819 31.678ZM31 56.439C31 56.957 31.45 57.658 32 57.998C32.55 58.338 33 59.489 33 60.557C33 61.831 33.687 62.498 35 62.498C36.556 62.498 37 63.165 37 65.498V68.498H46.5H56V65.615C56 63.57 56.583 62.579 58.004 62.207C59.336 61.859 59.804 61.152 59.4 60.099C59.034 59.145 59.43 58.27 60.396 57.899C64.771 56.221 60.59 55.498 46.5 55.498C37.481 55.498 31 55.891 31 56.439ZM34.346 73.248C33.965 74.761 31.819 90.925 29.577 109.17C25.604 141.499 25.451 142.306 23.559 140.92C20.219 138.474 19 139.163 19 143.498V147.498H28.411H37.822L39.96 143.081C41.136 140.651 43.158 137.969 44.453 137.121C46.666 135.671 46.972 135.741 49.544 138.288C51.049 139.779 52.898 142.461 53.653 144.248L55.027 147.498H64.513H74V143.498C74 139.063 72.121 138.174 68.903 141.086C66.839 142.954 67.552 147.007 62.471 104.498C60.532 88.273 58.517 73.985 57.994 72.748C57.187 70.84 56.28 70.498 52.021 70.498H47V88.012C47 99.915 47.385 106.142 48.202 107.45C49.15 108.969 49.12 109.905 48.057 111.891C47.217 113.462 46.894 116.209 47.198 119.203C47.465 121.84 47.359 125.348 46.961 126.998L46.237 129.998L45.965 126.998C45.816 125.348 45.802 121.498 45.934 118.443C46.111 114.338 45.754 112.539 44.565 111.552C43.115 110.348 43.106 109.985 44.477 107.892C45.695 106.034 46 102.051 46 88.033V70.498H40.519C35.374 70.498 34.996 70.667 34.346 73.248ZM16.379 149.952C16.073 150.751 16.537 152.426 17.411 153.674C18.285 154.922 19 156.708 19 157.644C19 158.579 20.048 160.617 21.33 162.171C22.611 163.726 23.95 165.794 24.306 166.768C24.901 168.398 26.665 168.516 46.726 168.268C65.77 168.032 68.502 167.8 68.516 166.42C68.525 165.552 69.763 163.38 71.266 161.593C72.77 159.806 74 157.698 74 156.908C74 156.117 74.521 154.637 75.158 153.617C75.795 152.597 76.034 151.028 75.689 150.13C75.13 148.672 71.959 148.498 46 148.498C21.501 148.498 16.85 148.726 16.379 149.952ZM29.25 158.449C28.563 159.561 28 161.377 28 162.484C28 164.055 28.66 164.498 31 164.498C34.534 164.498 35.057 162.017 32.25 158.573C30.503 156.43 30.498 156.429 29.25 158.449ZM37.132 158.252C35.144 161.965 35.699 164.498 38.5 164.498C40.445 164.498 41 163.985 41 162.189C41 160.919 40.384 159.038 39.632 158.009C38.307 156.197 38.227 156.204 37.132 158.252ZM60.25 158.449C59.563 159.561 59 161.407 59 162.551C59 164.229 59.53 164.57 61.741 164.314C65.077 163.929 65.713 161.595 63.292 158.625C61.506 156.434 61.496 156.433 60.25 158.449ZM44.035 159.432C42.162 162.932 42.77 164.498 46 164.498C48.464 164.498 49 164.087 49 162.198C49 159.945 47.352 157.498 45.835 157.498C45.415 157.498 44.605 158.368 44.035 159.432ZM52.035 159.432C50.162 162.932 50.77 164.498 54 164.498C56.056 164.498 57 164.005 57 162.932C57 160.835 55.158 157.498 54 157.498C53.489 157.498 52.605 158.368 52.035 159.432ZM24.417 171.415C24.188 171.644 24 181.206 24 192.665V213.498H46H68V192.248V170.998H46.417C34.546 170.998 24.646 171.186 24.417 171.415ZM33.392 178.92C33.092 179.702 33.331 181.247 33.923 182.354C34.515 183.461 35 187.996 35 192.432C35 199.831 34.835 200.498 33 200.498C31.381 200.498 31 201.165 31 203.998C31 207.22 31.238 207.498 34 207.498C36 207.498 37 206.998 37 205.998C37 204.776 38.667 204.498 46 204.498C53.333 204.498 55 204.776 55 205.998C55 206.998 56 207.498 58 207.498C60.762 207.498 61 207.22 61 203.998C61 201.554 60.548 200.498 59.5 200.498C58.292 200.498 58 198.948 58 192.545C58 188.171 58.528 183.434 59.173 182.018C60.053 180.086 60.06 179.158 59.202 178.3C58.343 177.441 57.534 177.821 55.958 179.824C54.243 182.005 53.506 182.304 51.929 181.46C50.868 180.892 50 179.768 50 178.963C50 177.918 48.841 177.498 45.956 177.498C42.66 177.498 41.967 177.821 42.206 179.248C42.648 181.881 38.41 182.127 36.807 179.561C35.3 177.147 34.154 176.932 33.392 178.92ZM42.25 185.243C39.106 186.808 39 187.063 39 193.072C39 200.226 39.315 200.498 47.582 200.498H53V193.511V186.525L49.378 185.011C47.386 184.179 45.698 183.527 45.628 183.562C45.558 183.597 44.037 184.354 42.25 185.243ZM22 218.926C22 220.473 20.828 222.27 18.765 223.885C15.776 226.224 15.615 226.64 16.647 229.375C17.449 231.497 17.458 232.64 16.682 233.416C15.906 234.192 24.169 234.498 45.907 234.498C73.056 234.498 76.151 234.334 75.611 232.926C75.279 232.061 75.497 230.438 76.096 229.319C77.011 227.61 76.69 226.773 74.092 224.093C72.392 222.339 71 219.912 71 218.7V216.498H46.5H22V218.926ZM16 242.498V248.498H46.5H77V242.498V236.498H46.5H16V242.498ZM13 253.998V257.498H46.5H80V253.998V250.498H46.5H13V253.998ZM0.677002 259.155C0.304002 259.527 0 262.681 0 266.165V272.498H46.546H93.091L92.796 265.748L92.5 258.998L46.927 258.738C21.861 258.595 1.049 258.783 0.677002 259.155Z"
                            fill="#0000003e"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      {t("createPlan.aiPlanning")}
                    </h2>
                    <p className="text-gray-500 animate-pulse-soft transition-all duration-500">
                      {t(`createPlan.loadingMessages.${loadingMsgIndex}`)}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ── Error State ── */}
            {generationError && !isGenerating && (
              <div className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="flex flex-col items-center gap-4 max-w-md text-center">
                  <h2 className="text-2xl font-bold">
                    {t("createPlan.errorTitle")}
                  </h2>
                  <p className="text-gray-500">{generationError}</p>
                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => setCurrentStep(5)}
                      className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                      {t("createPlan.goBack")}
                    </button>
                    <button
                      onClick={generateItinerary}
                      className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                    >
                      {t("createPlan.tryAgain")}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Bottom navigation */}
        {currentStep < STEP_COUNT && (
          <div
            id="create-plan-nav"
            className="flex items-center justify-between px-6 md:px-12 pb-10"
          >
            <button
              onClick={prev}
              disabled={currentStep === 1}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all
                ${currentStep === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-black hover:bg-gray-100"}
              `}
            >
              <ArrowLeft size={16} />
              {t("createPlan.back")}
            </button>

            <button
              onClick={next}
              disabled={!canProceed()}
              className={`
                flex items-center gap-2 px-8 py-3 rounded-full font-medium text-sm transition-all
                ${canProceed() ? "bg-[#2C2C2C] text-white hover:bg-black shadow-lg hover:shadow-xl" : "bg-gray-200 text-gray-400 cursor-not-allowed"}
              `}
            >
              {t("createPlan.next")}
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Decorative wave — hide on results */}
        {currentStep <= STEP_COUNT && (
          <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.06] overflow-hidden">
            <svg
              width="320"
              height="320"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="160"
                cy="160"
                r="120"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="160"
                cy="160"
                r="90"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="160"
                cy="160"
                r="60"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M40 140 Q100 100 160 140 Q220 180 280 140"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M40 160 Q100 120 160 160 Q220 200 280 160"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M40 180 Q100 140 160 180 Q220 220 280 180"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
        )}
      </div>
      <CreatePlanTutorial onWizardStepChange={(s) => setCurrentStep(s)} />
    </main>
  );
}
