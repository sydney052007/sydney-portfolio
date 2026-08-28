export type PracticeFile = {
  file: string;
  width: number;
  height: number;
};

export type PracticeItem = {
  id: string;
  labelZh: string;
  labelEn: string;
  files: PracticeFile[];
};

export type PracticeCategory = {
  id: string;
  labelZh: string;
  labelEn: string;
  items: PracticeItem[];
};

// public/images/interests/painting/practice/<category-id>/<item-id>/<file>
export const paintingPractice: PracticeCategory[] = [
  {
    id: "fruit",
    labelZh: "水果",
    labelEn: "Fruit",
    items: [
      {
        id: "grape",
        labelZh: "葡萄",
        labelEn: "Grape",
        files: [
          { file: "grape-1.jpg", width: 1600, height: 1134 },
          { file: "grape-2.jpg", width: 1600, height: 1137 },
          { file: "grape-3.jpg", width: 1600, height: 1145 },
        ],
      },
      {
        id: "kiwi",
        labelZh: "奇異果",
        labelEn: "Kiwi",
        files: [
          { file: "kiwi-1.jpg", width: 1600, height: 1125 },
          { file: "kiwi-2.jpg", width: 1600, height: 1120 },
          { file: "kiwi-3.jpg", width: 1600, height: 1116 },
        ],
      },
      {
        id: "mangosteen",
        labelZh: "山竹",
        labelEn: "Mangosteen",
        files: [
          { file: "mangosteen-1.jpg", width: 1600, height: 1121 },
          { file: "mangosteen-2.jpg", width: 1600, height: 1120 },
          { file: "mangosteen-3.jpg", width: 1600, height: 1111 },
        ],
      },
      {
        id: "passion-fruit",
        labelZh: "百香果",
        labelEn: "Passion Fruit",
        files: [
          { file: "passion-fruit-1.jpg", width: 1600, height: 1120 },
          { file: "passion-fruit-2.jpg", width: 1600, height: 1124 },
          { file: "passion-fruit-3.jpg", width: 1600, height: 1133 },
        ],
      },
    ],
  },
  {
    id: "vegetable",
    labelZh: "蔬菜",
    labelEn: "Vegetable",
    items: [
      {
        id: "artichoke",
        labelZh: "洋薊",
        labelEn: "Artichoke",
        files: [
          { file: "artichoke-1.jpg", width: 1600, height: 1116 },
          { file: "artichoke-2.jpg", width: 1600, height: 1114 },
          { file: "artichoke-3.jpg", width: 1600, height: 1126 },
        ],
      },
      {
        id: "asparagus",
        labelZh: "蘆筍",
        labelEn: "Asparagus",
        files: [
          { file: "asparagus-1.jpg", width: 1600, height: 1114 },
          { file: "asparagus-2.jpg", width: 1600, height: 1117 },
          { file: "asparagus-3.jpg", width: 1082, height: 1600 },
        ],
      },
      {
        id: "brussels-sprout",
        labelZh: "抱子甘藍",
        labelEn: "Brussels Sprout",
        files: [
          { file: "brussels-sprout-1.jpg", width: 1600, height: 1126 },
          { file: "brussels-sprout-2.jpg", width: 1600, height: 1116 },
          { file: "brussels-sprout-3.jpg", width: 1600, height: 1115 },
        ],
      },
      {
        id: "carrot",
        labelZh: "紅蘿蔔",
        labelEn: "Carrot",
        files: [
          { file: "carrot-1.jpg", width: 1600, height: 1114 },
          { file: "carrot-2.jpg", width: 1600, height: 1141 },
          { file: "carrot-3.jpg", width: 1600, height: 1117 },
        ],
      },
      {
        id: "mushroom",
        labelZh: "香菇",
        labelEn: "Mushroom",
        files: [
          { file: "mushroom-1.jpg", width: 1600, height: 1119 },
          { file: "mushroom-2.jpg", width: 1600, height: 1111 },
          { file: "mushroom-3.jpg", width: 1600, height: 1121 },
        ],
      },
      {
        id: "onion",
        labelZh: "洋蔥",
        labelEn: "Onion",
        files: [
          { file: "onion-1.jpg", width: 1600, height: 1119 },
          { file: "onion-2.jpg", width: 1600, height: 1122 },
          { file: "onion-3.jpg", width: 1600, height: 1132 },
        ],
      },
      {
        id: "potato",
        labelZh: "馬鈴薯",
        labelEn: "Potato",
        files: [
          { file: "potato-1.jpg", width: 1600, height: 1120 },
          { file: "potato-2.jpg", width: 1600, height: 1115 },
          { file: "potato-3.jpg", width: 1600, height: 1135 },
        ],
      },
      {
        id: "taro",
        labelZh: "芋頭",
        labelEn: "Taro",
        files: [
          { file: "taro-1.jpg", width: 1600, height: 1124 },
          { file: "taro-2.jpg", width: 1600, height: 1102 },
          { file: "taro-3.jpg", width: 1600, height: 1119 },
        ],
      },
      {
        id: "tomato",
        labelZh: "番茄",
        labelEn: "Tomato",
        files: [
          { file: "tomato-1.jpg", width: 1600, height: 1128 },
          { file: "tomato-2.jpg", width: 1123, height: 1600 },
          { file: "tomato-3.jpg", width: 1600, height: 1125 },
        ],
      },
      {
        id: "zucchini",
        labelZh: "櫛瓜",
        labelEn: "Zucchini",
        files: [
          { file: "zucchini-1.jpg", width: 1600, height: 1147 },
          { file: "zucchini-2.jpg", width: 1600, height: 1126 },
          { file: "zucchini-3.jpg", width: 1600, height: 1136 },
        ],
      },
    ],
  },
  {
    id: "other",
    labelZh: "其他",
    labelEn: "Other",
    items: [
      {
        id: "black-sesame",
        labelZh: "黑芝麻",
        labelEn: "Black Sesame",
        files: [
          { file: "black-sesame-1.jpg", width: 1600, height: 1121 },
          { file: "black-sesame-2.jpg", width: 1600, height: 1132 },
        ],
      },
      {
        id: "crime-scene",
        labelZh: "飯醉現場",
        labelEn: "Crime Scene",
        files: [
          { file: "crime-scene.jpg", width: 1112, height: 1600 },
        ],
      },
      {
        id: "double-the-pumpkin",
        labelZh: "南上加南",
        labelEn: "Double the Pumpkin",
        files: [
          { file: "double-the-pumpkin.jpg", width: 1112, height: 1600 },
        ],
      },
      {
        id: "egg",
        labelZh: "雞蛋",
        labelEn: "Egg",
        files: [
          { file: "egg-1.jpg", width: 1600, height: 1119 },
          { file: "egg-2.jpg", width: 1600, height: 1135 },
          { file: "egg-3.jpg", width: 1600, height: 1132 },
        ],
      },
      {
        id: "mochi",
        labelZh: "麻糬",
        labelEn: "Mochi",
        files: [
          { file: "mochi-1.jpg", width: 1600, height: 1118 },
          { file: "mochi-2.jpg", width: 1600, height: 1130 },
        ],
      },
      {
        id: "moon-festival",
        labelZh: "中秋",
        labelEn: "Moon Festival",
        files: [
          { file: "moon-festival-1.jpg", width: 1600, height: 1114 },
          { file: "moon-festival-2.jpg", width: 1600, height: 1130 },
        ],
      },
      {
        id: "salmon",
        labelZh: "鮭魚",
        labelEn: "Salmon",
        files: [
          { file: "salmon-1.jpg", width: 1600, height: 1137 },
          { file: "salmon-2.jpg", width: 1600, height: 1132 },
          { file: "salmon-3.jpg", width: 1600, height: 1135 },
        ],
      },
    ],
  },
];
