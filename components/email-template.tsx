import * as React from "react";

interface Destination {
  name: string;
  description: string;
  time: string;
  endTime: string;
  duration: string;
  category: string;
  tips?: string;
}

interface TransportInfo {
  mode: string;
  note: string;
}

interface Day {
  dayNumber: number;
  date: string;
  theme: string;
  transportation?: TransportInfo;
  destinations: Destination[];
}

interface Itinerary {
  title: string;
  summary: string;
  days: Day[];
}

interface EmailTemplateProps {
  itinerary: Itinerary;
}

const DAY_COLORS = [
  "#171717",
  "#8B5CF6",
  "#F97316",
  "#10B981",
  "#EC4899",
  "#EAB308",
  "#06B6D4",
  "#F43F5E",
];

const CATEGORY_EMOJI: Record<string, string> = {
  temple: "🛕",
  palace: "🏛️",
  nature: "🌿",
  food: "🍜",
  art: "🎨",
  shopping: "🛍️",
  spiritual: "🧘",
  nightlife: "🎶",
  photography: "📸",
  museum: "🏛️",
  park: "🌳",
  beach: "🏖️",
  village: "🏘️",
};

export function EmailTemplate({ itinerary }: EmailTemplateProps) {

  return (
    <div
      style={{
        backgroundColor: "#f5f0e8",
        fontFamily:
          "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
        padding: "32px 16px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            padding: "40px 40px 32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 20px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Explore Jogja
          </p>
          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "28px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            {itinerary.title}
          </h1>
          <p
            style={{
              margin: "0 auto",
              fontSize: "15px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.6,
              maxWidth: "480px",
            }}
          >
            {itinerary.summary}
          </p>

        </div>

        {/* Days */}
        <div style={{ padding: "32px 40px" }}>
          {itinerary.days.map((day, dayIdx) => {
            const color = DAY_COLORS[dayIdx % DAY_COLORS.length];
            return (
              <div key={day.dayNumber} style={{ marginBottom: "32px" }}>
                {/* Day header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      backgroundColor: color,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: 800,
                      color: "#ffffff",
                      flexShrink: 0,
                    }}
                  >
                    {day.dayNumber}
                  </div>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#111111",
                      }}
                    >
                      {day.theme}
                    </p>
                    <p
                      style={{
                        margin: "2px 0 0",
                        fontSize: "12px",
                        color: "#9ca3af",
                        fontWeight: 500,
                      }}
                    >
                      {day.date}
                    </p>
                  </div>
                </div>

                {/* Transport */}
                {day.transportation && (
                  <div
                    style={{
                      backgroundColor: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      padding: "12px 16px",
                      fontSize: "13px",
                      color: "#374151",
                      marginBottom: "12px",
                    }}
                  >
                    <strong>Transport ({day.transportation.mode}):</strong>{" "}
                    {day.transportation.note}
                  </div>
                )}

                {/* Destinations */}
                {day.destinations.map((dest, destIdx) => (
                  <div
                    key={destIdx}
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1.5px solid #e5e7eb",
                      borderLeft: `4px solid ${color}`,
                      borderRadius: "14px",
                      padding: "16px 18px",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <p style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#111111" }}>
                        <span style={{ marginRight: "8px", fontSize: "18px" }}>
                          {CATEGORY_EMOJI[dest.category] || "📍"}
                        </span>
                        {dest.name}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "12px",
                          color: "#9ca3af",
                          whiteSpace: "nowrap" as const,
                          flexShrink: 0,
                        }}
                      >
                        ⏰ {dest.time} – {dest.endTime}
                      </p>
                    </div>
                    <p
                      style={{
                        margin: "8px 0 0",
                        fontSize: "13px",
                        color: "#6b7280",
                        lineHeight: 1.6,
                      }}
                    >
                      {dest.description}
                    </p>
                    {dest.tips && (
                      <div
                        style={{
                          marginTop: "10px",
                          backgroundColor: `${color}15`,
                          borderRadius: "8px",
                          padding: "8px 12px",
                          fontSize: "12px",
                          color: color,
                          fontWeight: 500,
                        }}
                      >
                        💡 {dest.tips}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#f9fafb",
            borderTop: "1px solid #e5e7eb",
            padding: "28px 40px",
            textAlign: "center" as const,
          }}
        >
          <p
            style={{
              margin: "0 0 6px",
              fontSize: "14px",
              fontWeight: 700,
              color: "#111111",
            }}
          >
            Explore Jogja
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              color: "#9ca3af",
              lineHeight: 1.6,
            }}
          >
            Your AI-powered Yogyakarta travel companion.
            <br />
            Have an amazing trip! 🌟
          </p>
        </div>
      </div>
    </div>
  );
}
