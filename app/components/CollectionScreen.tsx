"use client";

import { useMemo, useState } from "react";
import {
  ASSETS,
  COLLECTION_COPY,
  COLLECTION_ITEMS,
  COPY,
  getCollectionItemText,
  type CollectionFilterId,
  type CollectionItem,
  type Lang,
} from "@/lib/i18n";
import CollectionDetailModal from "./CollectionDetailModal";
import LangToggle from "./LangToggle";

export default function CollectionScreen({
  lang,
  onLangChange,
}: {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}) {
  const t = COLLECTION_COPY[lang];
  const titleFont = lang === "cn" ? "font-noto" : "font-prompt";
  const bodyFont = lang === "cn" ? "font-noto" : "font-mitr";
  const [filter, setFilter] = useState<CollectionFilterId>("all");
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<CollectionItem | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? COLLECTION_ITEMS
        : COLLECTION_ITEMS.filter((item) => item.filter === filter),
    [filter],
  );

  const totalPages = Math.max(1, filtered.length);
  const safePage = Math.min(page, totalPages - 1);
  const current = filtered[safePage] ?? filtered[0];
  const itemText = current ? getCollectionItemText(current, lang) : null;

  const filters: { id: CollectionFilterId; label: string }[] = [
    { id: "all", label: t.filterAll },
    { id: "artifacts", label: t.filterArtifacts },
    { id: "chest", label: t.filterChest },
    { id: "nft", label: t.filterNft },
  ];

  const pageLabel = t.pageLabel
    .replace("{n}", String(safePage + 1))
    .replace("{total}", String(totalPages));

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${ASSETS.background}')` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-100/65 via-rose-50/45 to-violet-100/40" />

      <header className="relative z-30 flex shrink-0 items-center justify-between gap-2 px-3 pb-2 pt-[max(0.75rem,env(safe-area-inset-top,10px))]">
        <h1 className={`${titleFont} text-[15px] font-bold text-stone-800`}>{t.header}</h1>
        <LangToggle lang={lang} onChange={onLangChange} ariaLabel={COPY[lang].langAria} />
      </header>

      <div className="relative z-10 mx-3 mb-2 flex shrink-0 gap-1.5 overflow-x-auto pb-1">
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFilter(f.id);
                setPage(0);
              }}
              className={`${bodyFont} shrink-0 rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${
                active
                  ? "bg-[#8A70D6] text-white shadow-md"
                  : "bg-white/85 text-stone-600 ring-1 ring-stone-200/80"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="relative z-10 mx-3 mb-2 flex min-h-0 flex-1 flex-col">
        <div
          className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[28px] border border-[#c4a574]/70 shadow-[0_16px_40px_rgba(40,20,10,0.22)]"
          style={{
            backgroundImage: `linear-gradient(160deg, rgba(255,248,235,0.96), rgba(255,236,210,0.92)), url('${ASSETS.notebook}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#8b5a2b]/35 to-transparent" />

          {current && itemText && (
            <button
              type="button"
              onClick={() => setSelected(current)}
              className="flex min-h-0 flex-1 flex-col items-center justify-center px-5 py-6 text-center transition active:scale-[0.99]"
            >
              <div
                className={`mb-4 flex h-28 w-28 items-center justify-center rounded-[28px] text-5xl shadow-inner ${
                  current.locked
                    ? "bg-stone-200/80 text-stone-400"
                    : "bg-gradient-to-br from-amber-100 to-rose-100"
                }`}
              >
                {current.emoji}
              </div>
              <h2 className={`${titleFont} text-lg font-bold text-stone-800`}>{itemText.name}</h2>
              <p className={`${bodyFont} mt-1.5 max-w-[16rem] text-sm leading-relaxed text-stone-600`}>
                {itemText.subName}
              </p>
              <p className={`${bodyFont} mt-3 line-clamp-3 max-w-[17rem] text-[11px] leading-relaxed text-stone-500`}>
                {itemText.description}
              </p>
            </button>
          )}

          <div className="flex shrink-0 items-center justify-between gap-2 border-t border-[#d4b896]/60 bg-[#fff8eb]/80 px-3 py-2.5">
            <button
              type="button"
              disabled={safePage <= 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className={`${bodyFont} rounded-full px-3 py-1.5 text-[11px] font-semibold text-stone-700 disabled:opacity-35`}
            >
              ← {t.prev}
            </button>
            <span className={`${bodyFont} text-[11px] font-semibold text-stone-600`}>
              {pageLabel}
            </span>
            <button
              type="button"
              disabled={safePage >= totalPages - 1}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              className={`${bodyFont} rounded-full px-3 py-1.5 text-[11px] font-semibold text-stone-700 disabled:opacity-35`}
            >
              {t.next} →
            </button>
          </div>
        </div>
      </div>

      {selected && (
        <CollectionDetailModal
          item={selected}
          lang={lang}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
