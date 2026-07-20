"use client";

import React, { use, useState, useMemo, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  History,
  Lightbulb,
  Loader2,
  Mail,
  MapPin,
  RefreshCw,
  Plus,
  Send,
  X,
} from "lucide-react";
import PlanHistoryModal from "@/components/PlanHistoryModal";
import type { Itinerary } from "@/components/ItineraryMap";
import { useLocale } from "@/components/LocaleContext";
import { getPlan, savePlan, type SavedPlan } from "@/lib/planStorage";

/* ─── MapLoader ─── */
function MapLoader() {
  const { t } = useLocale();
  return (
    <div className="w-full h-full rounded-2xl bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-gray-400">
        <Loader2 size={24} className="animate-spin" />
        <span className="text-sm">{t("createPlan.results.loadingMap")}</span>
      </div>
    </div>
  );
}

const ItineraryMap = dynamic(() => import("@/components/ItineraryMap"), {
  ssr: false,
  loading: () => <MapLoader />,
});


const LOADING_MSG_COUNT = 5;

/* ─── Page ─── */
export default function PlanResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { t } = useLocale();

  const [plan, setPlan] = useState<SavedPlan | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [regenError, setRegenError] = useState<string | null>(null);
  const [activeDay, setActiveDay] = useState(1);
  const [activeDestIdx, setActiveDestIdx] = useState<number | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);
  // Per-destination slider indexes: key = "dayNumber-destIdx"
  const [sliderIndexes, setSliderIndexes] = useState<Record<string, number>>({});

  // Email modal state
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailSending, setEmailSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState<string | null>(null);

  /* ─── Load plan from localStorage ─── */
  useEffect(() => {
    const p = getPlan(id);
    if (p) {
      setPlan(p);
    } else {
      setNotFound(true);
    }
    setIsLoading(false);
  }, [id]);

  const itinerary: Itinerary | null = plan?.itinerary ?? null;

  const currentDayData = useMemo(
    () => itinerary?.days.find((d) => d.dayNumber === activeDay),
    [itinerary, activeDay],
  );

  /* ─── Regenerate ─── */
  const regenerate = useCallback(async () => {
    if (!plan) return;
    setIsRegenerating(true);
    setRegenError(null);
    setLoadingMsgIndex(0);

    const msgInterval = setInterval(() => {
      setLoadingMsgIndex((prev) => (prev + 1) % LOADING_MSG_COUNT);
    }, 3000);

    try {
      const res = await fetch("/api/itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preferences: plan.preferences }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to regenerate");

      const updated: SavedPlan = { ...plan, itinerary: data.itinerary };
      savePlan(updated);
      setPlan(updated);
      setActiveDay(1);
      setActiveDestIdx(null);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setRegenError(msg);
    } finally {
      clearInterval(msgInterval);
      setIsRegenerating(false);
    }
  }, [plan]);

  /* ─── Send Email ─── */
  const sendEmail = useCallback(async () => {
    if (!itinerary || !emailInput.trim()) return;
    setEmailSending(true);
    setEmailError(null);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput.trim(), itinerary }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || data.error || "Failed to send email");
      setEmailStatus("success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setEmailError(msg);
      setEmailStatus("error");
    } finally {
      setEmailSending(false);
    }
  }, [itinerary, emailInput]);

  const openEmailModal = useCallback(() => {
    setEmailInput("");
    setEmailStatus("idle");
    setEmailError(null);
    setShowEmailModal(true);
  }, []);

  const closeEmailModal = useCallback(() => {
    setShowEmailModal(false);
    setEmailStatus("idle");
    setEmailError(null);
  }, []);

  /* ─── Loading state ─── */
  if (isLoading) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center font-jakarta">
        <div className="flex flex-col items-center gap-4 text-gray-400">
          <Loader2 size={32} className="animate-spin" />
          <span>{t("planHistory.loadingPlan")}</span>
        </div>
      </main>
    );
  }

  /* ─── Not found state ─── */
  if (notFound || !plan || !itinerary) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center font-jakarta">
        <div className="flex flex-col items-center gap-4 text-center max-w-sm px-6">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl">
            🗺️
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            {t("planHistory.notFound")}
          </h1>
          <p className="text-gray-500">{t("planHistory.notFoundDesc")}</p>
          <Link
            href="/plan-your-visit"
            className="mt-2 flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft size={16} />
            {t("planHistory.backToPlans")}
          </Link>
        </div>
      </main>
    );
  }

  /* ─── Regenerating overlay ─── */
  if (isRegenerating) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center font-jakarta">
        <div className="flex flex-col items-center gap-6 max-w-md text-center px-6">
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
            <h2 className="text-2xl text-black font-bold mb-2">{t("createPlan.aiPlanning")}</h2>
            <p className="text-black animate-pulse">
              {t(`createPlan.loadingMessages.${loadingMsgIndex}`)}
            </p>
          </div>
        </div>
      </main>
    );
  }

  /* ─── Regen error banner ─── */
  const regenErrorBanner = regenError ? (
    <div className="bg-red-50 border-b border-red-100 px-6 py-3 flex items-center justify-between gap-4">
      <p className="text-sm text-red-700">{regenError}</p>
      <button
        onClick={() => setRegenError(null)}
        className="text-xs text-red-500 underline flex-shrink-0"
      >
        Dismiss
      </button>
    </div>
  ) : null;


  /* ─── Full result view ─── */
  return (
    <main className="min-h-screen bg-cream text-gray-900 font-jakarta w-full">
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="flex-shrink-0 border-b border-gray-100 bg-white/80 backdrop-blur-md z-10">
          {regenErrorBanner}
          <div className="px-6 py-5">
            <div className="flex flex-col items-start lg:flex-row  lg:items-center justify-between mb-4 w-full gap-4" >
              <div className="flex items-center gap-3">
                <Link
                  href="/plan-your-visit"
                  className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500"
                >
                  <ArrowLeft size={20} />
                </Link>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                    {itinerary.title}
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* History button */}
                <button
                  onClick={() => setShowHistory(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-colors"
                >
                  <History size={16} />
                  <span className="hidden sm:inline">{t("planHistory.historyModal.openHistory")}</span>
                </button>
                {/* Send via Email button */}
                <button
                  onClick={openEmailModal}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white font-medium text-sm hover:bg-gray-800 transition-colors shadow-sm"
                >
                  <Mail size={16} />
                  <span className="hidden sm:inline">Send via Email</span>
                </button>
                {/* Create new plan */}
                <Link
                  href="/plan-your-visit/create"
                  className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-colors"
                >
                  <Plus size={16} />
                  {t("planHistory.newPlan")}
                </Link>
                {/* Mobile map toggle */}
                <button
                  onClick={() => setShowMap(!showMap)}
                  className="md:hidden flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-black font-medium text-sm"
                >
                  <MapPin size={16} />
                  {showMap
                    ? t("createPlan.results.timeline")
                    : t("createPlan.results.mapToggle")}
                </button>
              </div>
            </div>

            {/* Day tabs */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {itinerary.days.map((day) => {
                const color = "#171717";
                const isActive = activeDay === day.dayNumber;
                return (
                  <button
                    key={day.dayNumber}
                    onClick={() => {
                      setActiveDay(day.dayNumber);
                      setActiveDestIdx(null);
                    }}
                    className={`flex-shrink-0 px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border-2 ${isActive
                      ? "text-white shadow-lg scale-[1.02]"
                      : "bg-white text-gray-600 border-gray-150 hover:border-gray-300"
                      }`}
                    style={
                      isActive
                        ? {
                          background: color,
                          borderColor: color,
                          boxShadow: `0 4px 14px ${color}40`,
                        }
                        : {}
                    }
                  >
                    {t("createPlan.results.day")} {day.dayNumber}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Body — split layout */}
        <div className="flex-1 flex min-h-0">
          {/* Left: Timeline */}
          <div
            data-lenis-prevent
            className={`${showMap ? "hidden" : "flex"
              } md:flex flex-col w-full md:w-[440px] lg:w-[500px] flex-shrink-0 border-r border-gray-100 overflow-y-scroll`}
          >
            {currentDayData && (
              <div className="p-6 space-y-1">
                {/* Day header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background: "#171717",
                    }}
                  >
                    {activeDay}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{currentDayData.theme}</h3>
                    <p className="text-sm text-gray-400">{currentDayData.date}</p>
                  </div>
                </div>

                  {/* Day Transportation */}
                {currentDayData.transportation && (
                  <div className="flex items-start gap-2 p-3 mb-6 rounded-xl bg-gray-50 border border-gray-100 text-sm">
                    <span className="text-gray-600">
                      <strong>Transport ({currentDayData.transportation.mode}):</strong> {currentDayData.transportation.note}
                    </span>
                  </div>
                )}

                {/* Destination cards */}
                {currentDayData.destinations.map((dest, idx) => {
                  const color = "#171717"
                  const isActiveDest = activeDestIdx === idx;
                  return (
                    <div key={idx} className="flex gap-4">
                      {/* Timeline line */}
                      <div className="flex flex-col items-center flex-shrink-0 w-8">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300 ${isActiveDest ? "scale-110 shadow-lg" : ""
                            }`}
                          style={{
                            background: color,
                            boxShadow: isActiveDest
                              ? `0 4px 12px ${color}50`
                              : "none",
                          }}
                        >
                          {idx + 1}
                        </div>
                        {idx < currentDayData.destinations.length - 1 && (
                          <div
                            className="w-0.5 flex-1 min-h-[40px]"
                            style={{ background: `${color}30` }}
                          />
                        )}
                      </div>

                      {/* Card */}
                      <div
                        onClick={() =>
                          setActiveDestIdx(isActiveDest ? null : idx)
                        }
                        className={`flex-1 mb-4 p-4 rounded-2xl border-2 text-left transition-all duration-300 hover:shadow-md ${isActiveDest
                          ? "shadow-lg scale-[1.01]"
                          : "border-gray-100 bg-white hover:border-gray-200"
                          }`}
                        style={
                          isActiveDest
                            ? {
                              borderColor: color,
                              background: `${color}08`,
                            }
                            : {}
                        }
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-base text-gray-900">
                              {dest.name}
                            </h4>
                          </div>
                          <ChevronDown
                            size={16}
                            className={`text-gray-400 transition-transform duration-300 flex-shrink-0 mt-1 ${isActiveDest ? "rotate-180" : ""
                              }`}
                          />
                        </div>

                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {dest.time} – {dest.endTime}
                          </span>
                          <span className="flex items-center gap-1">
                            ⏱ {dest.duration}
                          </span>
                        </div>

                        {/* Expandable content */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${isActiveDest
                            ? "max-h-[480px] opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                            }`}
                        >
                          {/* ── Image Slider ── */}
                          {isActiveDest && dest.imageUrls && dest.imageUrls.length > 0 && (() => {
                            const sliderKey = `${activeDay}-${idx}`;
                            const currentImg = sliderIndexes[sliderKey] ?? 0;
                            const total = dest.imageUrls.length;
                            const goPrev = (e: React.MouseEvent) => {
                              e.stopPropagation();
                              setSliderIndexes((s) => ({ ...s, [sliderKey]: (currentImg - 1 + total) % total }));
                            };
                            const goNext = (e: React.MouseEvent) => {
                              e.stopPropagation();
                              setSliderIndexes((s) => ({ ...s, [sliderKey]: (currentImg + 1) % total }));
                            };
                            return (
                              <div className="relative w-full h-50 rounded-xl overflow-hidden mb-3 group" onClick={(e) => e.stopPropagation()}>
                                {/* Slides */}
                                <div
                                  className="flex h-full transition-transform duration-300 ease-in-out"
                                  style={{ transform: `translateX(-${currentImg * (100 / total)}%)`, width: `${total * 100}%` }}
                                >
                                  {dest.imageUrls.map((url, imgIdx) => (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                      key={imgIdx}
                                      src={url}
                                      alt={`${dest.name} ${imgIdx + 1}`}
                                      className="h-full object-cover flex-shrink-0"
                                      style={{ width: `${100 / total}%` }}
                                      loading="lazy"
                                    />
                                  ))}
                                </div>

                                {/* Gradient overlay */}
                                <div
                                  className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
                                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)" }}
                                />

                                {/* Category + counter badge */}
                                <span
                                  className="absolute bottom-2 left-2 text-white text-xs font-semibold px-2 py-0.5 rounded-full"
                                  style={{ background: `${color}cc` }}
                                >
                                </span>
                                <span className="absolute bottom-2 right-2 text-white text-xs font-semibold bg-black/50 px-2 py-0.5 rounded-full">
                                  {currentImg + 1} / {total}
                                </span>

                                {/* Arrow buttons — only show if > 1 image */}
                                {total > 1 && (
                                  <>
                                    <button
                                      onClick={goPrev}
                                      aria-label="Previous photo"
                                      className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
                                    >
                                      <ChevronLeft size={14} />
                                    </button>
                                    <button
                                      onClick={goNext}
                                      aria-label="Next photo"
                                      className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
                                    >
                                      <ChevronRight size={14} />
                                    </button>
                                  </>
                                )}

                                {/* Dot indicators */}
                                {total > 1 && (
                                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
                                    {dest.imageUrls.map((_, dotIdx) => (
                                      <button
                                        key={dotIdx}
                                        onClick={(e) => { e.stopPropagation(); setSliderIndexes((s) => ({ ...s, [sliderKey]: dotIdx })); }}
                                        aria-label={`Go to photo ${dotIdx + 1}`}
                                        className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                                        style={{ background: dotIdx === currentImg ? "white" : "rgba(255,255,255,0.45)" }}
                                      />
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })()}

                          <p className="text-sm text-gray-600 leading-relaxed mb-2">
                            {dest.description}
                          </p>
                          {dest.tips && (
                            <div
                              className="flex items-start gap-2 p-2.5 rounded-xl text-xs"
                              style={{
                                background: `${color}10`,
                                color: color,
                              }}
                            >
                              <Lightbulb
                                size={14}
                                className="flex-shrink-0 mt-0.5"
                              />
                              <span>{dest.tips}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Google Maps route link */}
                {currentDayData.destinations.length >= 2 &&
                  (() => {
                    const waypoints = currentDayData.destinations
                      .map((d) => `${d.lat},${d.lng}`)
                      .join("/");
                    const mapsUrl = `https://www.google.com/maps/dir/${waypoints}`;
                    const color = "#171717";
                    return (
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 mt-4 px-4 py-3.5 rounded-2xl border-2 border-dashed transition-all duration-300 hover:shadow-md group"
                        style={{
                          borderColor: `${color}40`,
                          background: `${color}06`,
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${color}15` }}
                        >
                          <MapPin size={18} style={{ color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-semibold text-gray-900 block">
                            {t("createPlan.results.day")} {activeDay}{" "}
                            {t("createPlan.results.routeMap")} - See On Google Maps
                          </span>
                          <span className="text-xs text-gray-400 block truncate">
                            {currentDayData.destinations
                              .map((d) => d.name)
                              .join(" → ")}
                          </span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-400 group-hover:text-gray-600 flex-shrink-0 transition-colors"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    );
                  })()}

                {/* Regenerate button */}
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <button
                    onClick={regenerate}
                    disabled={isRegenerating}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border-2 border-dashed border-gray-200 text-gray-500 font-semibold text-sm hover:border-black hover:text-black hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <RefreshCw
                      size={16}
                      className="transition-transform duration-500 group-hover:rotate-180"
                    />
                    {isRegenerating
                      ? t("planHistory.regenerating")
                      : t("planHistory.regenerate")}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Map */}
          <div
            className={`${showMap ? "flex" : "hidden"} md:flex flex-1 min-h-0`}
          >
            <div className="w-full h-full p-4">
              <ItineraryMap
                itinerary={itinerary}
                activeDay={activeDay}
                activeDestinationIndex={activeDestIdx}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Plan History Modal ─── */}
      <PlanHistoryModal
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
        currentPlanId={id}
      />

      {/* ─── Email Modal ─── */}
      {showEmailModal && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
            onClick={closeEmailModal}
          />
          {/* Modal */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-gray-900">Send Itinerary via Email</h2>
                    <p className="text-xs text-gray-400 mt-0.5">We&apos;ll send your full plan to your inbox</p>
                  </div>
                </div>
                <button
                  onClick={closeEmailModal}
                  className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal body */}
              <div className="px-6 py-6">
                {emailStatus === "success" ? (
                  /* Success state */
                  <div className="text-center py-4">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Sent!</h3>
                    <p className="text-sm text-gray-500 mb-6">
                      Your itinerary has been sent to <strong>{emailInput}</strong>
                    </p>
                    <button
                      onClick={closeEmailModal}
                      className="px-6 py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  /* Input state */
                  <>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Recipient Email Address
                    </label>
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-black focus-within:ring-2 focus-within:ring-black/10 transition-all">
                      <Mail size={16} className="text-gray-400 flex-shrink-0" />
                      <input
                        id="email-input"
                        type="email"
                        value={emailInput}
                        onChange={(e) => {
                          setEmailInput(e.target.value);
                          setEmailError(null);
                          setEmailStatus("idle");
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && emailInput.trim()) sendEmail();
                        }}
                        placeholder="you@example.com"
                        className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
                        disabled={emailSending}
                        autoFocus
                      />
                    </div>

                    {/* Error */}
                    {emailError && (
                      <p className="mt-2 text-xs text-red-600">{emailError}</p>
                    )}

                    {/* Itinerary preview */}
                    <div className="mt-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Sending</p>
                      <p className="text-sm font-bold text-gray-900">{itinerary?.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {itinerary?.days.length} {itinerary?.days.length === 1 ? "day" : "days"} ·{" "}
                        {itinerary?.days.reduce((acc, d) => acc + d.destinations.length, 0)} destinations
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-6">
                      <button
                        onClick={closeEmailModal}
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        id="send-email-btn"
                        onClick={sendEmail}
                        disabled={!emailInput.trim() || emailSending}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        {emailSending ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            Send Email
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
