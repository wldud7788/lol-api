//아이템 타입 정의
// - **Item**: 아이템 목록에서 사용하는 기본 정보 타입.

// > 힌트:
// >
// > - Data Dragon API의 아이템 데이터 구조를 참고하세요.
// > - 아이템의 가격 정보와 스탯 정보를 포함하도록 타입을 정의하세요.
export type ItemList = {
  type: string;
  version: string;
  data: { [key: string]: Item }; // 아이템 ID를 키로 갖는 객체
};

export type Item = {
  name: string;
  plaintext: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
  };
};
