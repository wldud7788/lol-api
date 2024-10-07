import Card from "@/components/card";
import { ChampionType } from "@/types/Champion";
import { fetchChampion } from "@/utils/serverApi";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "리그오브레전드 - 챔피언 목록",
  description: "Riot Games API를 활용한 챔피언 목록",
  openGraph: {
    title: "리그오브레전드 - 챔피언 목록",
    description: "Riot Games API를 활용한 챔피언 목록",
  },
};

export default async function Home() {
  const champions = await fetchChampion();
  if (!champions) {
    console.log("챔피언 목록 뿌려주는 부분에서 fetchChampion실패!");
    return;
  }
  return (
    <main className="main">
      <div className="champion_list_container">
        <h1>챔피언 목록</h1>
        <div className="champion_card_container">
          {champions?.map((item: ChampionType) => {
            return (
              <div key={item.blurb}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
