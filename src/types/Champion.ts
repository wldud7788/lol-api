export type ChampionData = {
  [key: string]: ChampionType; // 각 챔피언의 ID를 키로 하는 타입 정의
};

export type ChampionType = {
  id: number;
  key: string;
  name: string; //아트록스
  title: string; //다르킨의 검
  blurb: string; // 설명
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
  };
};
