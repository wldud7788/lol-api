import Image from "next/image";
import Link from "next/link";
export const endPoint = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/`;
const MainLink = () => {
  return (
    <div className="link_container">
      <Link href={"/champions"}>
        챔피언 목록보기
        <div className="relative">
          <Image
            src={`${endPoint}Aphelios_0.jpg`}
            alt="Picture of the author"
            width={500}
            height={500}
            priority
          ></Image>
          <div className="text-white bg-black absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-85 flex justify-center items-center">
            챔피언 목록보기
          </div>
        </div>
      </Link>

      <Link href={"/rotation"}>
        금주 로테이션 확인
        <div className="relative">
          <Image
            src={`${endPoint}Ahri_0.jpg`}
            alt="Picture of the author"
            width={500}
            height={500}
          ></Image>
          <div className="text-white bg-black absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-85 flex justify-center items-center">
            금주 로테이션 확인
          </div>
        </div>
      </Link>
      <Link href={"/items"}>
        아이템 목록보기
        <div className="relative">
          <Image
            src={`${endPoint}Aatrox_0.jpg`}
            alt="Picture of the author"
            width={500}
            height={500}
          ></Image>
          <div className="text-white bg-black absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-85 flex justify-center items-center">
            아이템 목록보기
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainLink;
