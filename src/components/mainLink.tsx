import Image from "next/image";
import Link from "next/link";
export const endPoint = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/`;
const MainLink = () => {
  return (
    <div className="link_container">
      <Link href={"/champions"}>
        챔피언 목록보기
        <Image
          src={`${endPoint}Aphelios_0.jpg`}
          alt="Picture of the author"
          width={500}
          height={500}
        ></Image>
      </Link>

      <Link href={"/rotation"}>
        금주 로테이션 확인
        <Image
          src={`${endPoint}Ahri_0.jpg`}
          alt="Picture of the author"
          width={500}
          height={500}
        ></Image>
      </Link>
      <Link href={"/items"}>
        아이템 목록보기
        <Image
          src={`${endPoint}Aatrox_0.jpg`}
          alt="Picture of the author"
          width={500}
          height={500}
        ></Image>
      </Link>
    </div>
  );
};

export default MainLink;
