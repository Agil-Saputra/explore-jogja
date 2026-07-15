"use client";

import React, { useRef, useState } from "react";
import { Upload, X, CheckCircle, Loader2, AlertCircle } from "lucide-react";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ArticleSubmitForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setSubmitState("loading");

    if (!imageFile) {
      setErrorMsg("Please upload a banner image.");
      setSubmitState("error");
      return;
    }

    const fd = new FormData();
    fd.append("title", title);
    fd.append("content", content);
    fd.append("author", author);
    fd.append("email", email);
    fd.append("image", imageFile);

    try {
      const res = await fetch("/api/articles/submit", {
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

  if (submitState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-6 text-center max-w-[600px] mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#2B2B2B] mb-2">Article Submitted!</h3>
          <p className="text-gray-600 text-[15px]">
            Your article has been submitted and is pending review.
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitState("idle");
            setTitle("");
            setContent("");
            setAuthor("");
            setEmail("");
            clearImage();
          }}
          className="bg-[#2B2B2B] text-white px-8 py-3 rounded-full text-[14px] font-bold hover:bg-black transition-colors"
        >
          Submit Another Article
        </button>
      </div>
    );
  }

  const isLoading = submitState === "loading";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12 max-w-[900px] mx-auto py-12">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-2 font-caveat uppercase">Share Your Own Story</h2>
        <p className="text-gray-600">Every story matters. Share yours and become part of a community built on real experiences.</p>
      </div>

      {submitState === "error" && errorMsg && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-[14px]">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Article Details */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4">
        <span className="text-[15px] font-bold mt-3">Article Content</span>
        <div className="flex flex-col gap-3">
          <input
            id="title"
            type="text"
            placeholder="Article title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isLoading}
            className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  placeholder:text-gray-400 text-[15px] disabled:opacity-50"
          />
          <textarea
            id="content"
            placeholder="Write your article here..."
            rows={8}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isLoading}
            className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  placeholder:text-gray-400 text-[15px] resize-none disabled:opacity-50"
          />
        </div>
      </div>

      {/* Banner Image */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4">
        <span className="text-[15px] font-bold mt-4">Banner Image</span>
        <div>
          <input
            ref={fileInputRef}
            id="bannerImage"
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
                alt="Banner preview"
                className="w-full h-64 object-cover"
              />
              <button
                type="button"
                onClick={clearImage}
                disabled={isLoading}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
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
              <span className="text-[12px] text-gray-400 -mt-1 mb-2 text-center">Max 5MB (JPG, PNG).</span>
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

      {/* Author Info */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 items-start gap-4">
        <span className="text-[15px] font-bold mt-4">Author Info</span>
        <div className="flex flex-col gap-3">
          <input
            id="author"
            type="text"
            placeholder="Your name"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            disabled={isLoading}
            className="w-full bg-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#2B2B2B]/20 ring-2 ring-[#2B2B2B]/10  placeholder:text-gray-400 text-[15px] disabled:opacity-50"
          />
          <input
            id="email"
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              "Submit "
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
