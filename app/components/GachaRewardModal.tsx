"use client";

import { useEffect } from "react";
import LannaCoin from "./LannaCoin";
import {
  COLLECTION_ITEMS,
  GACHA_COPY,
  getCollectionItemText,
  rarityAuraClass,
  rarityBadgeLabel,
  type GachaPrize,
  type Lang,
} from "@/lib/i18n";

export default function GachaRewardModal({
  prize,
  lang,
  onClaim,
}: {
  prize: GachaPrize;
  lang: Lang;
  onClaim: () => void;
}) {
  const t = GACHA_COPY[lang];
  const titleFont = lang === "cn" ? "font-noto" : "font-prompt";
  const bodyFont = lang === "cn" ? "font-noto" : "font-mitr";

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClaim();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClaim]);

  const isCoins = prize.type === "coins";
  const item =
    prize.type === "item"
      ? COLLECTION_ITEMS.find((entry) => entry.id === prize.itemId)
      : undefined;
  const itemText = item ? getCollectionItemText(item, lang) : null;
  const aura = item ? rarityAuraClass(item.rarity) : "";
  const rarityLabel = item ? rarityBadgeLabel(item.rarity, lang) : "";

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gacha-reward-title"
      onClick={onClaim}
    >
      <div
        className="gacha-scale-in relative w-full max-w-[22rem] overflow-hidden rounded-[32px] border-4 border-amber-300/80 bg-white p-5 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-amber-200/40 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-8 -right-4 h-28 w-28 rounded-full bg-violet-200/30 blur-2xl" />

        <h3
          id="gacha-reward-title"
          className={`${titleFont} relative text-[1.35rem] font-black leading-snug text-[#7A2E0E]`}
        >
          {t.header}
        </h3>
        <p className={`${bodyFont} relative mt-1 text-[11px] font-medium leading-relaxed text-amber-800/80`}>
          {t.subtitle}
        </p>

        {isCoins ? (
          <div className="relative my-4 flex flex-col items-center rounded-[24px] border border-amber-200 bg-gradient-to-b from-[#FFF9E5] to-[#FFF3C4] px-4 py-6">
            <div className="relative mb-3 flex h-36 w-36 items-center justify-center">
              <span className="gacha-spark absolute left-1 top-2 text-lg">✨</span>
              <span className="gacha-spark absolute right-0 top-5 text-sm" style={{ animationDelay: "0.35s" }}>
                ✨
              </span>
              <span className="gacha-spark absolute bottom-5 left-2 text-sm" style={{ animationDelay: "0.7s" }}>
                ✦
              </span>
              <span className="gacha-spark absolute bottom-3 right-1 text-base" style={{ animationDelay: "0.15s" }}>
                ✨
              </span>
              <LannaCoin className="gacha-coin-bounce h-28 w-28 drop-shadow-[0_12px_18px_rgba(180,110,12,0.45)]" />
            </div>
            <p className={`${titleFont} text-3xl font-extrabold tracking-tight text-[#5C2B0B]`}>
              +{prize.amount} {t.coinsLabel}
            </p>
            <p className={`${bodyFont} mt-2 max-w-[16rem] text-[11px] leading-relaxed text-amber-900/75`}>
              {t.coinsDesc}
            </p>
          </div>
        ) : item && itemText ? (
          <div
            className={`relative my-4 overflow-hidden rounded-[22px] border-2 border-[#c4a574]/80 bg-[linear-gradient(160deg,#FFFBF3_0%,#F5E6C8_55%,#E8D4A8_100%)] p-4 ${aura}`}
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 11px, rgba(139,90,43,0.04) 11px, rgba(139,90,43,0.04) 12px), linear-gradient(160deg,#FFFBF3,#F5E6C8 55%,#E8D4A8)",
            }}
          >
            <span
              className={`${bodyFont} absolute left-3 top-3 z-10 rounded-full bg-black/70 px-2.5 py-1 text-[9px] font-bold tracking-wide text-amber-100`}
            >
              {rarityLabel}
            </span>

            <div className="relative mx-auto mt-4 mb-3 flex h-32 w-32 items-center justify-center">
              <div
                className="gacha-sunburst pointer-events-none absolute inset-[-18%] rounded-full opacity-70"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(251,191,36,0.35) 20deg, transparent 40deg, rgba(251,191,36,0.25) 60deg, transparent 80deg)",
                }}
              />
              <span className="relative z-10 text-6xl drop-shadow-lg animate-[float_3s_ease-in-out_infinite]">
                {item.emoji}
              </span>
            </div>

            <h4 className={`${titleFont} px-1 text-[15px] font-bold leading-snug text-stone-900`}>
              {itemText.name}
            </h4>
            <p className={`${bodyFont} mt-1 px-1 text-[11px] leading-relaxed text-stone-600`}>
              {itemText.subName}
            </p>
            <p className={`${bodyFont} mt-2 line-clamp-3 px-1 text-[10px] leading-relaxed text-stone-500`}>
              {itemText.description}
            </p>

            <div
              className={`${bodyFont} mt-3 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-800`}
            >
              {t.addedBadge}
            </div>
          </div>
        ) : null}

        <button
          type="button"
          onClick={onClaim}
          className={`${bodyFont} relative w-full rounded-2xl bg-gradient-to-b from-[#F59E0B] to-[#D97706] py-3.5 text-[14px] font-bold tracking-wide text-white shadow-lg shadow-amber-500/30 transition hover:brightness-105 active:scale-[0.98]`}
        >
          {isCoins ? t.claimCoins : t.claimItem}
        </button>
      </div>
    </div>
  );
}
