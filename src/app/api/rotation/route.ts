import { ChampionRotationID } from "@/types/ChampionRotation";
import { fetchChampion } from "@/utils/serverApi";

// 기본적으로 라우터핸들러는 캐시되지 않으므로 캐시하려면 force-static넣어야함
export const dynamic = "force-static";
const endPoint = `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations`;

export async function GET() {
  const RIOT_API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  // 라이엇 키가 없다면 에러 던짐
  if (!RIOT_API_KEY) {
    return new Response("RIOT_API_KEY없음", { status: 500 });
  }
  // 라이엇 키가 있다면 GET메서드 실행
  try {
    const res = await fetch(endPoint, {
      headers: {
        "X-Riot-Token": RIOT_API_KEY,
      },
    });
    // 성공적으로 res에 데이터가 담기지 않았다면 에러 던짐
    if (!res.ok) {
      throw new Error(`챔피언 로테이션 아이디 요청 실패: ${res.status}`);
    }
    // 성공적으로 res에 데이터가 담겼다면 json 형태로 반환하여 요청
    const rotationIds: ChampionRotationID = await res.json();

    // 챔피언 데이터 불러오기
    const champions = await fetchChampion();

    // 챔피언 데이터와 아이디값 필터하여 로테이션 챔피언 정보 리턴하기
    const freeChampions = champions?.filter((cham) => {
      return rotationIds.freeChampionIds.includes(Number(cham.key));
    });

    // 최종 응답값
    return new Response(JSON.stringify(freeChampions), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(`챔피언 로테이션 아이디 응답 실패 ${error}`, {
      status: 500,
    });
  }
}
