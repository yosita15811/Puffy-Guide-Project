export const ASSETS = {
  mascot: "/landing page/puffy.png",
  background: "/landing page/7ce3784f-963b-47aa-95fd-29999cf23f87.jfif",
  notebook: "/landing page/Notebook & Clay Paper.png",
  chest: "/reward/mystery-chest.png",
} as const;

export type Lang = "th" | "en" | "cn";
export type ScreenPhase = "landing" | "scanning" | "connected" | "guest";

type Copy = {
  brand: string;
  verified: string;
  headline: string;
  body: string;
  nfc: string;
  guest: string;
  scanning: string;
  scanningHint: string;
  connectedHeadline: string;
  connectedBody: string;
  continueCta: string;
  guestHeadline: string;
  guestBody: string;
  reset: string;
  langAria: string;
};

export const LANG_OPTIONS: { id: Lang; short: string; name: string }[] = [
  { id: "th", short: "TH", name: "ไทย" },
  { id: "en", short: "EN", name: "English" },
  { id: "cn", short: "CN", name: "中文" },
];

export const COPY: Record<Lang, Copy> = {
  th: {
    brand: "☁️ Puffy Companion",
    verified: "✅ เชื่อมต่อ Puffy (Token #0) ของแท้แล้ว",
    headline: "สวัสดีเจ้า! ยินดีต้อนรับสู่เชียงใหม่",
    body: "หนูชื่อ Puffy ไกด์จิ๋วของคุณ พร้อมไปแอ่วและสะสมแสตมป์หรือยัง? 🧭",
    nfc: "📱 แตะ NFC เชื่อมต่อ Art Toy",
    guest: "👀 สำรวจก่อน (Guest Mode)",
    scanning: "กำลังอ่าน NFC...",
    scanningHint: "กรุณาวาง Art Toy ใกล้โทรศัพท์สักครู่",
    connectedHeadline: "เยี่ยมมาก! เชื่อมต่อสำเร็จ",
    connectedBody: "Art Toy ของคุณพร้อมแล้ว ไปแอ่วและสะสมแสตมป์ด้วยกันเถอะ ✨",
    continueCta: "เริ่มเดินทาง",
    guestHeadline: "ยินดีต้อนรับนักสำรวจ!",
    guestBody: "เข้าชมแบบ Guest ได้เลย — สะสมแสตมป์ได้เมื่อเชื่อมต่อ Art Toy นะ 🧭",
    reset: "กลับหน้าแรก",
    langAria: "เลือกภาษา",
  },
  en: {
    brand: "☁️ Puffy Companion",
    verified: "✅ Official Puffy (Token #0) Connected",
    headline: "Sawatdee Jao! Welcome to Chiang Mai",
    body: "I'm Puffy, your mini companion. Ready to explore and collect stamps? 🧭",
    nfc: "📱 Tap NFC to Connect Art Toy",
    guest: "👀 Explore as Guest",
    scanning: "Reading NFC...",
    scanningHint: "Hold your Art Toy near the phone",
    connectedHeadline: "Awesome! You're connected",
    connectedBody: "Your Art Toy is ready. Let's explore Chiang Mai and collect stamps ✨",
    continueCta: "Start the journey",
    guestHeadline: "Welcome, explorer!",
    guestBody: "Browse as a guest for now — connect an Art Toy later to collect stamps 🧭",
    reset: "Back to start",
    langAria: "Choose language",
  },
  cn: {
    brand: "☁️ Puffy 伴侣",
    verified: "✅ 已连接正品 Puffy (Token #0)",
    headline: "您好！欢迎来到清迈",
    body: "我是您的专属口袋向导 Puffy，准备好一起打卡集章了吗？🧭",
    nfc: "📱 触碰 NFC 连接潮玩",
    guest: "👀 游客模式先行体验",
    scanning: "正在读取 NFC...",
    scanningHint: "请将潮玩靠近手机片刻",
    connectedHeadline: "太棒了！连接成功",
    connectedBody: "您的潮玩已就绪，一起去清迈打卡集章吧 ✨",
    continueCta: "开始旅程",
    guestHeadline: "欢迎探险家！",
    guestBody: "您正在以游客模式浏览 — 连接潮玩后即可集章 🧭",
    reset: "返回首页",
    langAria: "选择语言",
  },
};

export const htmlLang = (lang: Lang) => (lang === "cn" ? "zh-CN" : lang);

export type AppTab = "map" | "guide" | "rewards" | "passport";

