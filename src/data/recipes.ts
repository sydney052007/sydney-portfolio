export type Recipe = {
  name: string;
  image: string;
  description: string;
  meta: string;
};

export const recipes: Recipe[] = [
  {
    name: "全穀黑麥鷹嘴豆咖啡酸種小法棍（焦糖洋蔥內餡）",
    image: "/images/interests/baking/sourdough-1.jpg",
    description:
      "食材：全穀黑麥粉 280g、鷹嘴豆粉 120g、酸種 60g、手沖咖啡 250g、鹽 8g、洋車前子粉 20g、烤洋蔥 1 顆",
    meta: "份量：約 5-6 條（總粉重 400g）｜ 總時間：約 30 小時（含 24 小時冷藏發酵）",
  },
  {
    name: "全麥米穀地瓜泥咖啡酸種麵包（地瓜漩渦長棍）",
    image: "/images/interests/baking/sourdough-2.jpg",
    description:
      "食材：全麥粉 320g、米穀粉 80g、酸種 80g、手沖咖啡 260-280g、鹽 8g、地瓜泥 1 顆（約 100-120g）",
    meta: "份量：總粉重 400g，麵團約 790-830g ｜ 總時間：約 3 天（含隔夜冷藏發酵）",
  },
  {
    name: "全麥蕎麥甜菜根蔥花酸種麵包",
    image: "/images/interests/baking/sourdough-3.jpg",
    description:
      "食材：全麥粉 308g、蕎麥粉 72g、甜菜根粉 20g、酸種 60g、希臘優格 110g、水 280-285g、鹽 3.5g、昆布鹽 20g、蔥花 40-50g",
    meta: "份量：總粉重 400g，麵團約 880-900g ｜ 總時間：約 3 天（含隔夜冷藏發酵）",
  },
  {
    name: "黑麥米穀馬鈴薯酸種麵包",
    image: "/images/interests/baking/sourdough-4.jpg",
    description:
      "食材：黑麥粉 200g、米穀粉 50g、全麥粉 50g、酸種 60g、馬鈴薯泥 130g、洋車前子粉 15g、鹽 5g、海苔 2-3 片、白話梅肉 12g",
    meta: "份量：總粉重 300g，麵團約 700g，一顆中型圓麵包 ｜ 總時間：約 3 天（含隔夜冷藏發酵）",
  },
  {
    name: "全麥黑麥鷹嘴豆馬鈴薯番茄乾酸種麵包",
    image: "/images/interests/baking/sourdough-5.jpg",
    description:
      "食材：全麥粉 280g、黑麥粉 80g、鷹嘴豆粉 40g、酸種 80g、水 260-300g、鹽 8g、馬鈴薯丁 60-90g、番茄乾 20-25g",
    meta: "份量：總粉重 400g，麵團約 850g，分兩條長型麵包 ｜ 總時間：約 3 天（含隔夜冷藏發酵）",
  },
];
