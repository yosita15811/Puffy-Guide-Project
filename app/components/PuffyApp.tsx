"use client";

import { useEffect, useState } from "react";
import { htmlLang, type AppTab, type Lang } from "@/lib/i18n";
import AiChatScreen from "./AiChatScreen";
import BottomNav from "./BottomNav";
import CollectionScreen from "./CollectionScreen";
import LandingScreen from "./LandingScreen";
import MapQuestsScreen from "./MapQuestsScreen";
import PhoneFrame from "./PhoneFrame";
import RewardsScreen from "./RewardsScreen";

const START_COINS = 850;
const REWARD_COINS = 80;

export default function PuffyApp() {
  const [lang, setLang] = useState<Lang>("th");
  const [screen, setScreen] = useState<"landing" | AppTab>("landing");
  const [coins, setCoins] = useState(START_COINS);
  const [checkedIn, setCheckedIn] = useState(false);

  useEffect(() => {
    document.documentElement.lang = htmlLang(lang);
  }, [lang]);

  if (screen === "landing") {
    return (
      <LandingScreen
        lang={lang}
        onLangChange={setLang}
        onEnterApp={() => setScreen("map")}
      />
    );
  }

  return (
    <PhoneFrame>
      {screen === "map" ? (
        <MapQuestsScreen
          lang={lang}
          coins={coins}
          checkedIn={checkedIn}
          onLangChange={setLang}
          onCheckInSuccess={() => {
            setCheckedIn(true);
            setCoins(START_COINS + REWARD_COINS);
          }}
        />
      ) : screen === "guide" ? (
        <AiChatScreen lang={lang} onLangChange={setLang} />
      ) : screen === "rewards" ? (
        <RewardsScreen
          lang={lang}
          coins={coins}
          onLangChange={setLang}
          onSpendCoins={(amount) => {
            if (coins < amount) return false;
            setCoins((c) => c - amount);
            return true;
          }}
          onAddCoins={(amount) => setCoins((c) => c + amount)}
        />
      ) : (
        <CollectionScreen lang={lang} onLangChange={setLang} />
      )}
      <BottomNav active={screen} lang={lang} onChange={setScreen} />
    </PhoneFrame>
  );
}