type MapCopy = {
  title: string;
  level: string;
  coins: string;
  stage1Title: string;
  stage1Pin: string;
  stage1Hint: string;
  stage2Title: string;
  stage2Pin: string;
  stage2Hint: string;
  stage3Title: string;
  stage3Pin: string;
  stage3Hint: string;
  checkIn: string;
  checking: string;
  success: string;
  reward: string;
  stamp: string;
  nextTrail: string;
  locked: string;
  navMap: string;
  navGuide: string;
  navRewards: string;
  navPassport: string;
  comingSoon: string;
  comingSoonBody: string;
};

export const MAP_COPY: Record<Lang, MapCopy> = {
  th: {
    title: "แผนที่ & เควสต์",
    level: "Lv.3 Explorer",
    coins: "Coins",
    stage1Title: "Stage 1: ประตูท่าแพ",
    stage1Pin: "ประตูท่าแพ",
    stage1Hint: "จุดเริ่มต้นกำแพงเมืองเก่า",
    stage2Title: "Stage 2: วัดเจดีย์หลวง",
    stage2Pin: "วัดเจดีย์หลวง",
    stage2Hint: "เป้าหมายถัดไป",
    stage3Title: "Stage 3: ถนนคนเดินวัวลาย",
    stage3Pin: "ถนนคนเดินวัวลาย",
    stage3Hint: "ล็อกอยู่ — เคลียร์เควสต์ก่อน",
    checkIn: "📍 Check-in (แตะ NFC หรือ GPS Check-in)",
    checking: "กำลังเช็กอิน...",
    success: "✅ เช็กอินสำเร็จ!",
    reward: "+120 EXP, +80 Coins",
    stamp: "แสตมป์ท่าแพ",
    nextTrail: "ตามทางหินไปต่อ",
    locked: "ล็อก",
    navMap: "แผนที่",
    navGuide: "ไกด์ AI",
    navRewards: "รางวัล",
    navPassport: "พาสปอร์ต",
    comingSoon: "เร็วๆ นี้เจ้า!",
    comingSoonBody: "Puffy กำลังจัดกระเป๋าสำหรับหน้านี้",
  },
  en: {
    title: "Map & Quests",
    level: "Lv.3 Explorer",
    coins: "Coins",
    stage1Title: "Stage 1: Tha Phae Gate",
    stage1Pin: "Tha Phae Gate",
    stage1Hint: "Start at the old city wall",
    stage2Title: "Stage 2: Wat Chedi Luang",
    stage2Pin: "Wat Chedi Luang",
    stage2Hint: "Next target",
    stage3Title: "Stage 3: Wualai Walking Street",
    stage3Pin: "Wualai Street",
    stage3Hint: "Locked — finish earlier quests first",
    checkIn: "📍 Check-in (Tap NFC or GPS Check-in)",
    checking: "Checking in...",
    success: "✅ Check-in complete!",
    reward: "+120 EXP, +80 Coins",
    stamp: "Tha Phae Stamp",
    nextTrail: "Follow the cobblestone trail",
    locked: "Locked",
    navMap: "Map",
    navGuide: "AI Guide",
    navRewards: "Rewards",
    navPassport: "Passport",
    comingSoon: "Coming soon, jao!",
    comingSoonBody: "Puffy is packing this page for you",
  },
  cn: {
    title: "地图 & 任务",
    level: "Lv.3 Explorer",
    coins: "金币",
    stage1Title: "Stage 1: 塔佩门",
    stage1Pin: "塔佩门",
    stage1Hint: "从旧城墙门口出发",
    stage2Title: "Stage 2: 斋滴銮寺",
    stage2Pin: "斋滴銮寺",
    stage2Hint: "下一个目标",
    stage3Title: "Stage 3: 瓦莱步行街",
    stage3Pin: "瓦莱步行街",
    stage3Hint: "未解锁 — 请先完成前置任务",
    checkIn: "📍 Check-in（轻触 NFC 或 GPS 打卡）",
    checking: "正在打卡...",
    success: "✅ 打卡成功！",
    reward: "+120 EXP, +80 金币",
    stamp: "塔佩门印章",
    nextTrail: "沿石板路继续前进",
    locked: "锁定",
    navMap: "地图",
    navGuide: "AI 向导",
    navRewards: "奖励",
    navPassport: "护照",
    comingSoon: "即将开放！",
    comingSoonBody: "Puffy 正在为这一页收拾行李",
  },
};

type ChatCopy = {
  header: string;
  foodTitle: string;
  foodDistance: string;
  foodHighlight: string;
  souvenirMessage: string;
  souvenirBadge: string;
  souvenirTitle: string;
  souvenirSubtitle: string;
  souvenirHighlight: string;
  mapPin: string;
  btnNav: string;
  btnDiscount: string;
  photoTitle: string;
  photoSub: string;
  cameraBtn: string;
  inputPlaceholder: string;
};

