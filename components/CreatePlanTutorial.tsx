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
// Indices: 0=step1(calendar+active-hours), 1=companions, 2=budget, 3=interests, 4=summary
const TOUR_WIZARD_STEP = [1, 2, 3, 4, 5] as const;

// First tour step index for each wizard step
const WIZARD_FIRST_TOUR_STEP: Record<number, number> = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 };

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

      // Close tour when user clicks outside the tooltip (overlay click)
      if (action === ACTIONS.CLOSE || action === ACTIONS.SKIP) {
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
            // Last tour step for this wizard step — stop tour, advance wizard,
            // then resume tour at the first step of the next wizard step.
            setShouldRun(false);
            onWizardStepChange(nextWizard);
            setTimeout(() => {
              setTourStep(next);
              setShouldRun(true);
            }, 400);
          } else if (nextWizard !== undefined) {
            // Still within the same wizard step — simply advance tour index.
            setTourStep(next);
          } else {
            // Reached the very last tour step — mark as finished.
            localStorage.setItem(TOUR_STORAGE_KEY, "true");
            setShowRestartButton(true);
            setShouldRun(false);
            onWizardStepChange(1);
          }
        } else if (action === ACTIONS.PREV) {
          const prev = index - 1;
          if (prev >= 0) {
            const prevWizard = TOUR_WIZARD_STEP[prev];
            const curWizard = TOUR_WIZARD_STEP[index];
            if (prevWizard !== undefined && prevWizard !== curWizard) {
              // Going back to a previous wizard step
              setShouldRun(false);
              onWizardStepChange(prevWizard);
              setTimeout(() => {
                setTourStep(prev);
                setShouldRun(true);
              }, 400);
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
        // Calendar + Active Hours — merged into one step covering the whole wizard step 1 area
        target: "#create-plan-step1",
        title: t("createPlanTutorial.steps.1.title"),
        content: t("createPlanTutorial.steps.1.content"),
        placement: "right",
      },
      {
        // Companion picker — visible on wizard step 2
        target: "#create-plan-companions",
        title: t("createPlanTutorial.steps.4.title"),
        content: t("createPlanTutorial.steps.4.content"),
        placement: "right",
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

  const { Tour, step } = useJoyride({
    steps,
    run: shouldRun,
    stepIndex: tourStep,
    continuous: false,
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
