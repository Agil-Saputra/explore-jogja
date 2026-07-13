"use client";

import React, { useRef, useState } from "react";
import { ChevronDown, Upload, X, CheckCircle, Loader2, AlertCircle } from "lucide-react";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function EventSubmitForm() {
  // Form field state
  const [titleEn, setTitleEn] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [host, setHost] = useState("");
  const [startTime, setStartTime] = useState("");
  const [startDateVal, setStartDateVal] = useState("");
  const [endTime, setEndTime] = useState("");
  const [endDateVal, setEndDateVal] = useState("");
  const [location, setLocation] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // UI state
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Helpers ─────────────────────────────────────────────────────────────────

  /** Combine a date string (YYYY-MM-DD or DD/MM/YYYY) and HH:MM time into an ISO-8601 datetime with +07:00 */
  function buildIso(dateStr: string, timeStr: string): string | null {
    if (!dateStr || !timeStr) return null;
    let yyyy, mm, dd;
    if (dateStr.includes("-")) {
      [yyyy, mm, dd] = dateStr.split("-");
    } else {
      [dd, mm, yyyy] = dateStr.split("/");
    }
    if (!yyyy || !mm || !dd) return null;
    return `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}T${timeStr}:00+07:00`;
  }

  function handleImageChange(file: File) {
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target?.result as string);
    reader.readAsDataURL(file);
  }

  function clearImage() {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  // ── Submit ───────────────────────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setSubmitState("loading");

    const startIso = buildIso(startDateVal, startTime);
    const endIso = buildIso(endDateVal, endTime);

    if (!startIso) {
      setErrorMsg("Please enter a valid start date and time.");
      setSubmitState("error");
      return;
    }

    const fd = new FormData();
    fd.append("titleEn", titleEn);
    fd.append("descriptionEn", descriptionEn);
    fd.append("host", host);
    fd.append("startDate", startIso);
    if (endIso) fd.append("endDate", endIso);
    fd.append("location", location);
    fd.append("contactName", contactName);
    fd.append("contactPhone", contactPhone);
    if (imageFile) fd.append("image", imageFile);

    try {
      const res = await fetch("/api/events/submit", {
        method: "POST",
        body: fd,
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json?.error ?? "Something went wrong. Please try again.");
        setSubmitState("error");
        return;
      }

      setSubmitState("success");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setSubmitState("error");
    }
  }

  // ── Success state ─────────────────────────────────────────────────────────
  if (submitState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-6 text-center max-w-[600px] mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#2B2B2B] mb-2">Event Submitted!</h3>
          <p className="text-gray-600 text-[15px]">
            Your event has been submitted and at pending review, we will notify you once it&apos;s published and it will appear on the
            events page once published.
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitState("idle");
            setTitleEn("");
            setDescriptionEn("");
            setHost("");
            setStartTime("");
            setStartDateVal("");
            setEndTime("");
            setEndDateVal("");
            setLocation("");
            setContactName("");
            setContactPhone("");
            clearImage();
          }}
          className="bg-[#2B2B2B] text-white px-8 py-3 rounded-full text-[14px] font-bold hover:bg-black transition-colors"
        >
          Submit Another Event
        </button>
      </div>
    );
  }

  const isLoading = submitState === "loading";

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12 max-w-[900px]">
      {/* Error Banner */}
      {submitState === "error" && errorMsg && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-[14px]">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Event Details */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4">
        <span className="text-[15px] font-bold mt-3">Event Details</span>
        <div className="flex flex-col gap-3">
          <input
            id="titleEn"
            type="text"
            placeholder="Event name"
            required
            value={titleEn}
            onChange={(e) => setTitleEn(e.target.value)}
            disabled={isLoading}
            className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  placeholder:text-gray-400 text-[15px] disabled:opacity-50"
          />
          <textarea
            id="descriptionEn"
            placeholder="Event description"
            rows={4}
            value={descriptionEn}
            onChange={(e) => setDescriptionEn(e.target.value)}
            disabled={isLoading}
            className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  placeholder:text-gray-400 text-[15px] resize-none disabled:opacity-50"
          />
          <input
            id="host"
            type="text"
            placeholder="Host / organiser name"
            value={host}
            onChange={(e) => setHost(e.target.value)}
            disabled={isLoading}
            className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  placeholder:text-gray-400 text-[15px] disabled:opacity-50"
          />
        </div>
      </div>

      {/* Event Begins */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4">
        <span className="text-[15px] font-bold mt-4">Event Begins</span>
        <div className="flex flex-col gap-3">
          <p className="text-[13px] text-gray-500 -mb-1">Start</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <input
                id="startTime"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
                disabled={isLoading}
                className="w-full bg-white rounded-xl pl-5 pr-10 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  text-[15px] text-gray-700 disabled:opacity-50 [color-scheme:light]"
              />
            </div>
            <div className="relative">
              <input
                id="startDate"
                type="date"
                value={startDateVal}
                onChange={(e) => setStartDateVal(e.target.value)}
                required
                disabled={isLoading}
                className="w-full bg-white rounded-xl pl-5 pr-10 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  text-[15px] text-gray-700 disabled:opacity-50 [color-scheme:light]"
              />
            </div>
          </div>
          <p className="text-[13px] text-gray-500 -mb-1">End (optional)</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <input
                id="endTime"
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                disabled={isLoading}
                className="w-full bg-white rounded-xl pl-5 pr-10 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  text-[15px] text-gray-700 disabled:opacity-50 [color-scheme:light]"
              />
            </div>
            <div className="relative">
              <input
                id="endDate"
                type="date"
                value={endDateVal}
                onChange={(e) => setEndDateVal(e.target.value)}
                disabled={isLoading}
                className="w-full bg-white rounded-xl pl-5 pr-10 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  text-[15px] text-gray-700 disabled:opacity-50 [color-scheme:light]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Event Image */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4">
        <span className="text-[15px] font-bold mt-4">Event Image</span>
        <div>
          <input
            ref={fileInputRef}
            id="eventImage"
            type="file"
            accept="image/*"
            className="hidden"
            disabled={isLoading}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleImageChange(file);
            }}
          />
          {imagePreview ? (
            <div className="relative rounded-2xl overflow-hidden border border-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagePreview}
                alt="Event image preview"
                className="w-full h-48 object-cover"
              />
              <button
                type="button"
                onClick={clearImage}
                disabled={isLoading}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3 bg-black/50 text-white text-[12px] px-3 py-1 rounded-full">
                {imageFile?.name}
              </div>
            </div>
          ) : (
            <div
              className="w-full bg-white rounded-2xl p-10 flex flex-col items-center justify-center border border-dashed border-gray-200 gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (file && file.type.startsWith("image/")) handleImageChange(file);
              }}
            >
              <Upload className="w-6 h-6 text-gray-400" />
              <span className="text-[14px] text-gray-500">Drop files here</span>
              <span className="text-[12px] text-gray-400 -mt-1 mb-2 text-center">Max 5MB (JPG, PNG).<br/>Recommended size: 1200x630px.</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                disabled={isLoading}
                className="bg-[#EBE9E4] text-[#2B2B2B] px-6 py-2.5 rounded-full text-[14px] font-medium hover:bg-gray-300 transition-colors"
              >
                Choose Image
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Location */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-center gap-4">
        <span className="text-[15px] font-bold">Location</span>
        <div className="relative">
          <select
            id="location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            disabled={isLoading}
            className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  text-[15px] appearance-none cursor-pointer disabled:opacity-50 text-gray-700"
          >
            <option value="" disabled>Select a location</option>
            <option value="Prambanan">Prambanan</option>
            <option value="Keraton">Keraton</option>
            <option value="Jogja National Museum">Jogja National Museum</option>
            <option value="Malioboro">Malioboro</option>
            <option value="Taman Sari">Taman Sari</option>
            <option value="Alun-Alun Kidul">Alun-Alun Kidul</option>
          </select>
          <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-black w-4 h-4 pointer-events-none" />
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4">
        <span className="text-[15px] font-bold mt-4">Contact Info</span>
        <div className="flex flex-col gap-3">
          <input
            id="contactName"
            type="text"
            placeholder="Your full name"
            required
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            disabled={isLoading}
            className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  placeholder:text-gray-400 text-[15px] disabled:opacity-50"
          />
          <input
            id="contactPhone"
            type="tel"
            placeholder="Phone number"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            disabled={isLoading}
            className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  placeholder:text-gray-400 text-[15px] disabled:opacity-50"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4 mt-4">
        <div className="hidden md:block" />
        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#2B2B2B] text-white px-10 py-3.5 rounded-full text-[15px] font-bold hover:bg-black transition-colors w-[180px] mx-auto md:mx-0 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending…
              </>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