export const CHAT_COPY: Record<Lang, ChatCopy> = {
  th: {
    header: "Puffy Guide",
    foodTitle: "กาดหลวง · ข้าวซอยแม่สาย",
    foodDistance: "ห่างจากท่าแพ ~800 เมตร (เดิน ~10 นาที)",
    foodHighlight: "เมนูเด็ด: ข้าวซอยไก่ + น้ำพริกอ่องร้อนๆ",
    souvenirMessage: "อยากได้ของฝากเท่ๆ ใช่ไหมเจ้า! 🛍️ Puffy เลือกคราฟต์ท้องถิ่นให้แล้วเน้อ",
    souvenirBadge: "ของฝากคราฟต์ & Handmade",
    souvenirTitle: "ร่มบ่อสร้าง & เงินวัวลาย",
    souvenirSubtitle: "เวิร์กชอปใกล้เมือง · ใช้เหรียญแลกส่วนลดได้",
    souvenirHighlight: "ของเด็ด: ร่มจิ๋วเพ้นท์มือ + จี้ช้างเงิน",
    mapPin: "ตำแหน่งปัจจุบันของคุณ",
    btnNav: "🧭 เปิดแผนที่นำทาง",
    btnDiscount: "🎫 ใช้ 50 Coins รับส่วนลด 10%",
    photoTitle: "ถาม Puffy ด้วยรูปภาพ",
    photoSub: "ถ่ายรูปอาหารหรือวัดเก่า",
    cameraBtn: "เปิดกล้อง",
    inputPlaceholder: "พิมพ์คำถามของคุณ...",
  },
  en: {
    header: "Puffy Guide",
    foodTitle: "Kad Luang · Khao Soi Mae Sai",
    foodDistance: "800m from Tha Phae (~10 mins walk)",
    foodHighlight: "Must-try: Chicken Khao Soi + Warm Nam Prik Ong",
    souvenirMessage: "Looking for cool souvenirs? 🛍️ Puffy picked the best local crafts for you!",
    souvenirBadge: "Local Crafts & Handmade",
    souvenirTitle: "Bo Sang Umbrella & Wualai Silver",
    souvenirSubtitle: "City Workshop · Redeem discount with coins",
    souvenirHighlight: "Top Picks: Hand-painted mini umbrella + Silver elephant charm",
    mapPin: "Your current location",
    btnNav: "🧭 Open Navigation",
    btnDiscount: "🎫 Use 50 Coins for 10% Off",
    photoTitle: "Ask Puffy with a photo",
    photoSub: "Snap food or old temples",
    cameraBtn: "Open camera",
    inputPlaceholder: "Ask anything about Chiang Mai...",
  },
  cn: {
    header: "Puffy 导游",
    foodTitle: "瓦洛洛市场 · 湄赛泰北金面",
    foodDistance: "距离塔佩门约800米 (步行约10分钟)",
    foodHighlight: "必吃推荐: 招牌鸡腿金面 + 热腾腾番茄猪肉酱",
    souvenirMessage: "想要特别的纪念品吗？🛍️ Puffy 为您挑选了精选特色手工艺品！",
    souvenirBadge: "传统手工艺术品",
    souvenirTitle: "博桑油纸伞 & 哇莱银器",
    souvenirSubtitle: "市区手工坊 · 可使用金币兑换折扣",
    souvenirHighlight: "推荐: 手绘迷你油纸伞 + 纯银小象吊坠",
    mapPin: "您的当前位置",
    btnNav: "🧭 开启地图导航",
    btnDiscount: "🎫 使用 50 金币享 9 折",
    photoTitle: "拍照向 Puffy 提问",
    photoSub: "随手拍美食或古寺建筑",
    cameraBtn: "开启相机",
    inputPlaceholder: "向 Puffy 询问关于清迈的任何事...",
  },
};

export type CollectionItemId =
  | "umbrella"
  | "elephant"
  | "bell"
  | "yipeng"
  | "tinchok"
  | "locked";

export type CollectionFilterId = "all" | "artifacts" | "chest" | "nft";

export type LocalizedText = {
  name: string;
  subName: string;
  description: string;
};

export type CollectionItem = {
  id: CollectionItemId;
  emoji: string;
  rarity: string;
  filter: Exclude<CollectionFilterId, "all">;
  locked?: boolean;
  locales: Record<Lang, LocalizedText>;
};

