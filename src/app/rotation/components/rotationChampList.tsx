"use client";
import { ChampionType } from "@/types/Champion";
import { useEffect, useState } from "react";
import Card from "@/components/card";

const RotationChampList = () => {
  const [rotationChamp, setRotationChamp] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 로테이션 아이디들
  useEffect(() => {
    const fetching = async () => {
      setIsLoading(true);
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const rotationResponse = await fetch(`${apiUrl}/rotation`);
        const data = await rotationResponse.json();
        setRotationChamp(data);
      } catch (error) {
        console.error("로테이션 챔피언 로드 중 에러: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetching();
  }, []);
  if (!rotationChamp || rotationChamp.length === 0) {
    return (
      <div className="text-center pt-20 sm:p-24">
        <p>
          현재 로테이션 챔피언이 없습니다. <br /> 토큰을 확인해주세요
        </p>
      </div>
    );
  }
  return (
    <div className="champion_card_container">
      {rotationChamp?.map((item: ChampionType) => {
        return (
          <div key={item.id}>
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default RotationChampList;
