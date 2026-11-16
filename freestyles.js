/* 프리스타일 도감 — 카드 하나 = 모션 하나. 누르면 변경 전·후 영상을 나란히 보여 준다.
   code: 스킬 코드(영상 파일 이름과 같음) / cat: jump 점프슛 · layup 레이업 · dunk 덩크 (개편 후 사이클 3개 기준)
   was: 개편 전 이름(이름이 바뀐 경우) / isNew: 개편 때 새로 나온 모션(변경 전 영상 없음)
   영상: video/before/<code>.mp4 (기존 영상) · video/after/<code>.mp4 (새 영상), 썸네일: img/thumb/<code>.jpg
   한글 이름 = 게임 데이터 기준(2026-11-16 확인). 영문 이름이 없으면 화면은 한글 이름을 쓴다(확인되면 en 채우기). */
window.FREESTYLES = [
  { code: 30001, cat: "jump",  kr: "무릎 지옥", was: { kr: "무릎 차기" }, en: "Knee Hell" },
  { code: 30002, cat: "jump",  kr: "스파이크 슛", en: "Spike Shot" },
  { code: 30003, cat: "jump",  kr: "퀵포인트1", en: "Quick Point 1" },
  { code: 30004, cat: "jump",  kr: "퀵포인트2", en: "Quick Point 2" },
  { code: 30005, cat: "jump",  kr: "비하인드 슛" },
  { code: 30006, cat: "jump",  kr: "360 Screw Shot", en: "360 Screw Shot", isNew: true },   // 한글 이름 확인 중
  { code: 31001, cat: "layup", kr: "360도 레이업" },
  { code: 31002, cat: "layup", kr: "퀵 레이업", en: "Quick Layup" },
  { code: 31003, cat: "layup", kr: "백패스 페이크 레이업" },
  { code: 32001, cat: "layup", kr: "에어포인트" },
  { code: 32002, cat: "layup", kr: "720도 레이업" },
  { code: 32003, cat: "layup", kr: "소프트 터치" },
  { code: 32004, cat: "layup", kr: "투핸드 레이업" },
  { code: 32005, cat: "layup", kr: "트리플 클러치" },
  { code: 32006, cat: "layup", kr: "Under-the-Leg Layup", en: "Under-the-Leg Layup", isNew: true },   // 한글 이름 확인 중
  { code: 33001, cat: "dunk",  kr: "레이업 덩크" },
  { code: 33002, cat: "dunk",  kr: "투핸드 파워슬램" },
  { code: 33003, cat: "dunk",  kr: "원핸드 슬램" },
  { code: 33004, cat: "dunk",  kr: "허니딥" },
  { code: 33005, cat: "dunk",  kr: "수박깨기" },
  { code: 34001, cat: "dunk",  kr: "키스더림" },
  { code: 34002, cat: "dunk",  kr: "메테오잼" },
  { code: 34003, cat: "dunk",  kr: "가위치기" },
  { code: 34004, cat: "dunk",  kr: "함정카드" },
  { code: 34005, cat: "dunk",  kr: "720도 덩크" },
  { code: 34006, cat: "dunk",  kr: "360 Honey Dip", en: "360 Honey Dip", isNew: true }   // 한글 이름 확인 중
];
