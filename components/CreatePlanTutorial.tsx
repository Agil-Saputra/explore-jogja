"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useLocale } from "@/components/LocaleContext";
import { useJoyride, STATUS, Step, EventData } from "react-joyride";
import { RotateCcw } from "lucide-react";
import { createTutorialTooltip } from "@/components/TutorialTooltip";

const TOUR_STORAGE_KEY = "create-plan-tour-completed";

// Stable tooltip component — created outside render so the reference never changes
const CustomTooltip = createTutorialTooltip("createPlanTutorial");

export default function CreatePlanTutorial() {
  const { t } = useLocale();
  const [shouldRun, setShouldRun] = useState(false);
  // Lazy-init from localStorage so we never call setState synchronously in an effect
  const [showRestartButton, setShowRestartButton] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem(TOUR_STORAGE_KEY);
  });

  const handleEvent = useCallback((data: EventData) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];
    if (finishedStatuses.includes(status)) {
      localStorage.setItem(TOUR_STORAGE_KEY, "true");
      setShowRestartButton(true);
      setShouldRun(false);
    }
  }, []);

  const steps = useMemo<Step[]>(
    () => [
      {
        // Step badge + title — always visible while the wizard is active (steps 1–5)
        target: "#create-plan-header",
        title: t("createPlanTutorial.steps.0.title"),
        content: t("createPlanTutorial.steps.0.content"),
        placement: "bottom",
        disableBeacon: true,
      },
      {
        // Calendar card — visible on wizard step 1 when the tour auto-starts
        target: "#create-plan-calendar",
        title: t("createPlanTutorial.steps.1.title"),
        content: t("createPlanTutorial.steps.1.content"),
        placement: "bottom",
      },
      {
        // Active-hours picker — visible on wizard step 1
        target: "#create-plan-active-hours",
        title: t("createPlanTutorial.steps.2.title"),
        content: t("createPlanTutorial.steps.2.content"),
        placement: "top",
      },
      {
        // Bottom nav buttons — visible on wizard steps 1–4
        target: "#create-plan-nav",
        title: t("createPlanTutorial.steps.3.title"),
        content: t("createPlanTutorial.steps.3.content"),
        placement: "top",
      },
    ],
    [t],
  );

  const { Tour } = useJoyride({
    steps,
    run: shouldRun,
    continuous: true,
    scrollToFirstStep: true,
    onEvent: handleEvent,
    tooltipComponent: CustomTooltip,
    options: {
      zIndex: 10000,
      overlayColor: "rgba(0, 0, 0, 0.45)",
      arrowColor: "rgba(255, 255, 255, 0.95)",
      spotlightRadius: 16,
      skipBeacon: true,
      scrollOffset: 80,
    },
  });

  // Only auto-start for first-time visitors (showRestartButton is false)
  useEffect(() => {
    if (showRestartButton) return;
    const timer = setTimeout(() => setShouldRun(true), 1500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally run once on mount

  const restartTour = useCallback(() => {
    setShouldRun(false);
    setShowRestartButton(false);
    setTimeout(() => setShouldRun(true), 100);
  }, []);

  return (
    <>
      {Tour}

      {showRestartButton && (
        <button
          onClick={restartTour}
          aria-label="Restart create plan tutorial"
          title="Restart create plan tutorial"
          style={{
            position: "fixed",
            bottom: 24,
            left: 24,
            zIndex: 9999,
            width: 48,
            height: 48,
            borderRadius: 14,
            background: "linear-gradient(135deg, #1a1a1a, #333)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 4px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            color: "white",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.boxShadow =
              "0 8px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)";
          }}
        >
          <RotateCcw size={20} />
        </button>
      )}
    </>
  );
}
