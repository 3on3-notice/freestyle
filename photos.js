/* 화면 사진 — mock: true 는 개발 중 화면(숫자는 ??? 로 가림)이라 '임시 사진' 표시가 붙는다. 정식 화면을 받으면 src 를 바꾸고 mock 을 지운다. */
window.PHOTOS = {
  buy: { src: "img/buy.jpg", mock: true,
    label: { kr: "프리스타일 구매", en: "Buy Freestyle" },
    cap: { kr: "원하는 프리스타일을 골라 바로 구매합니다. 구매하면 Lv.1 로 얻습니다.", en: "Pick the Freestyle you want and buy it right away. It starts at Lv.1." } },
  cycle: { src: "img/cycle.jpg", mock: true,
    label: { kr: "프리스타일 사이클", en: "Freestyle Cycle" },
    cap: { kr: "점프슛 · 레이업 · 덩크마다 사이클이 따로 있습니다.", en: "Jump Shot, Layup and Dunk each have their own cycle." } },
  order: { src: "img/order.jpg", mock: true,
    label: { kr: "사이클 순서 정하기", en: "Set Your Order" },
    cap: { kr: "원하는 칸에 원하는 프리스타일을 넣어 순서를 정합니다.", en: "Put the Freestyles you want in the slots you want." } },
  enhance: { src: "img/enhance.jpg", mock: true,
    label: { kr: "프리스타일 강화", en: "Freestyle Enhancement" },
    cap: { kr: "포인트 또는 코인으로 강화합니다. 성공 확률은 이 화면에서 확인할 수 있습니다.", en: "Enhance with Points or Coins. The success rate is shown on this screen." } }
};
