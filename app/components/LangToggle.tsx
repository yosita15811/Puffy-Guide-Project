"use client";

import { useEffect, useRef, useState } from "react";
import { LANG_OPTIONS, type Lang } from "@/lib/i18n";

export default function LangToggle({
  lang,
  onChange,
  ariaLabel = "Language",
}: {
  lang: Lang;
  onChange: (lang: Lang) => void;
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANG_OPTIONS.find((o) => o.id === lang)!;

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 font-prompt text-[10px] font-bold text-stone-700 shadow-sm ring-1 ring-stone-200/80"
      >
        <span aria-hidden>{lang === "th" ? "🇹🇭" : lang === "en" ? "🇬🇧" : "🇨🇳"}</span>
        {current.short}
      </button>
      {open && (
        <div className="absolute right-0 top-[calc(100%+4px)] z-50 min-w-[7.5rem] overflow-hidden rounded-xl border border-stone-200 bg-white py-1 shadow-lg">
          {LANG_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                onChange(option.id);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-1.5 text-left font-prompt text-[11px] font-semibold ${
                option.id === lang
                  ? "bg-violet-50 text-[#8A70D6]"
                  : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              <span aria-hidden>
                {option.id === "th" ? "🇹🇭" : option.id === "en" ? "🇬🇧" : "🇨🇳"}
              </span>
              {option.short} · {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
