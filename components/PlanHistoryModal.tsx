"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  X,
  MapPin,
  CalendarDays,
  Trash2,
  ExternalLink,
  Sparkles,
  Clock,
} from "lucide-react";
import { useLocale } from "@/components/LocaleContext";
import { getPlans, deletePlan, type SavedPlan } from "@/lib/planStorage";

/* ─── Helpers ─── */
function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatTimeAgo(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return formatDate(timestamp);
}

function getDayCount(plan: SavedPlan): number {
  return plan.itinerary?.days?.length ?? 0;
}

/* ─── Props ─── */
interface PlanHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlanId?: string;
}

/* ─── Component ─── */
export default function PlanHistoryModal({
  isOpen,
  onClose,
  currentPlanId,
}: PlanHistoryModalProps) {
  const { t } = useLocale();
  const [plans, setPlans] = useState<SavedPlan[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  /* Load plans whenever modal opens */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setPlans(getPlans()), 0);
    }
  }, [isOpen]);

  /* Lock scroll while open — also stop Lenis smooth scroll */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();
    } else {
      document.body.style.overflow = "";
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [isOpen]);

  /* Escape to close */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const handleDelete = useCallback(
    (id: string, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDeletingId(id);
      setTimeout(() => {
        deletePlan(id);
        setPlans((prev) => prev.filter((p) => p.id !== id));
        setDeletingId(null);
      }, 300);
    },
    [],
  );


  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[99] bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-in panel (mirrors ChatModal) */}
      <div
        className={`fixed inset-y-0 right-0 z-[100] w-full md:w-[480px] bg-white flex flex-col shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        {/* ─── Header ─── */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-cream flex-shrink-0">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-[15px] font-bold text-gray-900 leading-tight">
                {t("planHistory.historyModal.title")}
              </h2>
              <p className="text-[12px] text-gray-400 leading-tight mt-0.5">
                {t("planHistory.historyModal.subtitle")}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-2xl hover:bg-black/5 transition-colors text-gray-400 hover:text-gray-900"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* ─── Plan list ─── */}
        <div
          data-lenis-prevent
          className="flex-1 min-h-0 overflow-y-auto"
          style={{ overscrollBehavior: "contain" }}
        >
          {plans.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center h-full text-center px-8 py-16">
              <div className="w-20 h-20 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-5">
                <Sparkles size={28} className="text-gray-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-gray-700 mb-1">
                {t("planHistory.historyModal.empty")}
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed max-w-xs">
                {t("planHistory.historyModal.emptyHint")}
              </p>
            </div>
          ) : (
            <div className="px-4 py-4 space-y-3">
              {plans.map((plan) => {
                const days = getDayCount(plan);
                const isCurrent = plan.id === currentPlanId;
                const isDeleting = deletingId === plan.id;

                return (
                  <div
                    key={plan.id}
                    className={`group relative rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                      isCurrent
                        ? "border-gray-900 bg-gray-50"
                        : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                    } ${isDeleting ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                  >
                    <div className="pl-5 pr-4 py-4">
                      {/* Title row */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {isCurrent && (
                              <span
                                className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide text-white"
                              >
                                Current
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-[15px] text-gray-900 leading-snug truncate">
                            {plan.itinerary?.title ?? "Untitled Plan"}
                          </h3>
                        </div>

                        {/* Delete button */}
                        <button
                          onClick={(e) => handleDelete(plan.id, e)}
                          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 hover:bg-red-50 text-gray-300 hover:text-red-500 transition-all duration-200"
                          title={t("planHistory.historyModal.deleteThis")}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                        <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                          <CalendarDays size={13} />
                          {t("planHistory.historyModal.created")}{" "}
                          {formatDate(plan.createdAt)}
                        </span>
                        <span className="text-gray-200 text-[10px]">·</span>
                        <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                          <Clock size={13} />
                          {formatTimeAgo(plan.createdAt)}
                        </span>
                        <span className="text-gray-200 text-[10px]">·</span>
                        <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                          <MapPin size={13} />
                          {days}{" "}
                          {days === 1
                            ? t("planHistory.historyModal.daysCount_one")
                            : t("planHistory.historyModal.daysCount_other")}
                        </span>
                      </div>

                      {/* Day chips preview */}
                      {plan.itinerary?.days && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {plan.itinerary.days.map((day, di) => (
                            <span
                              key={di}
                              className="inline-flex bg-black items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white"
                              
                            >
                              Day {day.dayNumber}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Interests tags */}
                      {plan.preferences?.interests?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {plan.preferences.interests.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[11px] font-medium capitalize"
                            >
                              {tag}
                            </span>
                          ))}
                          {plan.preferences.interests.length > 4 && (
                            <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-400 text-[11px]">
                              +{plan.preferences.interests.length - 4}
                            </span>
                          )}
                        </div>
                      )}

                      {/* View button */}
                      <Link
                        href={`/plan-your-visit/result/${plan.id}`}
                        onClick={onClose}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 border-2"
                      >
                        <ExternalLink size={13} />
                        {t("planHistory.historyModal.viewThis")}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
