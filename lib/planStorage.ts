import type { Itinerary } from "@/components/ItineraryMap";

/* ─── Types ─── */

export interface PlanPreferences {
  startDate: string;
  endDate: string;
  startHour: number;
  endHour: number;
  companion: string;
  budget: string;
  interests: string[];
}

export interface SavedPlan {
  id: string;
  createdAt: number; // Unix timestamp ms
  preferences: PlanPreferences;
  itinerary: Itinerary;
}

/* ─── Storage key ─── */
const STORAGE_KEY = "jogja_plans";

/* ─── Helpers ─── */

export function getPlans(): SavedPlan[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SavedPlan[]) : [];
  } catch {
    return [];
  }
}

export function getPlan(id: string): SavedPlan | null {
  return getPlans().find((p) => p.id === id) ?? null;
}

export function savePlan(plan: SavedPlan): void {
  const plans = getPlans();
  const idx = plans.findIndex((p) => p.id === plan.id);
  if (idx >= 0) {
    plans[idx] = plan;
  } else {
    plans.unshift(plan); // newest first
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
}

export function deletePlan(id: string): void {
  const plans = getPlans().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
}