/** Canonical collectibles — never mix languages; resolve via `lang`. */
export const COLLECTION_ITEMS: CollectionItem[] = [
  {
    id: "umbrella",
    emoji: "☂️",
    rarity: "RARE",
    filter: "artifacts",
    locales: {
      th: {
        name: "ร่มบ่อสร้างมงคล",
        subName: "ร่มกระดาษสาเพ้นท์มือ",
        description:
          "ร่มบ่อสร้างทำจากกระดาษสาแท้ เพ้นท์ลายดอกไม้อ่อนช้อย ช่วยคุ้มครองภัยและให้ร่มเย็นเป็นสุข",
      },
      en: {
        name: "Auspicious Bo Sang Umbrella",
        subName: "Hand-painted Sa Paper Umbrella",
        description:
          "Traditional handmade umbrella crafted from natural mulberry paper, bringing peace, shade, and good fortune.",
      },
      cn: {
        name: "博桑吉祥油纸伞",
        subName: "传统手绘天然桑皮纸伞",
        description:
          "清迈博桑村手工制作的传统油纸伞，绘有优雅花纹，寓意遮风挡雨、平安吉祥。",
      },
    },
  },
  {
    id: "elephant",
    emoji: "🐘",
    rarity: "EPIC",
    filter: "artifacts",
    locales: {
      th: {
        name: "ช้างเงินวัวลาย",
        subName: "เครื่องเงินสลักลายโบราณ",
        description:
          "งานดุนโลหะเงินบริสุทธิ์จากชุมชนวัวลาย สัญลักษณ์แห่งพลังอำนาจและความเจริญรุ่งเรือง",
      },
      en: {
        name: "Wualai Silver Elephant",
        subName: "Hand-engraved Lanna Silverware",
        description:
          "Exquisite pure silver handicraft from the historic Wualai craft district, symbolizing strength and prosperity.",
      },
      cn: {
        name: "哇莱纯银祥象",
        subName: "非遗手工錾刻银器",
        description:
          "出自清迈哇莱路银匠名村的纯银手工雕刻，象征威严、力量与繁荣昌盛。",
      },
    },
  },
  {
    id: "bell",
    emoji: "🔔",
    rarity: "RARE",
    filter: "chest",
    locales: {
      th: {
        name: "กระดิ่งใบโพธิ์ล้านนา",
        subName: "กระดิ่งลมสำริดเสียงมงคล",
        description:
          "กระดิ่งสำริดรูปใบโพธิ์ ส่งเสียงดังกังวานใสเมื่อลมพัด ปัดเป่าสิ่งชั่วร้ายและเสริมสิริมงคล",
      },
      en: {
        name: "Lanna Bodhi Leaf Bell",
        subName: "Wind Chime of Blessing",
        description:
          "Bronze wind chime in the shape of a sacred Bodhi leaf, spreading resonant blessings with every breeze.",
      },
      cn: {
        name: "兰纳菩提祈福铜铃",
        subName: "清心涤虑吉祥风铃",
        description:
          "悬挂于古寺檐下的菩提叶铜铃，微风拂过发出清脆悦耳的风铃声，带来内心的平静与福报。",
      },
    },
  },
  {
    id: "yipeng",
    emoji: "🏮",
    rarity: "LANNA",
    filter: "chest",
    locales: {
      th: {
        name: "โคมยี่เป็งส่องสว่าง",
        subName: "โคมแขวนนำโชค",
        description:
          "โคมกระดาษแปดเหลี่ยมสีสันสดใส ประดับเพื่อความเป็นสิริมงคลและส่องทางสู่ความสำเร็จ",
      },
      en: {
        name: "Ever-glowing Yi Peng Lantern",
        subName: "Traditional Hanging Lantern",
        description:
          "Vibrant octagonal hanging lantern illuminating festival nights and guiding good fortune into your journey.",
      },
      cn: {
        name: "水灯节长明彩灯",
        subName: "泰北水灯节八角祈福挂灯",
        description:
          "清迈夜空中绚丽的八角彩灯，为旅人照亮前路，寄托对美好未来的祈愿。",
      },
    },
  },
  {
    id: "tinchok",
    emoji: "🧵",
    rarity: "CRAFT",
    filter: "nft",
    locales: {
      th: {
        name: "ผ้าตีนจกล้านนา",
        subName: "ผ้าทอมือลายโบราณผืนจิ๋ว",
        description:
          "ผ้าทอตีนจกด้วยลวดลายเรขาคณิตอันละเอียดอ่อน มรดกภูมิปัญญาการทอผ้าของชาวเชียงใหม่",
      },
      en: {
        name: "Lanna Tin Chok Weaving",
        subName: "Mini Hand-woven Heritage Fabric",
        description:
          "Intricately hand-woven traditional textile showcasing iconic geometric patterns of northern artisans.",
      },
      cn: {
        name: "兰纳特丁织锦",
        subName: "迷你手工挑花织锦",
        description:
          "传承百年的泰北传统挑花锦织布，几何图腾精美细致，尽显非遗织造技艺的温度。",
      },
    },
  },
  {
    id: "locked",
    emoji: "🔒",
    rarity: "SECRET",
    filter: "nft",
    locked: true,
    locales: {
      th: {
        name: "ของสะสมลับ",
        subName: "ยังไม่ปลดล็อก",
        description:
          "ร่วมออกสำรวจและทำเควสต์ในเมืองเก่าเพื่อปลดล็อกสมบัติชิ้นนี้!",
      },
      en: {
        name: "Mystery Artifact",
        subName: "Locked",
        description:
          "Continue exploring Chiang Mai Old City and completing quests to unlock this rare collectible!",
      },
      cn: {
        name: "神秘宝藏",
        subName: "未解锁",
        description:
          "继续探索清迈古城并完成更多打卡任务，即可解锁此专属神秘藏品！",
      },
    },
  },
];

