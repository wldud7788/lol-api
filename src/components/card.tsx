import { ChampionType } from "@/types/Champion";
import { imgUrl } from "@/utils/imgUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type CardProps = {
  item: ChampionType;
};
const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <Link key={item.blurb} href={`./champions/${item.name}`}>
      <Image
        src={`${imgUrl}${item.image.full}`}
        width={300}
        height={300}
        alt=""
      />
      <p>이름: {item.name}</p>
      <p>타이틀: {item.title}</p>
    </Link>
  );
};

export default Card;
