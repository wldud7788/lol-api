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
    <Link
      key={item.blurb}
      href={`./champions/${item.name}`}
      className="text-center"
    >
      <Image
        src={`${imgUrl}${item.image.full}`}
        width={300}
        height={300}
        alt="챔피언 이미지"
      />
      <p className="break-words break-keep line-clamp-1">{item.name}</p>
      <p className="text-xs break-words break-keep line-clamp-2">
        {item.title}
      </p>
    </Link>
  );
};

export default Card;