export function getCollectionItemText(item: CollectionItem, lang: Lang): LocalizedText {
  return item.locales[lang] ?? item.locales.th;
}

type CollectionCopy = {
  header: string;
  filterAll: string;
  filterArtifacts: string;
  filterChest: string;
  filterNft: string;
  pageLabel: string;
  prev: string;
  next: string;
  gyroBadge: string;
  close: string;
};

export const COLLECTION_COPY: Record<Lang, CollectionCopy> = {
  th: {
    header: "ของสะสมของฉัน",
    filterAll: "ทั้งหมด",
    filterArtifacts: "ของโบราณล้านนา",
    filterChest: "รางวัลจากหีบ",
    filterNft: "ตราประทับ NFT",
    pageLabel: "หน้า {n} / {total}",
    prev: "ก่อนหน้า",
    next: "ถัดไป",
    gyroBadge: "เปิดมุมมอง 3D 360°",
    close: "ปิด",
  },
  en: {
    header: "My Collection",
    filterAll: "All",
    filterArtifacts: "Lanna Artifacts",
    filterChest: "Chest Drops",
    filterNft: "NFT Stamps",
    pageLabel: "Page {n} / {total}",
    prev: "Previous",
    next: "Next",
    gyroBadge: "360° Gyro Enabled",
    close: "Close",
  },
  cn: {
    header: "我的收藏",
    filterAll: "全部",
    filterArtifacts: "兰纳古物",
    filterChest: "宝箱掉落",
    filterNft: "NFT 印章",
    pageLabel: "第 {n} / {total} 页",
    prev: "上一页",
    next: "下一页",
    gyroBadge: "360° 陀螺仪视角已开启",
    close: "关闭",
  },
};

/** Alias matching TH | EN | CN callers — wraps COLLECTION_ITEMS locales. */
export function getCollectionItem(
  id: CollectionItemId | string,
  lang: Lang | "TH" | "EN" | "CN",
) {
  const normalized: Lang =
    lang === "TH" || lang === "th"
      ? "th"
      : lang === "CN" || lang === "cn"
        ? "cn"
        : "en";
  const legacyMap: Record<string, CollectionItemId> = {
    "bosang-umbrella": "umbrella",
    "silver-elephant": "elephant",
    "bodhi-bell": "bell",
    "yipeng-lantern": "yipeng",
    "tinchok-mini": "tinchok",
    locked: "locked",
  };
  const resolved =
    COLLECTION_ITEMS.find((entry) => entry.id === id) ||
    COLLECTION_ITEMS.find((entry) => entry.id === legacyMap[id]);
  if (!resolved) return undefined;
  const text = getCollectionItemText(resolved, normalized);
  const ui = COLLECTION_COPY[normalized];
  return {
    name: text.name,
    subName: text.subName,
    desc: text.description,
    badge: resolved.rarity,
    gyro: ui.gyroBadge,
    close: ui.close,
  };
}

export type PerkId =
  | "nimman"
  | "workshop"
  | "khaosoi"
  | "silver"
  | "songthaew"
  | "bosang";

export type PerkLocale = {
  category: string;
  title: string;
  subtitle: string;
  description: string;
};

export type TravelerPerk = {
  id: PerkId;
  icon: string;
  photo: string;
  cost: number;
  tag: string;
  initiallyRedeemed?: boolean;
  locales: Record<Lang, PerkLocale>;
};

