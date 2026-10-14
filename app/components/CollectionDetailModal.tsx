"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  COLLECTION_COPY,
  getCollectionItemText,
  type CollectionItem,
  type Lang,
} from "@/lib/i18n";

export default function CollectionDetailModal({
  item,
  lang,
  onClose,
}: {
  item: CollectionItem;
  lang: Lang;
  onClose: () => void;
}) {
  const t = COLLECTION_COPY[lang];
  const text = getCollectionItemText(item, lang);
  const titleFont = lang === "cn" ? "font-noto" : "font-prompt";
  const bodyFont = lang === "cn" ? "font-noto" : "font-mitr";
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const applyTilt = (beta: number, gamma: number) => {
      const x = Math.max(-18, Math.min(18, gamma * 0.55));
      const y = Math.max(-14, Math.min(14, (beta - 45) * -0.35));
      setTilt({ x, y });
    };

    const onOrient = (event: DeviceOrientationEvent) => {
      if (event.beta == null || event.gamma == null) return;
      applyTilt(event.beta, event.gamma);
    };

    window.addEventListener("deviceorientation", onOrient);
    return () => window.removeEventListener("deviceorientation", onOrient);
  }, []);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 22, y: py * -16 });
  };

  const onPointerLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className="absolute inset-0 z-50 flex items-end justify-center bg-black/50 p-3 backdrop-blur-[2px] sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="collection-detail-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm overflow-hidden rounded-[28px] border-2 border-[#8A582C] bg-[#2D180C] p-5 text-center text-white shadow-2xl animate-[fadeIn_0.22s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/20"
        >
          ✕
        </button>

        <div className="mb-2 flex flex-wrap items-center justify-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-[9px] font-extrabold tracking-wide ${
              item.locked
                ? "bg-stone-600 text-stone-200"
                : "bg-amber-500/25 text-amber-200 ring-1 ring-amber-400/40"
            }`}
          >
            {item.rarity}
          </span>
          <span className={`${bodyFont} rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[9px] font-bold text-emerald-200 ring-1 ring-emerald-400/30`}>
            {t.gyroBadge}
          </span>
        </div>

        <h3
          id="collection-detail-title"
          className={`${titleFont} mb-1 text-lg font-bold leading-snug text-amber-50`}
        >
          {text.name}
        </h3>
        <p className={`${bodyFont} mb-4 text-xs text-amber-200/75`}>{text.subName}</p>

        <div
          ref={stageRef}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className="relative mx-auto mb-4 flex h-40 w-40 items-center justify-center overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-b from-white/10 to-transparent shadow-inner"
          style={{ perspective: "900px" }}
        >
          <div
            className={`select-none text-6xl drop-shadow-lg transition-transform duration-150 ease-out ${
              item.locked ? "opacity-40 grayscale" : "animate-[float_3.2s_ease-in-out_infinite]"
            }`}
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translateZ(18px)`,
              transformStyle: "preserve-3d",
            }}
            aria-hidden
          >
            {item.emoji}
          </div>
          <div
            className={`${bodyFont} pointer-events-none absolute bottom-1.5 right-2 font-mono text-[8px] text-amber-200/45`}
          >
            360°
          </div>
        </div>

        <p
          className={`${bodyFont} mb-4 rounded-xl border border-white/10 bg-white/5 p-3 text-left text-xs leading-relaxed text-amber-100/90`}
        >
          {text.description}
        </p>

        <button
          type="button"
          onClick={onClose}
          className={`${bodyFont} w-full rounded-xl bg-white/10 py-3 text-xs font-semibold text-white transition hover:bg-white/20 active:scale-[0.98]`}
        >
          {t.close}
        </button>
      </div>
    </div>
  );
}
