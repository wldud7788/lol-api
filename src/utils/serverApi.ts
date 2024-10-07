"use server";
import { ChampionData } from "@/types/Champion";
import { ItemList } from "@/types/Item";
const endPoint =
  "https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json";
const endPoint2 =
  "https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json";

// 챔피언 가져오기 - ISR
export const fetchChampion = async () => {
  const res = await fetch(endPoint, {
    next: {
      revalidate: 86000,
    },
  });

  // ChampionData 타입으로 API 응답 할당
  if (!res.ok) {
    console.error("챔피언 데이터 가져오기 실패");
    return null;
  }
  try {
    const { data }: { data: ChampionData } = await res.json();
    const championList = Object.values(data);
    return championList;
  } catch (error) {
    console.log("챔피언 패칭 오류", error);
  }
};
// 챔피언 가져오기 - SSR
export const fetchChampionSSR = async () => {
  const res = await fetch(endPoint, {
    next: {
      revalidate: 86000,
    },
  });

  // ChampionData 타입으로 API 응답 할당
  if (!res.ok) {
    console.error("챔피언 데이터 가져오기 실패");
    return null;
  }
  try {
    const { data }: { data: ChampionData } = await res.json();
    const championList = Object.values(data);
    return championList;
  } catch (error) {
    console.log("챔피언 패칭 오류", error);
  }
};
// 아이템 가져오기
export const fetchItem = async () => {
  const res = await fetch(endPoint2);
  if (!res.ok) {
    console.error("아이템 데이터 가져오기 실패");
    return null;
  }
  try {
    const data: ItemList = await res.json();
    const itemList = Object.values(data.data);
    return itemList;
    // "1001": {name: "",description:""}
    // "1002": {name: "",description:""}
  } catch (error) {
    console.log("아이템 데이터 패칭 오류", error);
  }
};
