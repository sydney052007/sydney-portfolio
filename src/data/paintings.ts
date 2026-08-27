export type Painting = {
  file: string;
  titleZh: string;
  titleEn: string;
  width: number;
  height: number;
  mediaNote?: string;
};

// public/images/interests/painting/series/
export const solarTermsSeries: Painting[] = [
  { file: "start-of-spring.jpg", titleZh: "立春", titleEn: "Start of Spring", width: 1049, height: 1561 },
  { file: "rain-water.jpg", titleZh: "雨水", titleEn: "Rain Water", width: 1049, height: 1561 },
  { file: "awakening-of-insects.jpg", titleZh: "驚蟄", titleEn: "Awakening of Insects", width: 1049, height: 1561 },
  { file: "spring-equinox.jpg", titleZh: "春分", titleEn: "Spring Equinox", width: 1049, height: 1561 },
  { file: "clear-and-bright.jpg", titleZh: "清明", titleEn: "Clear and Bright", width: 1049, height: 1561 },
  { file: "grain-rain.jpg", titleZh: "穀雨", titleEn: "Grain Rain", width: 1049, height: 1561 },
];

export type PaintingMedium = {
  id: string;
  labelZh: string;
  labelEn: string;
  folder: string; // under public/images/interests/painting/
  works: Painting[];
};

export const paintingMediums: PaintingMedium[] = [
  {
    id: "watercolor",
    labelZh: "水彩",
    labelEn: "Watercolor",
    folder: "watercolor",
    works: [
    { file: "Christmas.jpg", titleZh: "雪精靈的聚會", titleEn: "Gathering of Snow Sprites", width: 1600, height: 1274 },
    { file: "extinction_rebellion.jpg", titleZh: "滅絕反抗", titleEn: "Extinction Rebellion", width: 1234, height: 1600 },
    { file: "forest.jpg", titleZh: "林間蝶影", titleEn: "Butterflies in the Woods", width: 1135, height: 1600 },
    { file: "kimono.jpg", titleZh: "和服少女", titleEn: "Girl in Kimono", width: 1151, height: 1600 },
    { file: "newyear_snake.jpg", titleZh: "白蛇拉麵", titleEn: "White Snake Ramen", width: 1280, height: 1600 },
    { file: "person2.jpg", titleZh: "側臉", titleEn: "Profile", width: 1149, height: 1600 },
    { file: "person3.jpg", titleZh: "藍眼女孩", titleEn: "Blue-Eyed Girl", width: 1122, height: 1600 },
    { file: "grape.jpg", titleZh: "野果", titleEn: "Wild Berries", width: 1600, height: 1125 },
    { file: "newyear_tiger.jpg", titleZh: "春池中的老虎", titleEn: "Tiger in the Spring Pool", width: 1600, height: 1104 },
    ],
  },
  {
    id: "oil",
    labelZh: "油畫",
    labelEn: "Oil Painting",
    folder: "oil",
    works: [
    { file: "cat.jpg", titleZh: "雙眼", titleEn: "Two Eyes", width: 1600, height: 1080 },
    { file: "dolphin.jpg", titleZh: "海豚之殤", titleEn: "The Dolphin's Grief", width: 1600, height: 1053 },
    ],
  },
  {
    id: "colored-pencil",
    labelZh: "色鉛筆",
    labelEn: "Colored Pencil",
    folder: "colored-pencil",
    works: [
    { file: "alices-dream.jpg", titleZh: "艾麗絲的兔子夢", titleEn: "Alice's Rabbit Dream", width: 1228, height: 1600 },
    ],
  },
  {
    id: "other",
    labelZh: "其他",
    labelEn: "Other",
    folder: "other",
    works: [
    { file: "nined-tail_fox.jpg", titleZh: "九尾狐的盛宴", titleEn: "The Nine-Tailed Fox's Feast", width: 1600, height: 1137, mediaNote: "麥克筆" },
    { file: "pearl_sea_tea.jpg", titleZh: "海洋珍珠", titleEn: "Ocean Pearl", width: 1600, height: 1234, mediaNote: "麥克筆" },
    { file: "color_hand.jpg", titleZh: "色彩之手", titleEn: "Hands of Color", width: 1081, height: 1600, mediaNote: "複合媒材" },
    { file: "plural_marriage.jpg", titleZh: "疫線紅繩", titleEn: "Bound Apart", width: 794, height: 1600, mediaNote: "複合媒材" },
    { file: "newyear_horse.jpg", titleZh: "木馬慶典", titleEn: "Carousel Festival", width: 1146, height: 1600, mediaNote: "原子筆" },
    { file: "person1.jpg", titleZh: "明暗之間", titleEn: "Between Light and Dark", width: 1526, height: 1600, mediaNote: "壓克力顏料，畫在絲布上" },
    ],
  },
];
