"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useLocale } from "@/components/LocaleContext";
import {
  useJoyride,
  STATUS,
  EVENTS,
  ACTIONS,
  Step,
  EventData,
} from "react-joyride";
import { RotateCcw } from "lucide-react";
import { createTutorialTooltip } from "@/components/TutorialTooltip";

const TOUR_STORAGE_KEY = "create-plan-tour-completed";

// Maps each tour step index to the wizard step it requires in the DOM
const TOUR_WIZARD_STEP = [1, 1, 1, 1, 2, 3, 4, 5] as const;

// Stable tooltip component — created outside render so the reference never changes
const CustomTooltip = createTutorialTooltip("createPlanTutorial");

interface Props {
  onWizardStepChange: (step: number) => void;
}

export default function CreatePlanTutorial({ onWizardStepChange }: Props) {
  const { t } = useLocale();
  const [shouldRun, setShouldRun] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  // Lazy-init from localStorage so we never call setState synchronously in an effect
  const [showRestartButton, setShowRestartButton] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem(TOUR_STORAGE_KEY);
  });

  const handleEvent = useCallback(
    (data: EventData) => {
      const { status, type, action, index } = data;

      // Handle tour completion or skip — reset wizard to step 1
      const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];
      if (finishedStatuses.includes(status)) {
        localStorage.setItem(TOUR_STORAGE_KEY, "true");
        setShowRestartButton(true);
        setShouldRun(false);
        onWizardStepChange(1);
        return;
      }

      // Controlled step navigation
      if (type === EVENTS.STEP_AFTER) {
        if (action === ACTIONS.NEXT) {
          const next = index + 1;
          const nextWizard = TOUR_WIZARD_STEP[next];
          const curWizard = TOUR_WIZARD_STEP[index];
          if (nextWizard !== undefined && nextWizard !== curWizard) {
            // Navigate wizard first, then advance tour step after DOM settles
            onWizardStepChange(nextWizard);
            setTimeout(() => setTourStep(next), 300);
          } else {
            setTourStep(next);
          }
        } else if (action === ACTIONS.PREV) {
          const prev = index - 1;
          if (prev >= 0) {
            const prevWizard = TOUR_WIZARD_STEP[prev];
            const curWizard = TOUR_WIZARD_STEP[index];
            if (prevWizard !== undefined && prevWizard !== curWizard) {
              onWizardStepChange(prevWizard);
              setTimeout(() => setTourStep(prev), 300);
            } else {
              setTourStep(prev);
            }
          }
        }
      }
    },
    [onWizardStepChange],
  );

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
        // Calendar card — visible on wizard step 1
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
      {
        // Companion picker — visible on wizard step 2
        target: "#create-plan-companions",
        title: t("createPlanTutorial.steps.4.title"),
        content: t("createPlanTutorial.steps.4.content"),
        placement: "bottom",
      },
      {
        // Budget slider — visible on wizard step 3
        target: "#create-plan-budget",
        title: t("createPlanTutorial.steps.5.title"),
        content: t("createPlanTutorial.steps.5.content"),
        placement: "bottom",
      },
      {
        // Interests grid — visible on wizard step 4
        target: "#create-plan-interests",
        title: t("createPlanTutorial.steps.6.title"),
        content: t("createPlanTutorial.steps.6.content"),
        placement: "bottom",
      },
      {
        // Trip summary card — visible on wizard step 5
        target: "#create-plan-summary",
        title: t("createPlanTutorial.steps.7.title"),
        content: t("createPlanTutorial.steps.7.content"),
        placement: "top",
      },
    ],
    [t],
  );

  const { Tour } = useJoyride({
    steps,
    run: shouldRun,
    stepIndex: tourStep,
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
    setTourStep(0);
    setShowRestartButton(false);
    onWizardStepChange(1);
    setTimeout(() => setShouldRun(true), 100);
  }, [onWizardStepChange]);

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
