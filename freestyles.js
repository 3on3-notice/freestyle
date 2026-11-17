/* 프리스타일 도감 — 카드 하나 = 모션 하나. 누르면 변경 전·후 영상을 나란히 보여 준다.
   code: 스킬 코드(영상 파일 이름과 같음) / cat: jump 점프슛 · layup 레이업 · dunk 덩크 (개편 후 사이클 3개 기준)
   was: 개편 전 이름(이름이 바뀐 경우) / isNew: 개편 때 새로 나온 모션(변경 전 영상 없음)
   영상: video/before/<code>.mp4 (기존 영상) · video/after/<code>.mp4 (새 영상), 썸네일: img/thumb/<code>.jpg
   이름 = 게임 텍스트(조각 아이템 이름에서 '조각'을 뺀 것, 2026-11-17 확인). 신규 3종은 게임 텍스트에 아직 없어 영문은 영상 문구, 일본어는 임시 표기(확인되면 교체). */
window.FREESTYLES = [
  { code: 30001, cat: "jump",  kr: "무릎 지옥", was: { kr: "무릎 차기" }, en: "Knee Hell", jp: "膝地獄" },
  { code: 30002, cat: "jump",  kr: "스파이크 슛", en: "Spike Shot", jp: "スパイクシュート" },
  { code: 30003, cat: "jump",  kr: "퀵포인트1", en: "Quick Point1", jp: "クイックポイント1" },
  { code: 30004, cat: "jump",  kr: "퀵포인트2", en: "Quick Point2", jp: "クイックポイント2" },
  { code: 30005, cat: "jump",  kr: "비하인드 슛", en: "Behind Shot", jp: "ビハインドシュート" },
  { code: 30006, cat: "jump",  kr: "360 Screw Shot", en: "360 Screw Shot", jp: "360スクリューショット", isNew: true },   // 한글·일본어 이름 확인 중
  { code: 31001, cat: "layup", kr: "360도 레이업", en: "360 Layup", jp: "360度レイアップ" },
  { code: 31002, cat: "layup", kr: "퀵 레이업", en: "Quick Layup", jp: "クイックレイアップ" },
  { code: 31003, cat: "layup", kr: "백패스 페이크 레이업", en: "Fake Back Pass Layup", jp: "バックパスフェイクレイアップ" },
  { code: 32001, cat: "layup", kr: "에어포인트", en: "Airpoint", jp: "エアポイント" },
  { code: 32002, cat: "layup", kr: "720도 레이업", en: "720 Layup", jp: "720度レイアップ" },
  { code: 32003, cat: "layup", kr: "소프트 터치", en: "Soft Touch", jp: "ソフトタッチ" },
  { code: 32004, cat: "layup", kr: "투핸드 레이업", en: "Two-Handed Layup", jp: "ツーハンドレイアップ" },
  { code: 32005, cat: "layup", kr: "트리플 클러치", en: "Triple Clutch", jp: "トリプルクラッチ" },
  { code: 32006, cat: "layup", kr: "Under-the-Leg Layup", en: "Under-the-Leg Layup", jp: "アンダーザレッグレイアップ", isNew: true },   // 한글·일본어 이름 확인 중
  { code: 33001, cat: "dunk",  kr: "레이업 덩크", en: "Layup Dunk", jp: "レイアップダンク" },
  { code: 33002, cat: "dunk",  kr: "투핸드 파워슬램", en: "Two-Handed Power Slam", jp: "ツーハンドパワースラム" },
  { code: 33003, cat: "dunk",  kr: "원핸드 슬램", en: "One-Handed Slam", jp: "ワンハンドスラム" },
  { code: 33004, cat: "dunk",  kr: "허니딥", en: "Honey Dip", jp: "ハニーディップ" },
  { code: 33005, cat: "dunk",  kr: "수박깨기", en: "Melon Smasher", jp: "メロン割り" },
  { code: 34001, cat: "dunk",  kr: "키스더림", en: "Kiss the Rim", jp: "キスドリム" },
  { code: 34002, cat: "dunk",  kr: "메테오잼", en: "Meteor Jam", jp: "メテオジャム" },
  { code: 34003, cat: "dunk",  kr: "가위치기", en: "Scissors Throw", jp: "ハサミ打ち" },
  { code: 34004, cat: "dunk",  kr: "함정카드", en: "Trap Card", jp: "罠カード" },
  { code: 34005, cat: "dunk",  kr: "720도 덩크", en: "720 Dunk", jp: "720度ダンク" },
  { code: 34006, cat: "dunk",  kr: "360 Honey Dip", en: "360 Honey Dip", jp: "360ハニーディップ", isNew: true }   // 한글·일본어 이름 확인 중
];
