"use client";

import React, { useEffect, useMemo, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

/* ─── Fix default marker icons ─── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

/* ─── Types ─── */
export interface Destination {
  name: string;
  description: string;
  time: string;
  endTime: string;
  duration: string;
  category: string;
  lat: number;
  lng: number;
  tips: string;
}

export interface ItineraryDay {
  dayNumber: number;
  date: string;
  theme: string;
  destinations: Destination[];
}

export interface Itinerary {
  title: string;
  summary: string;
  days: ItineraryDay[];
}

interface ItineraryMapProps {
  itinerary: Itinerary;
  activeDay: number;
  activeDestinationIndex?: number | null;
}

/* ─── Day color palette ─── */
const DAY_COLORS = [
  "#0EA5E9", // sky-500
  "#8B5CF6", // violet-500
  "#F97316", // orange-500
  "#10B981", // emerald-500
  "#EC4899", // pink-500
  "#EAB308", // yellow-500
  "#06B6D4", // cyan-500
  "#F43F5E", // rose-500
];

/* ─── Category emoji map ─── */
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

/* ─── Custom numbered marker icon ─── */
function createNumberedIcon(num: number, color: string) {
  return L.divIcon({
    className: "itinerary-marker",
    html: `<div style="
      background: ${color};
      color: white;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 14px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      box-shadow: 0 4px 12px ${color}55, 0 2px 4px rgba(0,0,0,0.15);
      border: 2.5px solid white;
      position: relative;
      z-index: 10;
    ">${num}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });
}

function RoutingMachine({
  destinations,
  color,
}: {
  destinations: Destination[];
  color: string;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map || destinations.length < 2) return;

    const waypoints = destinations.map((d) => L.latLng(d.lat, d.lng));

    const routingControl = L.Routing.control({
      waypoints,
      lineOptions: {
        styles: [
          { color: color, opacity: 0.85, weight: 4 }, // main line
        ],
        extendToWaypoints: true,
        missingRouteTolerance: 0,
      },
      show: false, // hide instructions panel
      addWaypoints: false,
      routeWhileDragging: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
      // @ts-expect-error createMarker is passed to the default L.Routing.Plan
      createMarker: () => null, // hide default markers from routing machine
    });

    routingControl.addTo(map);

    return () => {
      if (map && routingControl) {
        map.removeControl(routingControl);
      }
    };
  }, [map, destinations, color]);

  return null;
}

/* ─── Auto-fit bounds ─── */
function FitBounds({
  destinations,
  activeDestinationIndex,
}: {
  destinations: Destination[];
  activeDestinationIndex?: number | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (destinations.length === 0) return;

    // If a specific destination is active, fly to it
    if (
      activeDestinationIndex !== null &&
      activeDestinationIndex !== undefined &&
      destinations[activeDestinationIndex]
    ) {
      const d = destinations[activeDestinationIndex];
      map.flyTo([d.lat, d.lng], 15, { duration: 0.8 });
      return;
    }

    // Otherwise fit all destinations
    const bounds = L.latLngBounds(
      destinations.map((d) => [d.lat, d.lng] as [number, number])
    );
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14, animate: true });
  }, [destinations, activeDestinationIndex, map]);

  return null;
}

/* ─── Component ─── */
export default function ItineraryMap({
  itinerary,
  activeDay,
  activeDestinationIndex,
}: ItineraryMapProps) {
  const mapRef = useRef<L.Map | null>(null);

  const day = useMemo(
    () => itinerary.days.find((d) => d.dayNumber === activeDay),
    [itinerary, activeDay]
  );

  const destinations = day?.destinations || [];
  const color = DAY_COLORS[(activeDay - 1) % DAY_COLORS.length];

  const center: [number, number] =
    destinations.length > 0
      ? [destinations[0].lat, destinations[0].lng]
      : [-7.797, 110.365];

  return (
    <>
      <style>{`
        .leaflet-routing-container {
          display: none !important;
        }
      `}</style>
      <MapContainer
        center={center}
        zoom={12}
        ref={mapRef}
        className="w-full h-full rounded-2xl"
        style={{ minHeight: "400px", zIndex: 0 }}
        zoomControl={false}
      >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Leaflet Routing Machine for Roads */}
      <RoutingMachine destinations={destinations} color={color} />

      {/* Destination markers */}
      {destinations.map((dest, idx) => (
        <Marker
          key={`${activeDay}-${idx}`}
          position={[dest.lat, dest.lng]}
          icon={createNumberedIcon(idx + 1, color)}
        >
          <Popup>
            <div style={{ minWidth: 200, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 18 }}>
                  {CATEGORY_EMOJI[dest.category] || "📍"}
                </span>
                <strong style={{ fontSize: 14, color: "#1a1a1a" }}>
                  {dest.name}
                </strong>
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "#666",
                  margin: "4px 0 6px",
                  lineHeight: 1.4,
                }}
              >
                {dest.description}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  fontSize: 11,
                  color: "#888",
                }}
              >
                <span>🕐 {dest.time} – {dest.endTime}</span>
                <span>⏱ {dest.duration}</span>
              </div>
              {dest.tips && (
                <p
                  style={{
                    fontSize: 11,
                    color: color,
                    marginTop: 6,
                    fontStyle: "italic",
                  }}
                >
                  💡 {dest.tips}
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

      <FitBounds
        destinations={destinations}
        activeDestinationIndex={activeDestinationIndex}
      />
    </MapContainer>
    </>
  );
}
