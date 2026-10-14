"use client";

import { useState } from "react";
import { ASSETS, COPY, MAP_COPY, type Lang } from "@/lib/i18n";
import LannaCoin from "./LannaCoin";
import LangToggle from "./LangToggle";

export default function MapQuestsScreen({
  lang,
  coins,
  checkedIn,
  onCheckInSuccess,
  onLangChange,
}: {
  lang: Lang;
  coins: number;
  checkedIn: boolean;
  onCheckInSuccess: () => void;
  onLangChange: (lang: Lang) => void;
}) {
  const t = MAP_COPY[lang];
  const titleFont = lang === "cn" ? "font-noto" : "font-prompt";
  const [checking, setChecking] = useState(false);
  const [coinPop, setCoinPop] = useState(false);

  const handleCheckIn = () => {
    if (checking || checkedIn) return;
    setChecking(true);
    window.setTimeout(() => {
      setChecking(false);
      onCheckInSuccess();
      setCoinPop(true);
      window.setTimeout(() => setCoinPop(false), 700);
    }, 1100);
  };

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${ASSETS.background}')` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-200/55 via-amber-50/35 to-emerald-900/25" />

      <header className="relative z-30 grid shrink-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-1 px-3 pb-2 pt-[max(0.75rem,env(safe-area-inset-top,10px))]">
        <div className="flex min-w-0 items-center gap-1.5">
          <img
            src={ASSETS.mascot}
            alt="Puffy"
            className="h-9 w-9 rounded-full bg-white/80 object-cover p-0.5 shadow-sm ring-2 ring-white/80"
          />
          <span className="truncate rounded-full bg-gradient-to-r from-sky-300 to-blue-400 px-2.5 py-1 font-prompt text-[10px] font-bold text-sky-950 shadow-sm">
            {t.level}
          </span>
        </div>

        <h1
          className={`${titleFont} max-w-[9.5rem] text-center text-[13px] font-bold leading-tight text-stone-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.8)] sm:max-w-none sm:text-sm`}
        >
          {t.title}
        </h1>

        <div className="flex items-center justify-end gap-1.5">
          <span
            className={`inline-flex items-center rounded-full bg-white/90 px-2 py-1 font-prompt text-[10px] font-bold text-amber-800 shadow-sm ${
              coinPop ? "animate-[coin-pop_0.7s_ease-out]" : ""
            }`}
          >
            <LannaCoin className="h-4 w-4" /> {coins} {t.coins}
          </span>
          <LangToggle lang={lang} onChange={onLangChange} ariaLabel={COPY[lang].langAria} />
          <GoldenCompass />
        </div>
      </header>

      <div className="relative z-10 mx-3 mb-2 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[28px] border border-white/60 shadow-[0_16px_40px_rgba(40,20,10,0.22)]">
        <div className="relative min-h-0 flex-1 overflow-hidden bg-[#b7e4c7]">
          <OldCityMap checkedIn={checkedIn} t={t} />

          <button
            type="button"
            onClick={handleCheckIn}
            aria-label={t.stage1Title}
            className="absolute left-[22%] top-[62%] z-20 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full"
          />

          <div className="pointer-events-none absolute left-[11%] top-[54%] z-20 w-[22%] max-w-[92px]">
            <img
              src={ASSETS.mascot}
              alt=""
              className="w-full origin-bottom object-contain drop-shadow-[0_10px_10px_rgba(40,20,10,0.35)] animate-[float_3.6s_ease-in-out_infinite]"
            />
          </div>

          {checking && (
            <>
              <span className="pointer-events-none absolute left-[22%] top-[62%] z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet-300 animate-[checkin-burst_1s_ease-out_infinite]" />
              <span className="pointer-events-none absolute left-[22%] top-[62%] z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80 animate-[checkin-burst_1s_ease-out_infinite] [animation-delay:250ms]" />
            </>
          )}

          <div className="absolute bottom-3 left-3 right-3 z-30">
            <div className="rounded-[22px] border border-white/80 bg-[#FFF6E8]/95 p-3 shadow-[0_12px_28px_rgba(50,25,10,0.18)] backdrop-blur-md">
              <div className="mb-2 flex items-center justify-between gap-2">
                <h2 className={`${titleFont} text-[13px] font-bold text-stone-800`}>
                  {t.stage1Title}
                </h2>
                <span className="rounded-full bg-violet-100 px-2 py-0.5 font-prompt text-[9px] font-bold uppercase tracking-wide text-[#8A70D6]">
                  {t.stage1Hint}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCheckIn}
                disabled={checking || checkedIn}
                className={`flex w-full items-center justify-center rounded-full px-3 py-2.5 text-center font-prompt text-[12px] font-semibold leading-snug text-white shadow-[0_8px_18px_rgba(138,112,214,0.38)] transition active:scale-[0.98] ${
                  checkedIn
                    ? "bg-emerald-500 shadow-[0_8px_18px_rgba(16,185,129,0.35)]"
                    : checking
                      ? "bg-[#8A70D6] animate-[nfc-pulse_1.1s_ease-out_infinite]"
                      : "bg-[#8A70D6] hover:brightness-110"
                }`}
              >
                {checkedIn ? t.success : checking ? t.checking : t.checkIn}
              </button>

              {checkedIn && (
                <div className="mt-2 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-2.5 py-2 animate-[fadeIn_280ms_ease-out]">
                  <span className="text-base">✅</span>
                  <div className="min-w-0 flex-1">
                    <p className={`${titleFont} text-[12px] font-bold text-emerald-800`}>
                      {t.reward}
                    </p>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-full border-2 border-amber-700 bg-gradient-to-br from-amber-100 to-orange-200 shadow-inner animate-[stamp-pop_0.55s_ease-out]">
                    <span className="text-[11px] leading-none">🐘</span>
                    <span className="mt-0.5 max-w-[2.6rem] truncate text-center font-prompt text-[7px] font-bold text-amber-900">
                      {t.stamp}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoldenCompass() {
  return (
    <div className="relative h-9 w-9 shrink-0 animate-[compass-float_3.4s_ease-in-out_infinite]">
      <svg viewBox="0 0 64 64" className="h-full w-full drop-shadow-[0_6px_8px_rgba(180,120,20,0.45)]">
        <ellipse cx="32" cy="58" rx="14" ry="3.5" fill="rgba(80,40,10,0.25)" />
        <defs>
          <linearGradient id="goldRim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE9A3" />
            <stop offset="45%" stopColor="#E0A01A" />
            <stop offset="100%" stopColor="#8A5A10" />
          </linearGradient>
          <radialGradient id="goldFace" cx="0.35" cy="0.3" r="0.75">
            <stop offset="0%" stopColor="#FFF6D6" />
            <stop offset="100%" stopColor="#D7A441" />
          </radialGradient>
        </defs>
        <circle cx="32" cy="30" r="22" fill="url(#goldRim)" />
        <circle cx="32" cy="30" r="16.5" fill="url(#goldFace)" stroke="#B67A12" strokeWidth="1.4" />
        <circle cx="32" cy="30" r="2.2" fill="#7A4A12" />
        <polygon points="32,14 36,30 32,28 28,30" fill="#C81E1E" />
        <polygon points="32,46 28,30 32,32 36,30" fill="#1E3A5F" />
        <text x="32" y="13" textAnchor="middle" fontSize="6" fontWeight="700" fill="#7A4A12">
          N
        </text>
      </svg>
    </div>
  );
}

function OldCityMap({
  checkedIn,
  t,
}: {
  checkedIn: boolean;
  t: (typeof MAP_COPY)[Lang];
}) {
  return (
    <svg
      viewBox="0 0 400 460"
      className="absolute inset-0 h-full w-full object-cover"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8EC8F0" />
          <stop offset="55%" stopColor="#C9E9C0" />
          <stop offset="100%" stopColor="#8FCB7A" />
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7BD3E6" />
          <stop offset="100%" stopColor="#3AA0C2" />
        </linearGradient>
        <linearGradient id="brick" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D98968" />
          <stop offset="100%" stopColor="#A85A42" />
        </linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE38A" />
          <stop offset="100%" stopColor="#D4A017" />
        </linearGradient>
        <filter id="soft">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#3b2412" floodOpacity="0.22" />
        </filter>
      </defs>

      <rect width="400" height="460" fill="url(#sky)" />
      <ellipse cx="70" cy="58" rx="36" ry="16" fill="#F7FBFF" opacity="0.9" />
      <ellipse cx="118" cy="52" rx="28" ry="13" fill="#F7FBFF" opacity="0.85" />
      <ellipse cx="320" cy="70" rx="40" ry="16" fill="#F7FBFF" opacity="0.8" />
      <ellipse cx="200" cy="42" rx="70" ry="18" fill="#9ED08A" />

      <polygon points="200,86 368,168 200,250 32,168" fill="url(#water)" opacity="0.92" />
      <polygon points="200,102 344,172 200,242 56,172" fill="#8FCB70" />
      <polygon points="200,118 318,176 200,234 82,176" fill="#A8D98A" />

      <g opacity="0.9">
        <polygon points="96,160 132,148 148,168 112,182" fill="url(#brick)" />
        <polygon points="252,148 292,160 276,182 236,168" fill="url(#brick)" />
        <polygon points="148,214 200,236 200,252 148,230" fill="url(#brick)" />
        <polygon points="200,236 252,214 252,230 200,252" fill="url(#brick)" />
        <polygon points="86,176 112,188 96,214 64,196" fill="url(#brick)" />
        <polygon points="288,176 336,196 304,214 276,188" fill="url(#brick)" />
      </g>

      <path
        d="M92 318 C 128 300, 150 268, 186 246 S 248 214, 286 198"
        fill="none"
        stroke="#C9B49A"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M92 318 C 128 300, 150 268, 186 246 S 248 214, 286 198"
        fill="none"
        stroke="#E8D8C4"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="6 7"
      />

      <g filter="url(#soft)">
        <rect x="70" y="300" width="22" height="36" rx="4" fill="#C56B4A" transform="skewX(-18)" />
        <rect x="118" y="292" width="22" height="40" rx="4" fill="#B45C42" transform="skewX(-18)" />
        <path d="M78 300 Q 108 268 138 292" fill="none" stroke="#A85A42" strokeWidth="10" />
        <path d="M78 300 Q 108 268 138 292" fill="none" stroke="#E8C4A8" strokeWidth="4" />
      </g>

      <g filter="url(#soft)" transform="translate(168 150)">
        <polygon points="40,78 8,92 40,106 72,92" fill="#7A9E55" />
        <polygon points="40,18 18,78 62,78" fill="url(#gold)" />
        <polygon points="40,4 28,22 52,22" fill="#F3D36A" />
        <rect x="34" y="78" width="12" height="16" fill="#B67A3A" />
      </g>

      <g transform="translate(268 132)" opacity={checkedIn ? "0.95" : "0.7"}>
        <rect x="0" y="28" width="18" height="22" rx="3" fill="#E7C07A" />
        <rect x="22" y="24" width="18" height="26" rx="3" fill="#D9A85C" />
        <rect x="44" y="30" width="16" height="20" rx="3" fill="#EED09A" />
        <circle cx="10" cy="22" r="4" fill="#E85D4C" />
        <circle cx="32" cy="18" r="4" fill="#E85D4C" />
        <circle cx="52" cy="24" r="4" fill="#E85D4C" />
      </g>

      <ellipse cx="108" cy="338" rx="18" ry="8" fill="#6FAF55" />
      <ellipse cx="318" cy="210" rx="16" ry="7" fill="#7FBF63" />
      <circle cx="56" cy="250" r="10" fill="#F2A3C7" />
      <circle cx="340" cy="260" r="8" fill="#F7C948" />
      <circle cx="300" cy="320" r="7" fill="#E88AB4" />

      <StagePin x={108} y={292} label={t.stage1Pin} active pulse={!checkedIn} />
      <StagePin
        x={214}
        y={168}
        label={t.stage2Pin}
        hint={t.stage2Hint}
        next={checkedIn}
      />
      <StagePin x={312} y={142} label={t.stage3Pin} locked hint={t.locked} />
    </svg>
  );
}

function StagePin({
  x,
  y,
  label,
  hint,
  active,
  pulse,
  next,
  locked,
}: {
  x: number;
  y: number;
  label: string;
  hint?: string;
  active?: boolean;
  pulse?: boolean;
  next?: boolean;
  locked?: boolean;
}) {
  const fill = locked ? "#9CA3AF" : active ? "#8A70D6" : next ? "#F59E0B" : "#64748B";
  return (
    <g transform={`translate(${x} ${y})`}>
      {pulse && (
        <circle r="16" fill={fill} opacity="0.25">
          <animate attributeName="r" values="10;22;10" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.35;0;0.35" dur="1.8s" repeatCount="indefinite" />
        </circle>
      )}
      <path
        d="M0,-22 C 8,-22 14,-16 14,-8 C 14,2 0,16 0,16 C 0,16 -14,2 -14,-8 C -14,-16 -8,-22 0,-22 Z"
        fill={fill}
        stroke="white"
        strokeWidth="2.2"
      />
      <circle cy="-10" r="5" fill="white" />
      {locked && (
        <g transform="translate(12 -28)">
          <rect x="-6" y="4" width="12" height="9" rx="2" fill="#6B7280" />
          <path d="M-3 4 V1.5 A3 3 0 0 1 3 1.5 V4" fill="none" stroke="#6B7280" strokeWidth="2" />
        </g>
      )}
      <rect x="-62" y="16" width="124" height={hint ? 28 : 16} rx="9" fill="white" opacity="0.94" />
      <text
        y={hint ? 27 : 27}
        textAnchor="middle"
        fontSize="7.4"
        fontWeight="700"
        fill={locked ? "#57534E" : active ? "#8A70D6" : next ? "#92400E" : "#44403C"}
        fontFamily="Prompt, Kanit, sans-serif"
      >
        {label}
      </text>
      {hint ? (
        <text
          y="38"
          textAnchor="middle"
          fontSize="6.2"
          fill="#78716C"
          fontFamily="Prompt, Kanit, sans-serif"
        >
          {hint}
        </text>
      ) : null}
    </g>
  );
}
