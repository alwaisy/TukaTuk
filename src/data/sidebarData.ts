interface Topics {
  id: number;
  name: string;
  icon: string;
}

type TTopics = Topics[];

export const topics: TTopics = [
  {
    id: 0,
    name: "development",
    icon: "bi:code",
  },
  {
    id: 1,
    name: "comedy",
    icon: "bi:emoji-sunglasses",
  },
  {
    id: 2,
    name: "gaming",
    icon: "fa6-solid:gamepad",
  },
  {
    id: 3,
    name: "food",
    icon: "game-icons:cake-slice",
  },
  {
    id: 4,
    name: "dance",
    icon: "game-icons:galaxy",
  },
  {
    id: 5,
    name: "beauty",
    icon: "game-icons:lipstick",
  },
  {
    id: 6,
    name: "animals",
    icon: "fa6-solid:paw",
  },
  {
    id: 7,
    name: "sports",
    icon: "fa6-solid:medal",
  },
];

export const footerList1 = [
  "About",
  "Newsroom",
  "Store",
  "Contact",
  "Carrers",
  "ByteDance",
  "Creator Directory",
] as string[];

export const footerList2 = [
  "TikTik for Good",
  "Advertise",
  "Developers",
  "Transparency",
  "TikTik Rewards",
] as string[];

export const footerList3 = [
  "Help",
  "Safety",
  "Terms",
  "Privacy",
  "Creator Portal",
  "Community Guidelines",
] as string[];
