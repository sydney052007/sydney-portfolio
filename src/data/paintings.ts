export type Painting = {
  file: string;
  titleZh: string;
  titleEn: string;
  mediaNote?: string;
};

// public/images/interests/painting/series/
export const solarTermsSeries: Painting[] = [
  { file: "start-of-spring.jpg", titleZh: "立春", titleEn: "Start of Spring" },
  { file: "rain-water.jpg", titleZh: "雨水", titleEn: "Rain Water" },
  { file: "awakening-of-insects.jpg", titleZh: "驚蟄", titleEn: "Awakening of Insects" },
  { file: "spring-equinox.jpg", titleZh: "春分", titleEn: "Spring Equinox" },
  { file: "clear-and-bright.jpg", titleZh: "清明", titleEn: "Clear and Bright" },
  { file: "grain-rain.jpg", titleZh: "穀雨", titleEn: "Grain Rain" },
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
      { file: "Christmas.jpg", titleZh: "雪精靈的聚會", titleEn: "Gathering of Snow Sprites" },
      { file: "extinction_rebellion.jpg", titleZh: "滅絕反抗", titleEn: "Extinction Rebellion" },
      { file: "forest.jpg", titleZh: "林間蝶影", titleEn: "Butterflies in the Woods" },
      { file: "kimono.jpg", titleZh: "和服少女", titleEn: "Girl in Kimono" },
      { file: "newyear_snake.jpg", titleZh: "白蛇拉麵", titleEn: "White Snake Ramen" },
      { file: "person2.jpg", titleZh: "側臉", titleEn: "Profile" },
      { file: "person3.jpg", titleZh: "藍眼女孩", titleEn: "Blue-Eyed Girl" },
      { file: "grape.jpg", titleZh: "野果", titleEn: "Wild Berries" },
      { file: "newyear_tiger.jpg", titleZh: "春池中的老虎", titleEn: "Tiger in the Spring Pool" },
    ],
  },
  {
    id: "oil",
    labelZh: "油畫",
    labelEn: "Oil Painting",
    folder: "oil",
    works: [
      { file: "cat.jpg", titleZh: "雙眼", titleEn: "Two Eyes" },
      { file: "dolphin.jpg", titleZh: "海豚之殤", titleEn: "The Dolphin's Grief" },
    ],
  },
  {
    id: "colored-pencil",
    labelZh: "色鉛筆",
    labelEn: "Colored Pencil",
    folder: "colored-pencil",
    works: [
      { file: "alices-dream.jpg", titleZh: "艾麗絲的兔子夢", titleEn: "Alice's Rabbit Dream" },
    ],
  },
  {
    id: "other",
    labelZh: "其他",
    labelEn: "Other",
    folder: "other",
    works: [
      { file: "nined-tail_fox.jpg", titleZh: "九尾狐的盛宴", titleEn: "The Nine-Tailed Fox's Feast", mediaNote: "麥克筆" },
      { file: "pearl_sea_tea.jpg", titleZh: "海洋珍珠", titleEn: "Ocean Pearl", mediaNote: "麥克筆" },
      { file: "color_hand.jpg", titleZh: "色彩之手", titleEn: "Hands of Color", mediaNote: "複合媒材" },
      { file: "plural_marriage.jpg", titleZh: "疫線紅繩", titleEn: "Bound Apart", mediaNote: "複合媒材" },
      { file: "newyear_horse.jpg", titleZh: "木馬慶典", titleEn: "Carousel Festival", mediaNote: "原子筆" },
      { file: "person1.jpg", titleZh: "明暗之間", titleEn: "Between Light and Dark", mediaNote: "壓克力顏料，畫在絲布上" },
    ],
  },
];
