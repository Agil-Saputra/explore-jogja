"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/navigation";

// Import data
import accomodationData from "@/data/accomodation";
import cafesData from "@/data/cafes";
import beachesData from "@/data/beaches";
import restaurantData from "@/data/restaurant";
import wisataData from "@/data/wisata";
import { MapPin, Navigation, Compass, Coffee, Utensils, Waves, Bed, LocateFixed, X, ChevronUp, ChevronDown, Loader2, Star, ArrowRight, Navigation2 } from "lucide-react";

// Mapbox Token
// Use the preconfigured token or a fallback if absent.
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

// Category icons mapping
const ICONS: Record<string, any> = {
  Accommodation: Bed,
  Cafe: Coffee,
  Restaurant: Utensils,
  Beach: Waves,
  Wisata: Compass,
};

const CATEGORY_COLORS: Record<string, string> = {
  Accommodation: "#8B5CF6", // purple
  Cafe: "#F59E0B", // amber
  Restaurant: "#EF4444", // red
  Beach: "#0EA5E9", // sky
  Wisata: "#10B981", // emerald
};

// Haversine formula to calculate distance between two coordinates in km
function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

interface NearbyDestination {
  name: string;
  type: string;
  image: string;
  rating: string;
  distance: number;
  coordinates: [number, number];
}

