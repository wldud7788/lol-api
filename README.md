
# 배포 링크
[✨lol-api](https://lol-api-ten.vercel.app/)</br>
</br>

## Lol-API
 이 웹사이트는 롤 OPEN API를 활용하여 챔피언 정보, 아이템 정보, 로테이션 챔피언 정보를 확인할 수 있는 공간입니다.</br>
 각 챔피언의 상세정보와 모든 아이템의 간단한 설명을 볼 수 있고, 
 매주 변경되는 롤 로테이션 챔피언의 정보를 확인할 수 있습니다. </br>


</br>

## 용도
- 학습용도로 OPEN API를 활용하여 NEXT.js와 TypeScript에 대한 이해를 위해 프로젝트를 제작했습니다.
- SSR, ISR, CSR, SSR을 익히기 위함
</br>

## 구현기능
- 메인페이지
  챔피언 목록보기, 금주 로테이션 챔피언 확인, 아이템 목록 확인 링크가 있습니다.
   </br>
  ![스크린샷 2024-10-08 오전 2 55 40](https://github.com/user-attachments/assets/13665ff7-23ad-4915-bba5-23254a4a321a)

- 챔피언 목록
  ![스크린샷 2024-10-08 오전 3 28 04](https://github.com/user-attachments/assets/a232520e-44db-4ab2-89f1-33a3fcf1b56a)
  - Riot Open Api를 활용하여 가져올 데이터의 타입을 지정해주고, ISR로 작성하였습니다.
  - server action을 이용하여 구현하였습니다.
  - ISR로 작성하였습니다.
    
- 챔피언 디테일 페이지
  - 각 챔피언의 정보를 확인할 수 있습니다.
  - SSR로 작성하였습니다.
    
- 아이템 목록
  - 각 아이템 리스트를 확인할 수 있습니다.
  - server action을 이용하여 구현하였습니다.
  - SSG로 작성하였습니다.
 
- 로테이션 챔피언
  - RIOT API를 발급받아 route핸들러를 이용하여 구현하였습니다.
  - CSR로 작성하였습니다.
</br>

## 기술스택
- NEXT.js, TypeScript, TailWind

</br>

## 트러블슈팅
1. https://velog.io/@rooftop7788/LOLAPI%ED%99%9C%EC%9A%A9
2. https://velog.io/@rooftop7788/LOLAPI%ED%99%9C%EC%9A%A92
3. https://velog.io/@rooftop7788/LOLAPI%ED%99%9C%EC%9A%A93
   위의 링크에 트러블이 정리되어있습니다.

## 소감
프로젝트를 진행하면서 NEXT.js의 동작 방식과 SSR ISR, CSR, SSG에 대해 어느정도 파악이 된 것 같습니다.
