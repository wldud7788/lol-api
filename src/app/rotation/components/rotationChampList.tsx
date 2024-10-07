"use client";
import { ChampionType } from "@/types/Champion";
import { useEffect, useState } from "react";
import Card from "@/components/card";

const RotationChampList = () => {
  const [rotationChamp, setRotationChamp] = useState([]);
  // 로테이션 아이디들
  useEffect(() => {
    const fetching = async () => {
      const rotationResponse = await fetch(
        "http://localhost:3000/api/rotation"
      );
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
