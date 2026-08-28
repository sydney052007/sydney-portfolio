export const musicText = "鋼琴 14 年、小提琴 12 年";

export const textileIntro = "織毛線 2~3 年";

export type TextileWork = {
  file: string;
  titleZh: string;
  description: string;
  width: number;
  height: number;
  // Very wide/panoramic pieces get squeezed too small in the multi-column
  // grid; set true to give them their own full-width row instead.
  wide?: boolean;
};

// public/images/interests/textile/
export const textileWorks: TextileWork[] = [
  { file: "vest-lotus-pink.jpg", titleZh: "藕粉背心", description: "棒針，V 領無袖", width: 1600, height: 1214 },
  { file: "vest-oat.jpg", titleZh: "燕麥背心", description: "棒針，V 領綁帶開襟", width: 1600, height: 1402 },
  { file: "gloves-cable.jpg", titleZh: "麻花手套", description: "棒針，露指設計", width: 1307, height: 1600 },
  { file: "glove-pouch.jpg", titleZh: "手套收納袋", description: "勾針，兩色拼接、金屬四合釦", width: 1600, height: 1600 },
  { file: "net-bag-handle.jpg", titleZh: "提把網袋", description: "勾針", width: 883, height: 1600 },
  { file: "net-bag-tricolor.jpg", titleZh: "三色網袋", description: "勾針，同款三色系列", width: 1600, height: 795 },
  { file: "pacman-blanket.jpg", titleZh: "小精靈毯子", description: "勾針，六角形拼接工法", width: 1600, height: 635, wide: true },
];
