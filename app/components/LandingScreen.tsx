"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ASSETS,
  COPY,
  LANG_OPTIONS,
  htmlLang,
  type Lang,
  type ScreenPhase,
} from "@/lib/i18n";

export default function LandingScreen({
  lang: langProp,
  onLangChange,
  onEnterApp,
}: {
  lang?: Lang;
  onLangChange?: (lang: Lang) => void;
  onEnterApp?: (lang: Lang) => void;
}) {
  const [langState, setLangState] = useState<Lang>(langProp ?? "th");
  const lang = langProp ?? langState;
  const setLang = (next: Lang) => {
    setLangState(next);
    onLangChange?.(next);
  };
  const [phase, setPhase] = useState<ScreenPhase>("landing");
  const [langOpen, setLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const t = COPY[lang];
  const titleFont = lang === "cn" ? "font-noto" : "font-prompt";
  const bodyFont = lang === "cn" ? "font-noto" : "font-mitr";

  useEffect(() => {
    document.documentElement.lang = htmlLang(lang);
  }, [lang]);

  useEffect(() => {
    if (phase !== "scanning") return;

    const timer = window.setTimeout(() => {
      setPhase("connected");
    }, 1700);

    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (!langOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!langMenuRef.current?.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLangOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [langOpen]);

  const dialogue = useMemo(() => {
    if (phase === "connected") {
      return { headline: t.connectedHeadline, body: t.connectedBody };
    }
    if (phase === "guest") {
      return { headline: t.guestHeadline, body: t.guestBody };
    }
    return { headline: t.headline, body: t.body };
  }, [phase, t]);

  const currentLang = LANG_OPTIONS.find((option) => option.id === lang)!;

  const handleNfc = () => {
    if (phase === "scanning") return;
    setPhase("scanning");
  };

  const handleGuest = () => {
    if (phase === "scanning") return;
    setPhase("guest");
  };

  return (
    <main className="h-[100dvh] overflow-hidden bg-[#1c1410]">
      <section className="relative mx-auto flex h-[100dvh] w-full max-w-[420px] flex-col justify-between overflow-hidden p-4 py-6 pt-[max(1.5rem,env(safe-area-inset-top,0px))] pb-[max(1.5rem,env(safe-area-inset-bottom,20px))] select-none shadow-2xl">
        <img
          src={ASSETS.background}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-950/40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,transparent_42%,rgba(60,28,12,0.22)_100%)]" />

        <header className="relative z-30 shrink-0 backdrop-blur-md bg-white/40 border border-white/50 rounded-full px-3 py-2 flex items-center justify-between gap-2 shadow-[0_8px_30px_rgba(80,40,20,0.12)]">
          <span
            className={`inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-[13px] font-semibold text-violet-800 shadow-sm ${titleFont}`}
          >
            {t.brand}
          </span>

          <div ref={langMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={t.langAria}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-[13px] font-semibold text-stone-800 shadow-sm transition active:scale-95 hover:bg-white font-prompt"
            >
              <LangFlag lang={lang} />
              <span>{currentLang.short}</span>
              <ChevronIcon open={langOpen} />
            </button>

            {langOpen && (
              <ul
                role="listbox"
                aria-label={t.langAria}
                className="absolute right-0 top-[calc(100%+8px)] z-40 min-w-[148px] overflow-hidden rounded-2xl border border-white/60 bg-white/90 p-1 shadow-[0_12px_30px_rgba(60,30,10,0.18)] backdrop-blur-md"
              >
                {LANG_OPTIONS.map((option) => {
                  const selected = option.id === lang;
                  return (
                    <li key={option.id} role="option" aria-selected={selected}>
                      <button
                        type="button"
                        onClick={() => {
                          setLang(option.id);
                          setLangOpen(false);
                        }}
                        className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[13px] font-semibold transition font-prompt ${
                          selected
                            ? "bg-violet-100 text-violet-800"
                            : "text-stone-700 hover:bg-white"
                        }`}
                      >
                        <LangFlag lang={option.id} />
                        <span>{option.short}</span>
                        <span className="ml-auto text-[11px] font-medium text-stone-500">
                          {option.name}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </header>

        <div className="relative z-10 flex min-h-0 flex-1 items-end justify-center">
          {phase === "scanning" && (
            <>
              <span className="pointer-events-none absolute bottom-[18%] h-24 w-24 rounded-full border-2 border-violet-200/80 animate-[nfc-ring_1.6s_ease-out_infinite]" />
              <span className="pointer-events-none absolute bottom-[18%] h-24 w-24 rounded-full border-2 border-white/70 animate-[nfc-ring_1.6s_ease-out_infinite] [animation-delay:350ms]" />
            </>
          )}
          <img
            src={ASSETS.mascot}
            alt="Puffy"
            className={`relative z-10 h-40 w-auto max-h-full origin-bottom object-contain drop-shadow-[0_16px_18px_rgba(70,40,20,0.28)] sm:h-48 ${
              phase === "scanning"
                ? "animate-[nfc-pulse_1.1s_ease-out_infinite]"
                : "animate-[float_3.6s_ease-in-out_infinite]"
            }`}
          />
        </div>

        <div className="relative z-20 flex shrink-0 flex-col gap-2 sm:gap-3">
          <div className="notebook-frame relative mx-auto drop-shadow-[0_16px_24px_rgba(60,30,10,0.22)]">
            <img
              src={ASSETS.notebook}
              alt=""
              className="absolute inset-0 h-full w-full object-contain"
            />

            <div className="absolute inset-0 overflow-hidden pl-14 pr-8 pt-[10%] pb-[12%] sm:pl-[3.75rem]">
              <div className="flex h-full min-w-0 flex-col justify-center">
                <div
                  className={`mb-1.5 w-max max-w-full whitespace-nowrap rounded-full border border-emerald-200/90 bg-emerald-50/95 px-2 py-[3px] text-[clamp(9px,2.8vw,11px)] font-semibold leading-none tracking-tight text-emerald-800 shadow-sm ${titleFont}`}
                >
                  {t.verified}
                </div>
                <div
                  key={`${lang}-${phase}`}
                  className="min-w-0 animate-[fadeIn_280ms_ease-out] text-left"
                >
                  <h1
                    className={`${titleFont} mb-1.5 text-pretty text-[16px] font-bold leading-snug text-stone-800 sm:text-[17px]`}
                  >
                    {phase === "scanning" ? t.scanning : dialogue.headline}
                  </h1>
                  <p
                    className={`${bodyFont} text-pretty text-xs leading-relaxed text-stone-600 sm:text-sm`}
                  >
                    {phase === "scanning" ? t.scanningHint : dialogue.body}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {phase === "landing" || phase === "scanning" ? (
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={handleNfc}
                disabled={phase === "scanning"}
                className={`flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(109,40,217,0.38)] transition active:scale-[0.98] disabled:cursor-wait sm:py-3.5 ${titleFont} ${
                  phase === "scanning"
                    ? "animate-[nfc-pulse_1.1s_ease-out_infinite]"
                    : "hover:brightness-110"
                }`}
              >
                {phase === "scanning" && <NfcSpinner />}
                <span>{phase === "scanning" ? t.scanning : t.nfc}</span>
              </button>

              <button
                type="button"
                onClick={handleGuest}
                disabled={phase === "scanning"}
                className={`flex w-full items-center justify-center rounded-full px-5 py-2.5 text-[15px] font-medium backdrop-blur-md bg-white/20 border border-white/40 text-white hover:bg-white/30 transition-all active:scale-[0.98] disabled:opacity-60 sm:py-3 ${titleFont}`}
              >
                {t.guest}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => onEnterApp?.(lang)}
                className={`flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(109,40,217,0.38)] transition hover:brightness-110 active:scale-[0.98] sm:py-3.5 ${titleFont}`}
              >
                {t.continueCta}
              </button>
              <button
                type="button"
                onClick={() => setPhase("landing")}
                className={`flex w-full items-center justify-center rounded-full px-5 py-2.5 text-[15px] font-medium backdrop-blur-md bg-white/20 border border-white/40 text-white hover:bg-white/30 transition-all active:scale-[0.98] sm:py-3 ${titleFont}`}
              >
                {t.reset}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-3.5 w-3.5 text-stone-500 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      <path d="M5 7.5 10 12.5 15 7.5" />
    </svg>
  );
}

function NfcSpinner() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 animate-spin"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
    >
      <circle cx="12" cy="12" r="9" className="opacity-25" />
      <path d="M21 12a9 9 0 0 0-9-9" />
    </svg>
  );
}

function LangFlag({ lang }: { lang: Lang }) {
  if (lang === "th") return <ThaiFlag />;
  if (lang === "cn") return <ChinaFlag />;
  return <UkFlag />;
}

function ThaiFlag() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 9 6"
      className="h-3.5 w-5 rounded-[2px] shadow-sm"
    >
      <rect width="9" height="6" fill="#A51931" />
      <rect y="1" width="9" height="4" fill="#F4F5F8" />
      <rect y="2" width="9" height="2" fill="#2D2A4A" />
    </svg>
  );
}

function UkFlag() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 30"
      className="h-3.5 w-5 rounded-[2px] shadow-sm"
    >
      <clipPath id="uk-flag">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk-flag)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0 V30 M0 15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function ChinaFlag() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 30 20"
      className="h-3.5 w-5 rounded-[2px] shadow-sm"
    >
      <rect width="30" height="20" fill="#DE2910" />
      <polygon fill="#FFDE00" points="6,2.2 6.95,5.1 10,5.2 7.6,6.95 8.5,9.8 6,8.15 3.5,9.8 4.4,6.95 2,5.2 5.05,5.1" />
      <polygon fill="#FFDE00" points="11.2,2.4 11.55,3.45 12.65,3.5 11.75,4.15 12.1,5.2 11.2,4.6 10.3,5.2 10.65,4.15 9.75,3.5 10.85,3.45" />
      <polygon fill="#FFDE00" points="13.15,4.35 13.5,5.4 14.6,5.45 13.7,6.1 14.05,7.15 13.15,6.55 12.25,7.15 12.6,6.1 11.7,5.45 12.8,5.4" />
      <polygon fill="#FFDE00" points="13.15,7.55 13.5,8.6 14.6,8.65 13.7,9.3 14.05,10.35 13.15,9.75 12.25,10.35 12.6,9.3 11.7,8.65 12.8,8.6" />
      <polygon fill="#FFDE00" points="11.2,9.35 11.55,10.4 12.65,10.45 11.75,11.1 12.1,12.15 11.2,11.55 10.3,12.15 10.65,11.1 9.75,10.45 10.85,10.4" />
    </svg>
  );
}
