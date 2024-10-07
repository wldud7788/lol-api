import { fetchChampionSSR } from "@/utils/serverApi";
import { imgUrl } from "@/utils/imgUrl";
import { Metadata } from "next";
import Image from "next/image";
import React, { Suspense } from "react";
import Loading from "../loading";

// 메타데이터 생성
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = decodeURIComponent(params.id);
  const data = await fetchChampionSSR();
  const currentData = data?.find((item) => item.name === id);

  return {
    title: `${currentData?.name} - My Riot App`,
    description: `currentData?.blurb,`,
    openGraph: {
      title: `${currentData?.name} - My Riot App`,
      description: `currentData?.blurb,`,
    },
  };
};
type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  const id = decodeURIComponent(params.id); //params에서 아이디값을 가져옴
  // 가져온 아이디값과 일치하는 campion정보를 뿌려줄거임
  const data = await fetchChampionSSR();

  const currentData = data?.filter((item) => item.name === id);
  // console.log(currentData);
  return (
    <main className="main">
      <Suspense fallback={<Loading />}>
        {currentData?.map((item) => {
          return (
            <div key={item.id} className="detail_container ">
              <h1>{item.name}</h1>
              <h2>{item.title}</h2>
              <Image
                src={`${imgUrl}${item.image.full}`}
                alt=""
                width={300}
                height={300}
              />
              <p>{item.blurb}</p>
              <div className="text_area">
                <p>공격력: {item.info.attack}</p>
                <p>방어력: {item.info.defense}</p>
                <p>마법력: {item.info.magic}</p>
                <p>난이도: {item.info.difficulty}</p>
              </div>
            </div>
          );
        })}
      </Suspense>
    </main>
  );
};

export default page;