export const TRAVELER_PERKS: TravelerPerk[] = [
  {
    id: "nimman",
    icon: "☕",
    photo: "/assets/reward-coffee.jpg",
    cost: 150,
    tag: "NIMM",
    initiallyRedeemed: true,
    locales: {
      th: {
        category: "อาหาร & เครื่องดื่ม",
        title: "ลด 15% คาเฟ่นิมมาน",
        subtitle: "Roast8ry & Clay Craft Cafe (นิมมาน)",
        description: "ลด 15% ทุกเมนูกาแฟ Special Beans",
      },
      en: {
        category: "FOOD & DRINK",
        title: "15% off - Nimman Cafe",
        subtitle: "Roast8ry & Clay Craft Cafe (Nimman)",
        description: "15% off every specialty coffee",
      },
      cn: {
        category: "美食与饮品",
        title: "宁曼路精选咖啡 85 折",
        subtitle: "Roast8ry & Clay Craft Cafe (宁曼路)",
        description: "全场特选精品咖啡享 85 折优惠",
      },
    },
  },
  {
    id: "workshop",
    icon: "🎨",
    photo: "/assets/perk-ceramics.jpg",
    cost: 200,
    tag: "ARTW",
    locales: {
      th: {
        category: "เวิร์กชอป & ศิลปะ",
        title: "ฟรีเครื่องดื่ม - เวิร์กชอปศิลปะ",
        subtitle: "บ้านข้างวัด คอมมูนิตี้คราฟต์",
        description: "รับฟรีเครื่องดื่มสมุนไพรเมื่อร่วมคลาสงานปั้น/เพ้นท์",
      },
      en: {
        category: "WORKSHOPS & ART",
        title: "Free drink - Art Workshop",
        subtitle: "Baan Kang Wat Craft Community",
        description: "Free herbal drink when joining craft workshops",
      },
      cn: {
        category: "手作工坊与艺术",
        title: "艺术体验赠免费饮品",
        subtitle: "Baan Kang Wat 森林艺术村",
        description: "参加陶艺或手作课程即赠特调草本饮品一杯",
      },
    },
  },
  {
    id: "khaosoi",
    icon: "🍜",
    photo: "/assets/khao-soi.jpg",
    cost: 120,
    tag: "KSOI",
    locales: {
      th: {
        category: "อาหารพื้นเมือง",
        title: "ฟรีท็อปปิ้งพิเศษ - ข้าวซอยแม่สาย",
        subtitle: "ข้าวซอยแม่สาย (สันติธรรม)",
        description: "ฟรีท็อปปิ้งไก่ตุ๋นหรือเนื้อนุ่มพิเศษ 1 ที่",
      },
      en: {
        category: "LOCAL DINING",
        title: "Free Extra Topping - Khao Soi Mae Sai",
        subtitle: "Khao Soi Mae Sai (Santitham)",
        description: "Free tender chicken or beef topping",
      },
      cn: {
        category: "泰北特色美食",
        title: "免费加料 - 湄赛泰北金面",
        subtitle: "Khao Soi Mae Sai (界遥/桑提塘)",
        description: "到店消费免费赠送精选卤鸡腿或秘制软嫩牛肉一份",
      },
    },
  },
  {
    id: "silver",
    icon: "🐘",
    photo: "/assets/perk-silver.jpg",
    cost: 300,
    tag: "SLVR",
    locales: {
      th: {
        category: "งานฝีมือล้านนา",
        title: "ส่วนลด 100 บาท - ทำเครื่องเงินวัวลาย",
        subtitle: "ศูนย์หัตถกรรมเครื่องเงินถนนวัวลาย",
        description: "ส่วนลดคอร์สเรียนสลักลายเครื่องเงินโบราณ 2 ชั่วโมง",
      },
      en: {
        category: "HERITAGE & CRAFTS",
        title: "100 THB off - Silver Engraving",
        subtitle: "Wualai Silver Craft Center",
        description: "100 THB discount for 2-hr silver engraving class",
      },
      cn: {
        category: "非遗手工银器",
        title: "立减 100 铢 - 哇莱纯银雕刻手作",
        subtitle: "哇莱路银匠手作工坊",
        description: "报名 2 小时传统银器錾刻体验课立享 100 泰铢减免",
      },
    },
  },
  {
    id: "songthaew",
    icon: "🛺",
    photo: "/assets/perk-songthaew.jpg",
    cost: 180,
    tag: "REDT",
    locales: {
      th: {
        category: "การเดินทาง",
        title: "นั่งรถแดงชิลล์รอบคูเมือง ลด 20 บาท",
        subtitle: "สหกรณ์นครลานนาเดินรถ (รถแดงเชียงใหม่)",
        description: "ส่วนลดค่าโดยสารรถแดงเที่ยวชมรอบคูเมืองเก่า",
      },
      en: {
        category: "TRANSPORT & ECO",
        title: "20 THB off - Historic Red Truck Hop",
        subtitle: "Chiang Mai Red Songthaew",
        description: "20 THB discount for Old City historic routes",
      },
      cn: {
        category: "便捷绿色出行",
        title: "立减 20 铢 - 清迈复古双条车",
        subtitle: "清迈红色双条车合作车队",
        description: "乘车环游古城历史护城河路线享 20 泰铢优惠减免",
      },
    },
  },
  {
    id: "bosang",
    icon: "☂️",
    photo: "/assets/reward-umbrella.jpg",
    cost: 250,
    tag: "UMBR",
    locales: {
      th: {
        category: "ของฝาก & วัฒนธรรม",
        title: "รับร่มกระดาษสาจิ๋วเพ้นท์ลายฟรี",
        subtitle: "หมู่บ้านทำร่มบ่อสร้าง (สันกำแพง)",
        description: "รับร่มสาเพ้นท์มือขนาดมินิ 1 คันเมื่อช้อปครบ 300 บาท",
      },
      en: {
        category: "CULTURAL SOUVENIR",
        title: "Free Hand-painted Mini Umbrella",
        subtitle: "Bo Sang Umbrella Handicraft Village",
        description: "Complimentary mini souvenir umbrella with 300 THB spend",
      },
      cn: {
        category: "文化体验与特产",
        title: "赠送手绘迷你油纸伞",
        subtitle: "博桑手工艺伞村 (山甘烹)",
        description: "店内购物满 300 泰铢即赠清迈非遗手绘微型油纸伞一把",
      },
    },
  },
];

