export type MediaItem = {
  name: string;
  images?: string[];
};

export const paintingMedia: MediaItem[] = [
  { name: "水彩" },
  { name: "素描" },
  { name: "油畫" },
  { name: "色鉛筆" },
  { name: "其他：麥克筆、丙烯顏料、水墨" },
];

export const musicText = "鋼琴 14 年、小提琴 12 年";

export const textileIntro = "織毛線 2~3 年";

export const textileWorks: MediaItem[] = [
  { name: "背心" },
  { name: "書套" },
  { name: "毯子" },
  { name: "袋子" },
  { name: "盒子" },
];
