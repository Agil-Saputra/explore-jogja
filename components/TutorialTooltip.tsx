"use client";

import React from "react";
import { TooltipRenderProps } from "react-joyride";
import { Compass, X, ArrowRight, ArrowLeft } from "lucide-react";
import { useLocale } from "@/components/LocaleContext";

/**
 * Factory that returns a Joyride-compatible CustomTooltip scoped to a
 * translation namespace (e.g. "planVisitTutorial" or "createPlanTutorial").
 * Call this OUTSIDE of a React render so the returned component has a stable
 * reference and Joyride doesn't unmount/remount it on every render.
 */
export function createTutorialTooltip(namespace: string) {
  function TutorialTooltip({
    continuous,
    index,
    step,
    backProps,
    skipProps,
    primaryProps,
    tooltipProps,
    size,
    isLastStep,
  }: TooltipRenderProps) {
    const { t } = useLocale();
    const progress = ((index + 1) / size) * 100;

    return (
      <div
        {...tooltipProps}
        style={{
          maxWidth: 420,
          minWidth: 320,
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: 20,
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)",
            overflow: "hidden",
            fontFamily: "var(--font-jakarta), sans-serif",
          }}
        >
          {/* Progress bar */}
          <div style={{ height: 4, background: "#f0f0f0" }}>
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #1a1a1a, #4a4a4a)",
                borderRadius: "0 4px 4px 0",
                transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>

          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              padding: "16px 20px 0",
            }}
          >
                {step.title && (
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#1a1a1a",
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                {step.title as string}
              </h3>
            )}
            <button
              {...skipProps}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#333")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div style={{ padding: "16px 20px 8px" }}>
        
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "#555",
                margin: 0,
              }}
            >
              {step.content as string}
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px 16px",
              gap: 8,
            }}
          >
            <div>
              {index > 0 && (
                <button
                  {...backProps}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "none",
                    border: "1.5px solid #ddd",
                    borderRadius: 12,
                    padding: "8px 16px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#666",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#999";
                    e.currentTarget.style.color = "#333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#ddd";
                    e.currentTarget.style.color = "#666";
                  }}
                >
                  <ArrowLeft size={14} />
                  {t(`${namespace}.back`)}
                </button>
              )}

              {index == 0 && (
               <button
                  {...skipProps}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "none",
                    border: "1.5px solid #ddd",
                    borderRadius: 12,
                    padding: "8px 16px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#666",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#999";
                    e.currentTarget.style.color = "#333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#ddd";
                    e.currentTarget.style.color = "#666";
                  }}
                >
                  Skip Tutorial
                </button>
              )}
            </div>

            {continuous && (
              <button
                {...primaryProps}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "linear-gradient(135deg, #1a1a1a, #333)",
                  border: "none",
                  borderRadius: 12,
                  padding: "8px 20px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 14px rgba(0, 0, 0, 0.15)";
                }}
              >
                {isLastStep ? t(`${namespace}.done`) : t(`${namespace}.next`)}
                {!isLastStep && <ArrowRight size={14} />}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  TutorialTooltip.displayName = `TutorialTooltip(${namespace})`;
  return TutorialTooltip;
}
