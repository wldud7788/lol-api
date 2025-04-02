import { Metadata } from "next";
import RotationChampList from "./components/rotationChampList";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "리그오브레전드 -로테이션 챔피언 목록",
  description: "Riot Games API를 활용한 로테이션 챔피언 목록",
  openGraph: {
    title: "리그오브레전드 -로테이션 챔피언 목록",
    description: "Riot Games API를 활용한 로테이션 챔피언 목록",
  },
};
//
const RotationPage = () => {
  return (
    <main className="main">
      <div className="champion_list_container">
        <h1>로테이션 챔피언 목록</h1>
        <Suspense fallback={<Loading />}>
          <RotationChampList />
        </Suspense>
      </div>
    </main>
  );
};

export default RotationPage;
