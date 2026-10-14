import { MAP_COPY, type AppTab, type Lang } from "@/lib/i18n";

const TABS: {
  id: AppTab;
  icon: (active: boolean) => React.ReactNode;
}[] = [
  { id: "map", icon: (active) => <MapIcon active={active} /> },
  { id: "guide", icon: (active) => <GuideIcon active={active} /> },
  { id: "rewards", icon: (active) => <GiftIcon active={active} /> },
  { id: "passport", icon: (active) => <BookIcon active={active} /> },
];

export default function BottomNav({
  active,
  lang,
  onChange,
}: {
  active: AppTab;
  lang: Lang;
  onChange: (tab: AppTab) => void;
}) {
  const t = MAP_COPY[lang];
  const labels: Record<AppTab, string> = {
    map: t.navMap,
    guide: t.navGuide,
    rewards: t.navRewards,
    passport: t.navPassport,
  };

  return (
    <nav className="relative z-30 shrink-0 px-3 pb-[max(0.7rem,env(safe-area-inset-bottom,12px))] pt-1">
      <div className="flex items-center justify-between rounded-[22px] border border-white/70 bg-white/85 px-1.5 py-1.5 shadow-[0_10px_28px_rgba(60,30,10,0.16)] backdrop-blur-md">
        {TABS.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-2xl px-1 py-1.5 transition-all ${
                isActive
                  ? "bg-[#8A70D6] text-white shadow-[0_0_18px_rgba(138,112,214,0.55)]"
                  : "text-stone-500 hover:bg-violet-50"
              }`}
            >
              {tab.icon(isActive)}
              <span className="max-w-full truncate font-prompt text-[10px] font-semibold leading-tight">
                {labels[tab.id]}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function MapIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" strokeLinejoin="round" />
      <path d="M9 4v14M15 6v14" />
      {active && <circle cx="15.5" cy="11" r="1.4" fill="currentColor" stroke="none" />}
    </svg>
  );
}

function GuideIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M5 12a7 7 0 1 1 10.5 6.1L17 20l-3.2-.7A7 7 0 0 1 5 12Z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeLinecap="round" />
      {active ? null : null}
    </svg>
  );
}

function GiftIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="4" y="11" width="16" height="9" rx="1.5" />
      <path d="M4 11h16M12 7v13" />
      <path d="M12 11c-2.2-3.8-6-3.2-6-1s2.2 2.4 6 1Z" />
      <path d="M12 11c2.2-3.8 6-3.2 6-1s-2.2 2.4-6 1Z" />
      {active ? null : null}
    </svg>
  );
}

function BookIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M6 5.5A2.5 2.5 0 0 1 8.5 3H19v16H8.5A2.5 2.5 0 0 0 6 21.5V5.5Z" />
      <path d="M6 19.2A2.5 2.5 0 0 1 8.5 17H19" />
      {active ? null : null}
    </svg>
  );
}
