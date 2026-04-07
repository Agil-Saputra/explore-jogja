"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  X,
  Send,
  MessageCircle,
  Loader2,
  Sparkles,
  SquarePen,
  PanelLeftOpen,
  PanelLeftClose,
  Trash2,
  Clock,
} from "lucide-react";

/* ─── Types ─── */
interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ─── LocalStorage helpers ─── */
const STORAGE_KEY = "jogja-chat-history";

function loadSessions(): ChatSession[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveSessions(sessions: ChatSession[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}

function generateId() {
  return `chat-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function deriveTitle(messages: Message[]): string {
  const first = messages.find((m) => m.role === "user");
  if (!first) return "New chat";
  const text = first.content;
  return text.length > 40 ? text.slice(0, 40) + "…" : text;
}

function formatTimeAgo(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

/* ─── Component ─── */
export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  /* Load sessions from localStorage on mount */
  useEffect(() => {
    const loaded = loadSessions();
    setSessions(loaded);
  }, []);

  /* Persist sessions to localStorage whenever they change */
  useEffect(() => {
    if (sessions.length > 0) {
      saveSessions(sessions);
    } else if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [sessions]);

  /* Sync active session messages back to sessions list */
  useEffect(() => {
    if (!activeSessionId || messages.length === 0) return;

    setSessions((prev) => {
      const idx = prev.findIndex((s) => s.id === activeSessionId);
      if (idx === -1) return prev;

      const updated = [...prev];
      updated[idx] = {
        ...updated[idx],
        messages,
        title: deriveTitle(messages),
        updatedAt: Date.now(),
      };
      return updated;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  /* Scroll to bottom on new messages */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* Focus input & lock scroll when modal opens */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Escape to close */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  /* ─── Actions ─── */
  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };

    /* If no active session, create one */
    let sessionId = activeSessionId;
    if (!sessionId) {
      const newSession: ChatSession = {
        id: generateId(),
        title: trimmed.length > 40 ? trimmed.slice(0, 40) + "…" : trimmed,
        messages: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      sessionId = newSession.id;
      setSessions((prev) => [newSession, ...prev]);
      setActiveSessionId(sessionId);
    }

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to get response");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Sorry, I encountered an error: ${errorMessage}. Please try again.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, activeSessionId]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const startNewChat = useCallback(() => {
    setActiveSessionId(null);
    setMessages([]);
    setInput("");
    setIsLoading(false);
    setSidebarOpen(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const switchToSession = useCallback((session: ChatSession) => {
    setActiveSessionId(session.id);
    setMessages(session.messages);
    setInput("");
    setIsLoading(false);
    setSidebarOpen(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const deleteSession = useCallback(
    (sessionId: string, e: React.MouseEvent) => {
      e.stopPropagation();
      setSessions((prev) => {
        const updated = prev.filter((s) => s.id !== sessionId);
        saveSessions(updated);
        return updated;
      });
      if (activeSessionId === sessionId) {
        setActiveSessionId(null);
        setMessages([]);
        setInput("");
      }
    },
    [activeSessionId]
  );

  const suggestions = [
    "What are the must-visit temples?",
    "Best local food in Yogyakarta?",
    "Tell me about Kraton Palace",
    "Hidden gems to explore",
  ];

  return (
    <>
      {/* Full-screen Modal */}
      <div
        className={`fixed inset-0 z-[100] bg-white flex transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        {/* ─── Sidebar ─── */}
        {/* Mobile overlay backdrop */}
        <div
          className={`fixed inset-0 bg-black/30 z-[102] md:hidden transition-opacity duration-300 ${
            sidebarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar panel */}
        <div
          className={`fixed md:relative z-[103] md:z-auto top-0 left-0 h-full bg-gray-50 border-r border-gray-100 flex flex-col transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            sidebarOpen
              ? "w-[280px] translate-x-0"
              : "w-0 -translate-x-full md:translate-x-0 md:w-0"
          } overflow-hidden flex-shrink-0`}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-semibold uppercase tracking-wider text-gray-400">
                History
              </span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-200/70 transition-colors text-gray-400 hover:text-gray-600"
            >
              <PanelLeftClose size={18} />
            </button>
          </div>

          {/* New Chat button in sidebar */}
          <div className="px-3 py-3 flex-shrink-0">
            <button
              onClick={startNewChat}
              className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#2C2C2C] text-white text-[14px] font-medium hover:bg-black transition-all duration-200 shadow-sm"
            >
              <SquarePen size={15} strokeWidth={2} />
              <span>New Chat</span>
            </button>
          </div>

          {/* Session list */}
          <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-1">
            {sessions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center px-4">
                <MessageCircle
                  size={28}
                  className="text-gray-300 mb-3"
                  strokeWidth={1.5}
                />
                <p className="text-[13px] text-gray-400 leading-relaxed">
                  No conversations yet.
                  <br />
                  Start a new chat!
                </p>
              </div>
            ) : (
              sessions.map((session) => (
                <div
                  key={session.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => switchToSession(session)}
                  onKeyDown={(e) => { if (e.key === "Enter") switchToSession(session); }}
                  className={`w-full text-left px-3.5 py-3 rounded-xl transition-all duration-200 group relative cursor-pointer ${
                    activeSessionId === session.id
                      ? "bg-sky-50 border border-sky-200/60"
                      : "hover:bg-gray-100 border border-transparent"
                  }`}
                >
                  <p
                    className={`text-[14px] font-medium truncate pr-7 leading-tight ${
                      activeSessionId === session.id
                        ? "text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    {session.title}
                  </p>
                  <p className="text-[12px] text-gray-400 mt-1 flex items-center gap-1.5">
                    <span>{session.messages.length} messages</span>
                    <span className="text-gray-300">·</span>
                    <span>{formatTimeAgo(session.updatedAt)}</span>
                  </p>
                  {/* Delete button */}
                  <button
                    onClick={(e) => deleteSession(session.id, e)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all duration-200"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ─── Main Chat Area ─── */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-gray-100 bg-cream flex-shrink-0">
            <div className="flex items-center gap-3">
              {/* Sidebar toggle */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-2xl hover:bg-black/5 transition-colors text-gray-500 hover:text-gray-900"
              >
                <PanelLeftOpen size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              {/* New Chat Button */}
              <button
                id="chat-new"
                onClick={startNewChat}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-[14px] font-medium transition-all duration-200 bg-[#2C2C2C] text-white hover:bg-black border border-[#2C2C2C]"
              >
                <SquarePen size={16} strokeWidth={1.5} />
                <span className="hidden sm:inline">New Chat</span>
              </button>
              {/* Close Button */}
              <button
                id="chat-modal-close"
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-2xl hover:bg-black/5 transition-colors text-gray-500 hover:text-gray-900"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto scroll-smooth">
            <div className="max-w-3xl mx-auto px-5 md:px-8 py-6 space-y-5 min-h-full flex flex-col">
              {messages.length === 0 ? (
                /* Empty State */
                <div className="flex flex-col items-center justify-center flex-1 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Selamat datang! 👋
                  </h3>
                  <p className="text-gray-500 text-[15px] max-w-sm mb-8 leading-relaxed">
                    I&apos;m your personal guide to Yogyakarta&apos;s rich
                    heritage, culture, and hidden treasures. How can I help?
                  </p>

                  {/* Suggestion Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-md">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          setInput(s);
                          setTimeout(() => inputRef.current?.focus(), 0);
                        }}
                        className="text-left px-4 py-3 rounded-2xl bg-gray-50 hover:bg-sky-50 border border-gray-100 hover:border-sky-200 text-[14px] text-gray-700 hover:text-gray-900 transition-all duration-200 group"
                      >
                        <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                          {s}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Chat Messages */
                <>
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] md:max-w-[75%] px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed ${
                          msg.role === "user"
                            ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-br-md shadow-lg shadow-gray-900/10"
                            : "bg-gray-50 text-gray-800 border border-gray-100 rounded-bl-md"
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{msg.content}</div>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-bl-md px-5 py-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Loader2 size={16} className="animate-spin" />
                      <span className="text-[14px]">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 bg-white flex-shrink-0">
            <div className="max-w-3xl mx-auto px-5 md:px-8 py-4">
              <div className="flex items-end gap-3 bg-gray-50 rounded-2xl px-4 py-2 border border-gray-100 focus-within:border-sky-300 focus-within:ring-2 focus-within:ring-sky-100 transition-all duration-200">
                <textarea
                  ref={inputRef}
                  id="chat-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Yogyakarta..."
                  rows={1}
                  className="flex-1 bg-transparent border-none outline-none resize-none text-[15px] text-gray-800 placeholder:text-gray-400 py-2 max-h-32 leading-relaxed"
                  style={{
                    height: "auto",
                    minHeight: "40px",
                    maxHeight: "128px",
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = `${Math.min(target.scrollHeight, 128)}px`;
                  }}
                  disabled={isLoading}
                />
                <button
                  id="chat-send"
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-200 mb-0.5 ${
                    input.trim() && !isLoading
                      ? "bg-[#2C2C2C] text-white shadow-lg shadow-black/10 hover:bg-black scale-100 hover:scale-105 active:scale-95"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <Send size={18} strokeWidth={1.5} />
                </button>
              </div>
              <p className="text-center text-[11px] text-gray-400 mt-2">
                Powered by AI · Responses may not always be accurate
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
