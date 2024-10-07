import { fetchItem } from "@/utils/serverApi";
import { imgUr2 } from "@/utils/imgUrl";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "리그오브레전드 - 아이템 목록",
  description: "Riot Games API를 활용한 아이템 목록",
  openGraph: {
    title: "리그오브레전드 - 아이템 목록",
    description: "Riot Games API를 활용한 아이템 목록",
  },
};
const ItemPage = async () => {
  const itemList = await fetchItem();
  return (
    <main className="main">
      <div className="item_list_container">
        <h1>아이템 목록</h1>
        <div className="item_card_container">
          {itemList?.map((item) => {
            const itemDescriptions = item.plaintext.split(".");

            return (
              <div key={item.name}>
                <Image
                  src={`${imgUr2}${item.image.full}`}
                  width={100}
                  height={100}
                  alt=""
                />
                <h3>{item.name}</h3>
                {itemDescriptions.map((desc, index) => (
                  <p key={index}>{desc.trim()}</p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ItemPage;