export default function MapsPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  // Near Me state
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [nearbyDestinations, setNearbyDestinations] = useState<NearbyDestination[]>([]);
  const [showNearbyPanel, setShowNearbyPanel] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [nearbyFilter, setNearbyFilter] = useState<string>("All");
  const [panelExpanded, setPanelExpanded] = useState(true);

  // Aggregate Data
  const allFeatures = useMemo(() => {
    const rawData = [
      ...((accomodationData || []) as any[]).map((d) => ({ ...d, featureType: "Accommodation" })),
      ...((cafesData || []) as any[]).map((d) => ({ ...d, featureType: "Cafe" })),
      ...((restaurantData || []) as any[]).map((d) => ({ ...d, featureType: "Restaurant" })),
      ...((beachesData || []) as any[]).map((d) => ({ ...d, featureType: "Beach" })),
      ...((wisataData || []) as any[]).map((d) => ({ ...d, featureType: "Wisata" })),
    ];

    // Build GeoJSON features
    return rawData
      .filter((item) => item.Longitude && item.Latitude)
      .map((item, index) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [item.Longitude, item.Latitude],
        },
        properties: {
          id: index,
          name: item.Name || "Unknown Destination",
          type: item.featureType,
          image: item["Main Image"] || item.MainImage || "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
          category: item.Categories || "",
          rating: item["Average Rating"] || "N/A"
        },
      }));
  }, []);

  // Calculate nearby destinations when user location changes
  const calculateNearby = useCallback(
    (location: [number, number]) => {
      const [lng, lat] = location;
      const destinations: NearbyDestination[] = allFeatures
        .map((feature) => {
          const [fLng, fLat] = feature.geometry.coordinates;
          const distance = getDistanceKm(lat, lng, fLat, fLng);
          return {
            name: feature.properties.name,
            type: feature.properties.type,
            image: feature.properties.image,
            rating: feature.properties.rating,
            distance,
            coordinates: feature.geometry.coordinates as [number, number],
          };
        })
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 50); // top 50 nearest

      setNearbyDestinations(destinations);
    },
    [allFeatures]
  );

  // Handle "Near Me" button click
  const handleNearMe = useCallback(() => {
    if (userLocation) {
      // Already have location, just show/toggle panel
      setShowNearbyPanel(true);
      setPanelExpanded(true);
      
      // Fly to user location
      mapRef.current?.flyTo({
        center: userLocation,
        zoom: 14,
        duration: 2000,
      });
      return;
    }

    setIsLocating(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const location: [number, number] = [longitude, latitude];
        setUserLocation(location);
        setIsLocating(false);
        setShowNearbyPanel(true);
        setPanelExpanded(true);
        calculateNearby(location);

        // Fly to user location
        mapRef.current?.flyTo({
          center: location,
          zoom: 14,
          duration: 2000,
        });

        // Add/update user marker
        if (userMarkerRef.current) {
          userMarkerRef.current.setLngLat(location);
        } else if (mapRef.current) {
          // Create custom user location marker
          const el = document.createElement("div");
          el.className = "user-location-marker";
          el.innerHTML = `
            <div class="user-marker-pulse"></div>
            <div class="user-marker-dot"></div>
          `;
          userMarkerRef.current = new mapboxgl.Marker({ element: el })
            .setLngLat(location)
            .addTo(mapRef.current);
        }
      },
      (error) => {
        setIsLocating(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Location permission denied. Please allow location access.");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Location information unavailable.");
            break;
          case error.TIMEOUT:
            setLocationError("Location request timed out.");
            break;
          default:
            setLocationError("An unknown error occurred.");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, [userLocation, calculateNearby]);

  // Fly to a destination from the nearby panel
  const flyToDestination = useCallback((coords: [number, number], name: string) => {
    mapRef.current?.flyTo({
      center: coords,
      zoom: 16,
      duration: 1500,
    });
  }, []);

  // Filtered nearby destinations
  const filteredNearby = useMemo(() => {
    if (nearbyFilter === "All") return nearbyDestinations;
    return nearbyDestinations.filter((d) => d.type === nearbyFilter);
  }, [nearbyDestinations, nearbyFilter]);

  const initMap = () => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [110.3695, -7.7956], // Yogyakarta Center
      zoom: 12,
      maxZoom: 18,
      minZoom: 8,
      attributionControl: false,
    });

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      // Add data source with clustering
      map.addSource("jogja-destinations", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: allFeatures as any,
        },
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      // Clustering layers
      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "jogja-destinations",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#3B82F6", // blue-500
            100,
            "#6366F1", // indigo-500
            750,
            "#8B5CF6", // violet-500
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            20,
            100,
            30,
            750,
            40,
          ],
          "circle-stroke-width": 4,
          "circle-stroke-color": "rgba(255,255,255,0.5)",
        },
      });

      // Cluster count text
      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "jogja-destinations",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 14,
        },
        paint: {
          "text-color": "#ffffff",
        },
      });

      // Unclustered point: colorful dots based on category
      map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "jogja-destinations",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": [
            "match",
            ["get", "type"],
            "Accommodation", CATEGORY_COLORS.Accommodation,
            "Cafe", CATEGORY_COLORS.Cafe,
            "Restaurant", CATEGORY_COLORS.Restaurant,
            "Beach", CATEGORY_COLORS.Beach,
            "Wisata", CATEGORY_COLORS.Wisata,
            "#111111" // default
          ],
          "circle-radius": 8,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });

      // Click on cluster to zoom in
      map.on("click", "clusters", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        });
        const clusterId = features[0].properties?.cluster_id;
        const source = map.getSource("jogja-destinations") as mapboxgl.GeoJSONSource;

        source.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return;
          map.easeTo({
            center: (features[0].geometry as any).coordinates,
            zoom: zoom,
          });
        });
      });

      // Show popup on unclustered point
      map.on("click", "unclustered-point", (e) => {
        const features = e.features;
        if (!features || features.length === 0) return;

        const coordinates = (features[0].geometry as any).coordinates.slice();
        const { name, type, image, category, rating } = features[0].properties as any;

        // Ensure proper popup placement when zoomed out
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // HTML Content for Popup
        const popupContent = document.createElement("div");
        popupContent.className = "flex flex-col gap-2 min-w-[200px] cursor-pointer group";
        popupContent.innerHTML = `
          <div class="w-full h-32 rounded-lg overflow-hidden mb-1 relative shadow-sm">
             <img src="${image}" alt="${name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onerror="this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80'" />
             <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <div class="absolute bottom-2 left-2 right-2 text-white">
                <p class="text-[10px] font-semibold uppercase tracking-wider mb-0.5 opacity-90">${type}</p>
                <h3 class="text-sm font-bold leading-tight truncate">${name}</h3>
             </div>
          </div>
          <div class="flex items-center justify-between px-1">
             <div class="flex items-center gap-1.5 text-xs text-gray-600">
               <span class="text-amber-500">★</span> 
               <span class="font-medium">${rating}</span>
             </div>
             <span class="text-xs font-semibold text-blue-600 group-hover:text-blue-700">View Detail &rarr;</span>
          </div>
        `;

        // Action when popup is clicked
        popupContent.addEventListener("click", () => {
          router.push("/discover");
        });

        new mapboxgl.Popup({
          closeButton: true,
          closeOnClick: true,
          className: "jogja-map-popup",
          offset: 10,
          maxWidth: "280px"
        })
          .setLngLat(coordinates)
          .setDOMContent(popupContent)
          .addTo(map);
      });

      // Change cursor on hover
      map.on("mouseenter", "clusters", () => (map.getCanvas().style.cursor = "pointer"));
      map.on("mouseleave", "clusters", () => (map.getCanvas().style.cursor = ""));
      map.on("mouseenter", "unclustered-point", () => (map.getCanvas().style.cursor = "pointer"));
      map.on("mouseleave", "unclustered-point", () => (map.getCanvas().style.cursor = ""));
    });

    mapRef.current = map;
  };

  useEffect(() => {
    initMap();
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Filter functionality
  useEffect(() => {
    if (!mapRef.current || !mapRef.current.isStyleLoaded()) return;
    
    // Filter the features state if we want real-time map source update
    const source = mapRef.current.getSource("jogja-destinations") as mapboxgl.GeoJSONSource;
    if (source) {
      if (activeCategory === "All") {
        source.setData({
          type: "FeatureCollection",
          features: allFeatures as any,
        });
      } else {
        const filtered = allFeatures.filter((f) => f.properties.type === activeCategory);
        source.setData({
          type: "FeatureCollection",
          features: filtered as any,
        });
      }
      
      // Rescale layout bounds to fit filtered results beautifully
      if (activeCategory !== 'All') {
          // slight delay ensures the data changes before we fit bounds
          setTimeout(() => {
              const bounds = new mapboxgl.LngLatBounds();
              const filtered = allFeatures.filter((f) => f.properties.type === activeCategory);
              if (filtered.length > 0) {
                 filtered.forEach(f => {
                     bounds.extend(f.geometry.coordinates as [number, number]);
                 });
                 mapRef.current?.fitBounds(bounds, { padding: 80, maxZoom: 13, duration: 1500 });
              }
          }, 100);
      }
    }
  }, [activeCategory, allFeatures]);

  const categories = ["All", "Accommodation", "Cafe", "Restaurant", "Beach", "Wisata"];

  return (
    <main className="relative w-full h-screen bg-neutral-100 overflow-hidden">
      {/* MAP CONTAINER */}
      <div className="absolute inset-0 top-0" style={{ minHeight: "100vh" }} ref={mapContainerRef} />

      {/* OVERLAY UI - Filter Glassmorphism Panel */}
      <div className="absolute top-28 left-6 z-10 hidden md:flex flex-col gap-4">
        <div className="bg-white/70 rounded-2xl p-5 border border-white/50 w-72">
          <h2 className="text-xl font-jakarta font-bold text-gray-900 mb-1">Explore Jogja</h2>
          <p className="text-xs text-gray-500 mb-5 leading-relaxed">
            Discover thousands of beautiful destinations right on the map. Click a point to see details.
          </p>

          <div className="flex flex-col gap-2.5">
            {categories.map((cat) => {
              const IconComp = ICONS[cat] || MapPin;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-gray-900 text-white shadow-md scale-[1.02]"
                      : "bg-white/60 hover:bg-white text-gray-700 hover:shadow-sm"
                  }`}
                >
                  <span
                    className={`p-1.5 rounded-lg transition-all ease-in-out `}
                    style={{ color: isActive ? 'white' : 'black' }}
                  >
                    <IconComp size={16} />
                  </span>
                  <span className="font-medium text-sm font-jakarta">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Near Me Button - Desktop */}
        <button
          id="near-me-btn"
          onClick={handleNearMe}
          disabled={isLocating}
          className={`group backdrop-blur-md shadow-lg rounded-2xl px-5 py-3.5 flex items-center gap-3 border transition-all text-sm font-semibold hover:shadow-xl hover:-translate-y-0.5 bg-white/80 hover:bg-white text-gray-800 border-white/50`}
        >
          {isLocating ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Navigation2 size={18} className={`transition-transform group-hover:rotate-45 text-black`} />
          )}
          {isLocating ? "Finding you..." : "Destinations Near Me"}
        </button>

        {/* Global Reset View Button */}
        <button 
           onClick={() => {
              setActiveCategory("All");
              setShowNearbyPanel(false);
              mapRef.current?.flyTo({ center: [110.3695, -7.7956], zoom: 12, duration: 2000 });
           }}
           className="bg-white/80 hover:bg-white backdrop-blur-md shadow-lg rounded-full px-5 py-3 flex items-center gap-2 border border-white/50 text-gray-800 transition-all text-sm font-semibold hover:shadow-xl hover:-translate-y-1"
        >
           <LocateFixed size={18} className="text-gray-600"/>
           Recenter Map
        </button>
      </div>

      {/* MOBILE HORIZONTAL FILTER */}
      <div className="absolute bottom-6 left-4 right-4 z-10 md:hidden flex flex-col gap-3">
        {/* Near Me Button - Mobile */}
        {!showNearbyPanel && (
          <button
            id="near-me-btn-mobile"
            onClick={handleNearMe}
            disabled={isLocating}
            className="bg-blue-600 hover:bg-blue-700 text-white backdrop-blur-md border border-blue-500 rounded-2xl shadow-xl p-3.5 flex items-center justify-center gap-2 text-sm font-semibold transition-all"
          >
            {isLocating ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Navigation2 size={18} />
            )}
            {isLocating ? "Finding you..." : "Destinations Near Me"}
          </button>
        )}

        {/* Category Filters - Mobile */}
        <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl p-2 flex overflow-x-auto gap-2 scrollbar-none">
          {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                 <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive ? "bg-black text-white shadow-md" : "bg-white text-gray-700 border border-gray-100"
                    }`}
                 >
                    {cat}
                 </button>
              )
          })}
        </div>
      </div>

      {/* Location Error Toast */}
      {locationError && (
        <div className="absolute top-28 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
          <div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3 max-w-sm">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <X size={14} className="text-red-500" />
            </div>
            <p className="text-sm text-red-700 font-medium">{locationError}</p>
            <button onClick={() => setLocationError(null)} className="ml-2 text-red-400 hover:text-red-600">
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* NEARBY DESTINATIONS PANEL */}
      {showNearbyPanel && (
        <div
          className={`absolute z-20 transition-all duration-500 ease-out
            ${panelExpanded ? "md:right-6 md:top-28 md:bottom-auto md:w-96 bottom-0 left-0 right-0 md:left-auto md:max-h-[calc(100vh-8rem)]" : "md:right-6 md:top-28 md:w-96 bottom-0 left-0 right-0 md:left-auto"}
          `}
        >
          <div className={`bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden transition-all duration-500
            ${panelExpanded ? "rounded-t-3xl md:rounded-2xl max-h-[70vh] md:max-h-[calc(100vh-8rem)]" : "rounded-t-3xl md:rounded-2xl max-h-16 md:max-h-16"}`}
          >
            {/* Panel Header */}
            <div
              className="flex items-center justify-between px-5 py-4 cursor-pointer select-none border-b border-gray-100/80"
              onClick={() => setPanelExpanded(!panelExpanded)}
            >
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 font-jakarta">Nearby Destinations</h3>
                  <p className="text-[11px] text-gray-500">{filteredNearby.length} places found</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNearbyPanel(false);
                  }}
                  className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X size={14} className="text-gray-500" />
                </button>
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  {panelExpanded ? <ChevronDown size={14} className="text-gray-500" /> : <ChevronUp size={14} className="text-gray-500" />}
                </div>
              </div>
            </div>

            {/* Panel Content */}
            {panelExpanded && (
              <>
                {/* Category Filter Tabs */}
                <div className="px-4 py-3 border-b border-gray-100/80">
                  <div className="flex gap-2 overflow-x-auto scrollbar-none">
                    {["All", ...Object.keys(CATEGORY_COLORS)].map((cat) => {
                      const isActive = nearbyFilter === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setNearbyFilter(cat)}
                          className={`flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            isActive
                              ? "bg-gray-900 text-white shadow-sm"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Destinations List */}
                <div className="overflow-y-auto max-h-[calc(70vh-8rem)] md:max-h-[calc(100vh-18rem)] px-4 py-3 space-y-2">
                  {filteredNearby.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-3">
                        <MapPin size={24} className="text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-500 font-medium">No destinations found nearby</p>
                      <p className="text-xs text-gray-400 mt-1">Try a different category</p>
                    </div>
                  ) : (
                    filteredNearby.map((dest, idx) => {
                      const IconComp = ICONS[dest.type] || MapPin;
                      const color = CATEGORY_COLORS[dest.type] || "#666";
                      return (
                        <button
                          key={`${dest.name}-${idx}`}
                          onClick={() => flyToDestination(dest.coordinates, dest.name)}
                          className="w-full group flex items-start gap-3 p-3 rounded-xl hover:bg-white bg-white/50 transition-all duration-200 hover:shadow-md text-left border border-transparent hover:border-gray-100"
                        >
                          {/* Image */}
                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative">
                            <img
                              src={dest.image}
                              alt={dest.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 truncate leading-snug group-hover:text-blue-700 transition-colors font-jakarta">
                              {dest.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span
                                className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md"
                                style={{
                                  backgroundColor: `${color}15`,
                                  color: color,
                                }}
                              >
                                <IconComp size={10} />
                                {dest.type}
                              </span>
                              <span className="flex items-center gap-0.5 text-[11px] text-gray-500">
                                <Star size={10} className="text-amber-500 fill-amber-500" />
                                {dest.rating}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                              <Navigation size={10} className="text-blue-500" />
                              <span className="font-medium text-blue-600">{dest.distance.toFixed(1)} km</span>
                              <span className="text-gray-400">away</span>
                            </p>
                          </div>

                          {/* Arrow */}
                          <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight size={14} className="text-gray-400" />
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* INJECT CSS FOR MAPBOX POPUP CUSTOMIZATION & User Marker */}
      <style dangerouslySetInnerHTML={{__html:`
         .jogja-map-popup .mapboxgl-popup-content {
             padding: 8px;
             border-radius: 16px;
             border: 1px solid rgba(255,255,255,0.7);
             background: rgba(255,255,255,0.95);
         }
         .jogja-map-popup .mapboxgl-popup-close-button {
             padding: 4px 8px;
             border-radius: 9999px;
             top: 12px;
             right: 12px;
             color: white;
             background: rgba(0,0,0,0.4);
             font-size: 16px;
             border: 1px solid rgba(255,255,255,0.2);
             z-index: 10;
             transition: all 0.2s;
         }
         .jogja-map-popup .mapboxgl-popup-close-button:hover {
             background: rgba(0,0,0,0.7);
         }
         .scrollbar-none::-webkit-scrollbar {
             display: none;
         }
         .scrollbar-none {
             -ms-overflow-style: none;
             scrollbar-width: none;
         }

         /* User Location Marker */
         .user-location-marker {
             position: relative;
             width: 24px;
             height: 24px;
         }
         .user-marker-dot {
             position: absolute;
             top: 50%;
             left: 50%;
             transform: translate(-50%, -50%);
             width: 14px;
             height: 14px;
             background: #3B82F6;
             border: 3px solid white;
             border-radius: 50%;
             box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
             z-index: 2;
         }
         .user-marker-pulse {
             position: absolute;
             top: 50%;
             left: 50%;
             transform: translate(-50%, -50%);
             width: 40px;
             height: 40px;
             background: rgba(59, 130, 246, 0.2);
             border-radius: 50%;
             z-index: 1;
             animation: user-pulse 2s ease-out infinite;
         }
         @keyframes user-pulse {
             0% {
                 transform: translate(-50%, -50%) scale(0.5);
                 opacity: 1;
             }
             100% {
                 transform: translate(-50%, -50%) scale(2);
                 opacity: 0;
             }
         }
         @keyframes fade-in {
             from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
             to { opacity: 1; transform: translateX(-50%) translateY(0); }
         }
         .animate-fade-in {
             animation: fade-in 0.3s ease-out;
         }
      `}} />
    </main>
  );
}