export function getPerkText(perk: TravelerPerk, lang: Lang): PerkLocale {
  return perk.locales[lang] ?? perk.locales.th;
}

type RewardsCopy = {
  header: string;
  counter: string;
  redeem: string;
  redeemed: string;
  supportTitle: string;
  supportSub: string;
  coinsLabel: string;
  needCoins: string;
  redeemedToast: string;
};

export const REWARDS_COPY: Record<Lang, RewardsCopy> = {
  th: {
    header: "สิทธิพิเศษนักเดินทาง",
    counter: "มี 6 สิทธิพิเศษ",
    redeem: "แลกรับสิทธิ์",
    redeemed: "ใช้แล้ว",
    supportTitle: "สนับสนุนชุมชนท้องถิ่น",
    supportSub: "ทุกการเดินทางของคุณ ช่วยสร้างรอยยิ้มให้ชุมชนเชียงใหม่",
    coinsLabel: "Coins",
    needCoins: "เหรียญไม่พอเจ้า — ไปแอ่วเก็บเพิ่มก่อนเน้อ ☁️",
    redeemedToast: "แลกสำเร็จ! โชว์ร้านได้เลย 🌱",
  },
  en: {
    header: "Traveler perks",
    counter: "6 special offers",
    redeem: "Redeem",
    redeemed: "Done",
    supportTitle: "Support Local",
    supportSub: "A better trip creates a brighter community",
    coinsLabel: "Coins",
    needCoins: "Not enough coins — go quest a little more first ☁️",
    redeemedToast: "Redeemed! Show this at the partner shop 🌱",
  },
  cn: {
    header: "旅行者专属特权",
    counter: "6 项精选优惠",
    redeem: "立即兑换",
    redeemed: "已兑换",
    supportTitle: "支持本地社区与非遗工匠",
    supportSub: "您的每一次慢游打卡，都为清迈社区注入美好生机",
    coinsLabel: "金币",
    needCoins: "金币不足 — 先去完成更多打卡任务吧 ☁️",
    redeemedToast: "兑换成功！出示给合作店家即可 🌱",
  },
};

export type GachaItemId = Exclude<CollectionItemId, "locked">;

export type GachaPrize =
  | { type: "coins"; amount: 50 | 100 | 150 }
  | { type: "item"; itemId: GachaItemId };

export const GACHA_CHEST_COST = 100;

/** Maps React collection ids → legacy SPA vault ids */
export const GACHA_ITEM_TO_VAULT: Record<GachaItemId, string> = {
  umbrella: "bosang-umbrella",
  elephant: "silver-elephant",
  bell: "bodhi-bell",
  yipeng: "yipeng-lantern",
  tinchok: "tinchok-mini",
};

const GACHA_ITEM_POOL: GachaItemId[] = [
  "umbrella",
  "elephant",
  "bell",
  "yipeng",
  "tinchok",
];

/** Exactly one reward: coins XOR collectible (never both). */
export function rollGachaPrize(): GachaPrize {
  const roll = Math.random() * 100;
  // 55% coins branch
  if (roll < 55) {
    const coinRoll = Math.random() * 100;
    if (coinRoll < 45) return { type: "coins", amount: 50 };
    if (coinRoll < 80) return { type: "coins", amount: 100 };
    return { type: "coins", amount: 150 };
  }
  // 45% artifact branch
  const itemId = GACHA_ITEM_POOL[Math.floor(Math.random() * GACHA_ITEM_POOL.length)]!;
  return { type: "item", itemId };
}

