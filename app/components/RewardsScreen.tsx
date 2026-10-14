"use client";

import { useMemo, useState } from "react";
import {
  ASSETS,
  COPY,
  GACHA_CHEST_COST,
  GACHA_COPY,
  REWARDS_COPY,
  TRAVELER_PERKS,
  getPerkText,
  rollGachaPrize,
  type GachaItemId,
  type GachaPrize,
  type Lang,
  type PerkId,
} from "@/lib/i18n";
import GachaRewardModal from "./GachaRewardModal";
import LannaCoin from "./LannaCoin";
import LangToggle from "./LangToggle";

export default function RewardsScreen({
  lang,
  coins,
  onLangChange,
  onSpendCoins,
  onAddCoins,
  onUnlockItem,
}: {
  lang: Lang;
  coins: number;
  onLangChange: (lang: Lang) => void;
  onSpendCoins: (amount: number) => boolean;
  onAddCoins: (amount: number) => void;
  onUnlockItem?: (itemId: GachaItemId) => void;
}) {
  const t = REWARDS_COPY[lang];
  const g = GACHA_COPY[lang];
  const titleFont = lang === "cn" ? "font-noto" : "font-prompt";
  const bodyFont = lang === "cn" ? "font-noto" : "font-mitr";

  const initialRedeemed = useMemo(() => {
    const map: Partial<Record<PerkId, boolean>> = {};
    TRAVELER_PERKS.forEach((perk) => {
      if (perk.initiallyRedeemed) map[perk.id] = true;
    });
    return map;
  }, []);

  const [redeemed, setRedeemed] = useState<Partial<Record<PerkId, boolean>>>(initialRedeemed);
  const [toast, setToast] = useState<string | null>(null);
  const [opening, setOpening] = useState(false);
  const [prize, setPrize] = useState<GachaPrize | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  };

  const handleRedeem = (id: PerkId, cost: number) => {
    if (redeemed[id]) return;
    if (!onSpendCoins(cost)) {
      showToast(t.needCoins);
      return;
    }
    setRedeemed((prev) => ({ ...prev, [id]: true }));
    showToast(t.redeemedToast);
  };

  const openChest = () => {
    if (opening || prize) return;
    if (!onSpendCoins(GACHA_CHEST_COST)) {
      showToast(g.needCoins);
      return;
    }
    setOpening(true);
    window.setTimeout(() => {
      setPrize(rollGachaPrize());
      setOpening(false);
    }, 1100);
  };

  const claimPrize = () => {
    if (!prize) return;
    if (prize.type === "coins") {
      onAddCoins(prize.amount);
    } else {
      onUnlockItem?.(prize.itemId);
    }
    setPrize(null);
    showToast(g.toastClaim);
  };

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${ASSETS.background}')` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-100/70 via-amber-50/50 to-emerald-50/40" />

      <header className="relative z-30 flex shrink-0 items-center justify-between gap-2 px-3 pb-2 pt-[max(0.75rem,env(safe-area-inset-top,10px))]">
        <div className="min-w-0">
          <h1 className={`${titleFont} truncate text-[15px] font-bold text-stone-800`}>
            {t.header}
          </h1>
          <p className={`${bodyFont} text-[10px] font-medium text-stone-500`}>{t.counter}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 font-prompt text-[10px] font-bold text-amber-800 shadow-sm">
            <LannaCoin className="h-4 w-4" />
            {coins} {t.coinsLabel}
          </span>
          <LangToggle lang={lang} onChange={onLangChange} ariaLabel={COPY[lang].langAria} />
        </div>
      </header>

      <div className="relative z-10 mx-3 mb-2 flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto pb-1">
        <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#FFA000] to-[#FF8F00] p-5 text-center text-white shadow-lg">
          <span className={`${bodyFont} mb-2 inline-block rounded-full bg-black/20 px-3 py-1 text-[10px] font-semibold`}>
            {g.chestBadge}
          </span>
          <h2 className={`${titleFont} text-xl font-bold`}>{g.chestTitle}</h2>
          <p className={`${bodyFont} mb-3 mt-1 text-[11px] text-amber-100`}>{g.chestSub}</p>
          <div
            className={`mx-auto mb-3 flex h-24 w-24 items-center justify-center ${
              opening ? "animate-[coin-pop_0.7s_ease-out_infinite]" : ""
            }`}
          >
            <img
              src={ASSETS.chest}
              alt=""
              className="h-full w-full object-contain drop-shadow-lg"
            />
          </div>
          <button
            type="button"
            disabled={opening || !!prize}
            onClick={openChest}
            className={`${bodyFont} w-full rounded-full bg-white px-4 py-3 text-[13px] font-bold text-amber-950 shadow-md transition hover:bg-amber-50 active:scale-95 disabled:opacity-60`}
          >
            {g.chestBtn}
          </button>
        </section>

        <div className="flex items-center justify-between gap-2 px-0.5">
          <h2 className={`${titleFont} text-[13px] font-bold text-stone-800`}>🪪 {t.header}</h2>
          <span className={`${bodyFont} shrink-0 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-stone-500 shadow-sm`}>
            {t.counter}
          </span>
        </div>

        {TRAVELER_PERKS.map((perk) => {
          const copy = getPerkText(perk, lang);
          const done = !!redeemed[perk.id];
          return (
            <article
              key={perk.id}
              className="flex items-start gap-3 rounded-[22px] border border-white/80 bg-white/92 p-3.5 shadow-[0_10px_24px_rgba(50,25,10,0.1)] backdrop-blur-md"
            >
              <img
                src={perk.photo}
                alt=""
                className="aspect-square h-16 w-16 shrink-0 rounded-2xl border border-slate-100 object-cover shadow-sm"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className={`${bodyFont} text-[10px] font-semibold uppercase tracking-wide text-stone-400`}>
                    {copy.category}
                  </p>
                  <p className="inline-flex shrink-0 items-center gap-1 font-prompt text-[10px] font-bold text-amber-700">
                    <LannaCoin className="h-3.5 w-3.5" />
                    {perk.cost} {t.coinsLabel}
                  </p>
                </div>
                <p className={`${titleFont} mt-0.5 text-[14px] font-bold leading-snug text-stone-800`}>
                  {copy.title}
                </p>
                <p className={`${bodyFont} text-[11px] font-medium text-stone-400`}>
                  {copy.subtitle}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <span className={`${bodyFont} rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-semibold text-violet-700`}>
                    {copy.description}
                  </span>
                  {done ? (
                    <span
                      className={`${bodyFont} rounded-full bg-emerald-100 px-3 py-1.5 text-[10px] font-bold text-emerald-700 ring-1 ring-emerald-200/80`}
                    >
                      ✓ {t.redeemed}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleRedeem(perk.id, perk.cost)}
                      className={`${bodyFont} rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-3.5 py-1.5 text-[10px] font-bold text-white shadow-md shadow-emerald-500/25 transition hover:brightness-105 active:scale-95`}
                    >
                      {t.redeem}
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}

        <div className="mb-1 rounded-3xl border border-emerald-100 bg-emerald-50/95 p-4 text-center shadow-sm">
          <p className={`${titleFont} text-[15px] font-bold text-emerald-700`}>
            🌱 {t.supportTitle}
          </p>
          <p className={`${bodyFont} mt-1 text-[12px] font-medium leading-relaxed text-stone-500`}>
            {t.supportSub}
          </p>
        </div>
      </div>

      {prize && (
        <GachaRewardModal prize={prize} lang={lang} onClaim={claimPrize} />
      )}

      {toast && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-50 max-w-[85%] -translate-x-1/2 rounded-full bg-stone-900/90 px-4 py-2 text-center font-prompt text-[11px] font-semibold text-white shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}
