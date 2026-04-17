"use client";

import React, { useEffect, useMemo, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

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

/* ─── Mapbox access token ─── */
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

/* ─── Create numbered marker DOM element ─── */
function createMarkerElement(num: number, color: string): HTMLDivElement {
  const container = document.createElement("div");
  container.style.cursor = "pointer";

  const el = document.createElement("div");
  el.style.cssText = `
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
    transition: transform 0.2s ease;
  `;
  el.textContent = String(num);

  container.appendChild(el);

  container.addEventListener("mouseenter", () => {
    el.style.transform = "scale(1.15)";
  });
  container.addEventListener("mouseleave", () => {
    el.style.transform = "scale(1)";
  });
  return container;
}

/* ─── Create popup HTML content ─── */
function createPopupHTML(dest: Destination, color: string): string {
  const emoji = CATEGORY_EMOJI[dest.category] || "📍";
  return `
    <div style="min-width:200px;font-family:'Plus Jakarta Sans',sans-serif;padding:4px">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
        <span style="font-size:18px">${emoji}</span>
        <strong style="font-size:14px;color:#1a1a1a">${dest.name}</strong>
      </div>
      <p style="font-size:12px;color:#666;margin:4px 0 6px;line-height:1.4">
        ${dest.description}
      </p>
      <div style="display:flex;gap:8px;font-size:11px;color:#888">
        <span>🕐 ${dest.time} – ${dest.endTime}</span>
        <span>⏱ ${dest.duration}</span>
      </div>
      ${dest.tips ? `<p style="font-size:11px;color:${color};margin-top:6px;font-style:italic">💡 ${dest.tips}</p>` : ""}
    </div>
  `;
}

/* ─── Fetch route geometry from Mapbox Directions API ─── */
async function fetchRouteGeometry(
  destinations: Destination[],
  token: string
): Promise<GeoJSON.LineString | null> {
  if (destinations.length < 2 || !token) return null;

  const coords = destinations
    .map((d) => `${d.lng},${d.lat}`)
    .join(";");

  try {
    const res = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${coords}?geometries=geojson&overview=full&access_token=${token}`
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.routes?.[0]?.geometry || null;
  } catch {
    return null;
  }
}

/* ─── Component ─── */
export default function ItineraryMap({
  itinerary,
  activeDay,
  activeDestinationIndex,
}: ItineraryMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const popupsRef = useRef<mapboxgl.Popup[]>([]);

  const day = useMemo(
    () => itinerary.days.find((d) => d.dayNumber === activeDay),
    [itinerary, activeDay]
  );

  const destinations = day?.destinations || [];
  const color = DAY_COLORS[(activeDay - 1) % DAY_COLORS.length];

  const center: [number, number] =
    destinations.length > 0
      ? [destinations[0].lng, destinations[0].lat]
      : [110.365, -7.797]; // Mapbox uses [lng, lat]

  /* ─── Initialize map ─── */
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 12,
      attributionControl: false,
    });

    map.addControl(
      new mapboxgl.AttributionControl({ compact: true }),
      "bottom-right"
    );

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ─── Update markers, popups, and route when day changes ─── */
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Wait for map style to load
    const updateMap = async () => {
      // Clear existing markers & popups
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      popupsRef.current.forEach((p) => p.remove());
      popupsRef.current = [];

      // Remove existing route layer & source
      if (map.getLayer("route-line")) map.removeLayer("route-line");
      if (map.getLayer("route-line-border")) map.removeLayer("route-line-border");
      if (map.getSource("route")) map.removeSource("route");

      if (destinations.length === 0) return;

      // Add markers
      destinations.forEach((dest, idx) => {
        const el = createMarkerElement(idx + 1, color);

        const popup = new mapboxgl.Popup({
          offset: 20,
          closeButton: true,
          closeOnClick: false,
          maxWidth: "280px",
          focusAfterOpen: false,
          className: "itinerary-mapbox-popup",
        }).setHTML(createPopupHTML(dest, color));

        const marker = new mapboxgl.Marker({ element: el })
          .setLngLat([dest.lng, dest.lat])
          .setPopup(popup)
          .addTo(map);

        markersRef.current.push(marker);
        popupsRef.current.push(popup);
      });

      // Fit bounds to all destinations
      if (destinations.length === 1) {
        map.flyTo({
          center: [destinations[0].lng, destinations[0].lat],
          zoom: 15,
          duration: 800,
        });
      } else {
        const bounds = new mapboxgl.LngLatBounds();
        destinations.forEach((d) => bounds.extend([d.lng, d.lat]));
        map.fitBounds(bounds, {
          padding: 60,
          maxZoom: 14,
          duration: 800,
        });
      }

      // Fetch and draw route
      const geometry = await fetchRouteGeometry(destinations, MAPBOX_TOKEN);

      if (geometry && map.getSource("route") === undefined) {
        map.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry,
          },
        });

        // Border (wider, darker line underneath)
        map.addLayer({
          id: "route-line-border",
          type: "line",
          source: "route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": color,
            "line-width": 6,
            "line-opacity": 0.25,
          },
        });

        // Main route line
        map.addLayer({
          id: "route-line",
          type: "line",
          source: "route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": color,
            "line-width": 3,
            "line-opacity": 0.85,
          },
        });
      } else if (!geometry && destinations.length >= 2) {
        // Fallback: draw straight lines if Directions API fails
        const coordinates = destinations.map((d) => [d.lng, d.lat] as [number, number]);

        map.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates,
            },
          },
        });

        map.addLayer({
          id: "route-line-border",
          type: "line",
          source: "route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": color,
            "line-width": 6,
            "line-opacity": 0.25,
          },
        });

        map.addLayer({
          id: "route-line",
          type: "line",
          source: "route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": color,
            "line-width": 3,
            "line-opacity": 0.85,
            "line-dasharray": [2, 2],
          },
        });
      }
    };

    if (map.isStyleLoaded()) {
      updateMap();
    } else {
      map.on("load", updateMap);
    }
  }, [destinations, activeDay, color]);

  /* ─── Fly to active destination ─── */
  useEffect(() => {
    const map = mapRef.current;
    if (!map || destinations.length === 0) return;

    if (
      activeDestinationIndex !== null &&
      activeDestinationIndex !== undefined &&
      destinations[activeDestinationIndex]
    ) {
      const d = destinations[activeDestinationIndex];
      map.flyTo({
        center: [d.lng, d.lat],
        zoom: 15,
        duration: 800,
      });

      // Open popup for active destination
      const marker = markersRef.current[activeDestinationIndex];
      if (marker) {
        // Close all other popups first
        markersRef.current.forEach((m, i) => {
          if (i !== activeDestinationIndex) {
            const p = m.getPopup();
            if (p?.isOpen()) p.remove();
          }
        });
        // Toggle this popup
        const popup = marker.getPopup();
        if (popup && !popup.isOpen()) marker.togglePopup();
      }
    } else if (activeDestinationIndex === null && destinations.length > 1) {
      // Reset to fit all destinations
      const bounds = new mapboxgl.LngLatBounds();
      destinations.forEach((d) => bounds.extend([d.lng, d.lat]));
      map.fitBounds(bounds, {
        padding: 60,
        maxZoom: 14,
        duration: 800,
      });
    }
  }, [activeDestinationIndex, destinations]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full rounded-2xl"
      style={{ minHeight: "400px" }}
    />
  );
}
