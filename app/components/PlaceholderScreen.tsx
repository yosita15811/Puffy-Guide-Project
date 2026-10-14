import { ASSETS, MAP_COPY, type AppTab, type Lang } from "@/lib/i18n";

export default function PlaceholderScreen({
  lang,
  tab,
}: {
  lang: Lang;
  tab: AppTab;
}) {
  const t = MAP_COPY[lang];
  const title =
    tab === "guide" ? t.navGuide : tab === "rewards" ? t.navRewards : t.navPassport;

  return (
    <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden px-6 text-center">
      <img
        src={ASSETS.background}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/45" />
      <img
        src={ASSETS.mascot}
        alt="Puffy"
        className="relative z-10 mb-3 h-28 w-28 object-contain drop-shadow-lg animate-[float_3.6s_ease-in-out_infinite]"
      />
      <p className="relative z-10 rounded-full bg-white/80 px-3 py-1 font-prompt text-xs font-semibold text-[#8A70D6]">
        {title}
      </p>
      <h2 className="relative z-10 mt-3 font-prompt text-xl font-bold text-stone-800">{t.comingSoon}</h2>
      <p className="relative z-10 mt-1 max-w-[16rem] font-mitr text-sm text-stone-600">{t.comingSoonBody}</p>
    </div>
  );
}
