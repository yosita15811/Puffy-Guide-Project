"use client";

import { useState } from "react";
import { ASSETS, CHAT_COPY, COPY, type Lang } from "@/lib/i18n";
import LangToggle from "./LangToggle";

const FOOD_IMG =
  "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=640&q=80";
const CRAFT_IMG =
  "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=640&q=80";

export default function AiChatScreen({
  lang,
  onLangChange,
}: {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}) {
  const t = CHAT_COPY[lang];
  const titleFont = lang === "cn" ? "font-noto" : "font-prompt";
  const bodyFont = lang === "cn" ? "font-noto" : "font-mitr";
  const [query, setQuery] = useState("");

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${ASSETS.background}')` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-100/70 via-amber-50/50 to-sky-100/40" />

      <header className="relative z-30 flex shrink-0 items-center justify-between gap-2 px-3 pb-2 pt-[max(0.75rem,env(safe-area-inset-top,10px))]">
        <div className="flex min-w-0 items-center gap-2">
          <img
            src={ASSETS.mascot}
            alt="Puffy"
            className="h-9 w-9 rounded-full bg-white/80 object-cover p-0.5 shadow-sm ring-2 ring-white/80"
          />
          <h1 className={`${titleFont} truncate text-[15px] font-bold text-stone-800`}>
            {t.header}
          </h1>
        </div>
        <LangToggle lang={lang} onChange={onLangChange} ariaLabel={COPY[lang].langAria} />
      </header>

      <div className="relative z-10 mx-3 mb-2 flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto pb-1">
        {/* Food recommendation */}
        <article className="overflow-hidden rounded-[22px] border border-white/80 bg-white/92 shadow-[0_12px_28px_rgba(50,25,10,0.14)] backdrop-blur-md">
          <div className="relative h-36 w-full overflow-hidden">
            <img src={FOOD_IMG} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between gap-2">
              <h2 className={`${titleFont} text-sm font-bold leading-snug text-white drop-shadow`}>
                {t.foodTitle}
              </h2>
            </div>
          </div>
          <div className="space-y-1.5 p-3">
            <p className={`${bodyFont} text-[11px] text-stone-500`}>{t.foodDistance}</p>
            <p className={`${bodyFont} rounded-xl bg-amber-50 px-2.5 py-1.5 text-[11px] font-medium text-amber-900`}>
              {t.foodHighlight}
            </p>
          </div>
        </article>

        {/* Souvenir recommendation */}
        <article className="overflow-hidden rounded-[22px] border border-white/80 bg-white/92 shadow-[0_12px_28px_rgba(50,25,10,0.14)] backdrop-blur-md">
          <p className={`${bodyFont} border-b border-violet-100/80 bg-violet-50/70 px-3 py-2 text-[11px] leading-relaxed text-stone-700`}>
            {t.souvenirMessage}
          </p>
          <div className="relative h-32 w-full overflow-hidden">
            <img src={CRAFT_IMG} alt="" className="h-full w-full object-cover" />
            <span className={`${bodyFont} absolute left-2 top-2 rounded-full bg-[#8A70D6] px-2.5 py-1 text-[10px] font-semibold text-white shadow`}>
              {t.souvenirBadge}
            </span>
          </div>
          <div className="space-y-1.5 p-3">
            <h2 className={`${titleFont} text-sm font-bold text-stone-800`}>{t.souvenirTitle}</h2>
            <p className={`${bodyFont} text-[11px] text-stone-500`}>{t.souvenirSubtitle}</p>
            <p className={`${bodyFont} rounded-xl bg-emerald-50 px-2.5 py-1.5 text-[11px] font-medium text-emerald-900`}>
              {t.souvenirHighlight}
            </p>

            <div className="relative mt-2 overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-sky-50 p-3">
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 40%, #86efac 0, transparent 45%), radial-gradient(circle at 70% 60%, #7dd3fc 0, transparent 40%)",
              }} />
              <div className="relative flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white shadow-md animate-[float_2.8s_ease-in-out_infinite]">
                  📍
                </span>
                <span className={`${bodyFont} text-[11px] font-semibold text-stone-700`}>
                  {t.mapPin}
                </span>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-1.5">
              <button
                type="button"
                className={`${bodyFont} rounded-2xl bg-[#8A70D6] px-3 py-2.5 text-center text-[12px] font-semibold text-white shadow-[0_8px_18px_rgba(138,112,214,0.35)]`}
              >
                {t.btnNav}
              </button>
              <button
                type="button"
                className={`${bodyFont} rounded-2xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-center text-[12px] font-semibold text-amber-900`}
              >
                {t.btnDiscount}
              </button>
            </div>
          </div>
        </article>
      </div>

      {/* Photo / chat bar */}
      <div className="relative z-20 shrink-0 border-t border-white/60 bg-white/90 px-3 pb-2 pt-2 backdrop-blur-md">
        <div className="mb-2 flex items-center gap-2.5 rounded-2xl border border-violet-100 bg-violet-50/80 p-2">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
            📷
          </div>
          <div className="min-w-0 flex-1">
            <p className={`${titleFont} truncate text-[12px] font-bold text-stone-800`}>
              {t.photoTitle}
            </p>
            <p className={`${bodyFont} truncate text-[10px] text-stone-500`}>{t.photoSub}</p>
          </div>
          <button
            type="button"
            className={`${bodyFont} shrink-0 rounded-full bg-[#8A70D6] px-2.5 py-1.5 text-[10px] font-semibold text-white`}
          >
            {t.cameraBtn}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.inputPlaceholder}
            className={`${bodyFont} min-w-0 flex-1 rounded-full border border-stone-200 bg-white px-3.5 py-2.5 text-[12px] text-stone-800 outline-none placeholder:text-stone-400 focus:border-violet-300 focus:ring-2 focus:ring-violet-100`}
          />
          <button
            type="button"
            aria-label="Send"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8A70D6] text-white shadow-md"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