type GachaCopy = {
  chestBadge: string;
  chestTitle: string;
  chestSub: string;
  chestBtn: string;
  header: string;
  subtitle: string;
  coinsDesc: string;
  claimCoins: string;
  claimItem: string;
  addedBadge: string;
  needCoins: string;
  toastClaim: string;
  coinsLabel: string;
};

export const GACHA_COPY: Record<Lang, GachaCopy> = {
  th: {
    chestBadge: "✨ Daily Lucky Draw",
    chestTitle: "หีบสมบัติล้านนา",
    chestSub: "เปิดหีบรับเหรียญหรือของสะสมโบราณ — ได้ทีละอย่างเจ้า!",
    chestBtn: "✨ 🗝️ เปิดหีบสมบัติ (100 Coins)",
    header: "ยินดีด้วยเจ้า! คุณเปิดได้รางวัล",
    subtitle: "ของขวัญพิเศษจากหีบสมบัติโบราณแห่งล้านนา ✨",
    coinsDesc:
      "ยินดีด้วยเจ้า! คุณได้รับเหรียญสะสมสำหรับแลกสิทธิพิเศษในเมืองเชียงใหม่",
    claimCoins: "รับเหรียญ (Claim Coins)",
    claimItem: "เก็บเข้าสมุดสะสม (Collect Item)",
    addedBadge: "🎉 บันทึกลงสมุดของสะสมแล้ว!",
    needCoins: "เหรียญไม่พอเจ้า — ต้องมีอย่างน้อย 100 Coins",
    toastClaim: "รับรางวัลเข้ากระเป๋าแล้วเจ้า! ✨",
    coinsLabel: "Coins",
  },
  en: {
    chestBadge: "✨ Daily Lucky Draw",
    chestTitle: "Lanna Mystery Chest",
    chestSub: "Open for coins or a collectible — one prize at a time!",
    chestBtn: "✨ 🗝️ Open the chest (100 Coins)",
    header: "Congratulations! You won a prize",
    subtitle: "A special gift from the ancient Lanna chest! ✨",
    coinsDesc:
      "Congratulations! You received coins to redeem local discounts in Chiang Mai.",
    claimCoins: "Claim Coins",
    claimItem: "Collect Item",
    addedBadge: "🎉 Added to your My Collection!",
    needCoins: "Not enough coins — you need at least 100 Coins",
    toastClaim: "Prize claimed! ✨",
    coinsLabel: "Coins",
  },
  cn: {
    chestBadge: "✨ Daily Lucky Draw",
    chestTitle: "兰纳神秘宝箱",
    chestSub: "开启宝箱获得金币或收藏品 — 每次仅一种奖励！",
    chestBtn: "✨ 🗝️ 打开宝箱（100 金币）",
    header: "恭喜您！开启宝箱获得奖励",
    subtitle: "来自古老兰纳宝箱的神秘专属赠礼！✨",
    coinsDesc: "恭喜您！获得可用于在清迈兑换专属特权的探索金币。",
    claimCoins: "领取金币",
    claimItem: "收入图鉴",
    addedBadge: "🎉 已收录至我的个人图鉴！",
    needCoins: "金币不足 — 至少需要 100 金币",
    toastClaim: "奖励已收入背包！✨",
    coinsLabel: "金币",
  },
};

export function rarityAuraClass(rarity: string): string {
  const key = rarity.toUpperCase();
  if (key === "EPIC") return "gacha-aura-epic";
  if (key === "LANNA") return "gacha-aura-lanna";
  if (key === "CRAFT") return "gacha-aura-craft";
  return "gacha-aura-rare";
}

export function rarityBadgeLabel(rarity: string, lang: Lang): string {
  const key = rarity.toUpperCase();
  if (lang === "th") {
    if (key === "EPIC") return "🌟 มหากาพย์";
    if (key === "LANNA") return "✨ ล้านนา";
    if (key === "CRAFT") return "✨ หัตถศิลป์";
    return "✨ หายาก";
  }
  if (lang === "cn") {
    if (key === "EPIC") return "🌟 史诗";
    if (key === "LANNA") return "✨ 兰纳";
    if (key === "CRAFT") return "✨ 工艺";
    return "✨ 稀有";
  }
  if (key === "EPIC") return "🌟 EPIC";
  if (key === "LANNA") return "✨ LANNA";
  if (key === "CRAFT") return "✨ CRAFT";
  return "✨ RARE";
}

