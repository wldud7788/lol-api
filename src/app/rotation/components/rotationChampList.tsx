"use client";
import { ChampionType } from "@/types/Champion";
import { useEffect, useState } from "react";
import Card from "@/components/card";

const RotationChampList = () => {
  const [rotationChamp, setRotationChamp] = useState([]);
  // 로테이션 아이디들
  useEffect(() => {
    const fetching = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const rotationResponse = await fetch(`${apiUrl}/rotation`);
      const data = await rotationResponse.json();
      setRotationChamp(data);
    };
    fetching();
  }, []);
  return (
    <div className="champion_card_container">
      {rotationChamp?.map((item: ChampionType) => {
        return (
          <div key={item.blurb}>
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default RotationChampList;
