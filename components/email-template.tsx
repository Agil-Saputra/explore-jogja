import * as React from "react";

interface Destination {
  name: string;
  description: string;
  time: string;
  endTime: string;
  duration: string;
  category: string;
  lat?: number;
  lng?: number;
  tips?: string;
  imageUrls?: string[];
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
            const color =  "#171717";
            return (
              <div key={day.dayNumber} style={{ marginBottom: "32px" }}>
                {/* Day header */}
                <table
                  role="presentation"
                  cellPadding={0}
                  cellSpacing={0}
                  border={0}
                  width="100%"
                  style={{ marginBottom: "16px" }}
                >
                  <tbody>
                    <tr>
                      <td
                        width="36"
                        valign="middle"
                        style={{
                          width: "36px",
                          paddingRight: "12px",
                        }}
                      >
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            backgroundColor: color,
                            borderRadius: "10px",
                            textAlign: "center",
                            lineHeight: "36px",
                            fontSize: "16px",
                            fontWeight: 800,
                            color: "#ffffff",
                          }}
                        >
                          {day.dayNumber}
                        </div>
                      </td>
                      <td valign="middle">
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
                      </td>
                    </tr>
                  </tbody>
                </table>

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
                    {dest.imageUrls && dest.imageUrls.length > 0 && (
                      <div
                        style={{
                          width: "100%",
                          height: "160px",
                          borderRadius: "8px",
                          overflow: "hidden",
                          marginBottom: "14px",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={dest.imageUrls[0]}
                          alt={dest.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </div>
                    )}
                    <table
                      role="presentation"
                      cellPadding={0}
                      cellSpacing={0}
                      border={0}
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td valign="top" style={{ paddingRight: "8px" }}>
                            <p style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#111111" }}>
                              {dest.name}
                            </p>
                          </td>
                          <td valign="top" align="right" style={{ whiteSpace: "nowrap" }}>
                            <p
                              style={{
                                margin: 0,
                                fontSize: "12px",
                                color: "#9ca3af",
                              }}
                            >
                              ⏰ {dest.time} – {dest.endTime}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                    {dest.lat && dest.lng && (
                      <div style={{ marginTop: "12px" }}>
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${dest.lat},${dest.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-block",
                            padding: "6px 12px",
                            backgroundColor: "#f9fafb",
                            color: "#374151",
                            textDecoration: "none",
                            borderRadius: "6px",
                            fontSize: "12px",
                            fontWeight: 600,
                            border: "1px solid #e5e7eb",
                          }}
                        >
                          🗺️ Get Directions
                        </a>
                      </div>
                    )}
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
