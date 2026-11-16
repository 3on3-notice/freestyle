/* 프리스타일 가이드 문구 — 단원(chapters) 순서가 화면 순서다. 블록 형식은 펫 가이드와 같다(keys · compare · steps · facts · alert · deadline · dex …).
   출처: 기획서 「프리스타일 시스템 개편」·기본 시스템 개발 문서(11/13)·기획팀 답변(11/13)·소개 영상 v17 문구·배너 v7.
   숫자(가격·확률·칸 수·능력치)는 아직 확정되지 않아 쓰지 않는다. JP 는 문구 확정 후 추가. */
window.NOTICE = {
  updated: "2026-11-16",
  kr: {
    site: "프리스타일 가이드", ribbon: "2026/11/18 업데이트", title: "프리스타일 시스템 개편",
    lead: "원하는 프리스타일을 바로 사고, 원하는 순서로 장착하세요. 바뀐 모션은 영상으로 비교해 볼 수 있습니다.",
    ended: "종료",
    ui: {
      search: "프리스타일 이름 검색", all: "전체", unit: "종",
      cat: { jump: "점프슛", layup: "레이업", dunk: "덩크" },
      before: "변경 전", after: "변경 후", isNew: "신규", newOnly: "새로 추가된 프리스타일이라 변경 전 영상이 없습니다.",
      was: "이전 이름", replay: "처음부터 같이 보기", slow: "느리게", normal: "보통 속도",
      videoNote: "연습장에서 촬영한 미리보기 영상으로, 실제 경기 화면과 다를 수 있습니다.",
      prev: "이전", next: "다음", close: "닫기", none: "없음", photo: "사진 준비 중", mock: "개발 중 화면",
      noResult: "찾는 프리스타일이 없습니다.", dialog: "프리스타일 영상 비교", tabs: "단원 메뉴", compareHint: "누르면 변경 전 · 후 영상"
    },
    chapters: [
      { id: "overview", nav: "바뀌는 점", title: "프리스타일이 이렇게 바뀌어요", q: "팩 · 조각 · 티켓 없이 원하는 프리스타일을 바로 사고, 점프슛 · 레이업 · 덩크마다 원하는 순서로 장착합니다.",
        blocks: [
          { type: "keys", items: [
            ["바로 구매", "원하는 프리스타일을 골라 코인으로 구매, Lv.1 로 획득"],
            ["프리스타일 사이클", "점프슛 · 레이업 · 덩크마다 따로, 원하는 칸 · 순서로 장착"],
            ["Lv.5 까지 강화", "포인트 또는 코인으로 강화, 실패해도 레벨 유지"],
            ["신규 프리스타일 3종", "360 Screw Shot · Under-the-Leg Layup · 360 Honey Dip"] ] },
          { type: "compare", eyebrow: "AT A GLANCE", label: "기존 vs 변경 한눈에 보기", head: ["구분", "기존", "변경"], rows: [
            ["얻는 방법", "실버 · 골드 · 플래티넘 팩 → 조각 → 합성", "원하는 프리스타일을 골라 코인으로 바로 구매", "up"],
            ["강화", "조각 합성", "포인트 또는 코인으로 Lv.5 까지, 화면에서 성공 확률 확인", "up"],
            ["강화 실패", "–", "레벨 유지, 사용한 재화만 소모"],
            ["장착", "정해진 순서대로 모션별 사용 횟수만큼", "점프슛 · 레이업 · 덩크 사이클에 원하는 칸 · 순서로 배치", "up"],
            ["레이업 · 덩크 구분", "근거리 · 원거리 따로", "레이업 하나, 덩크 하나로 통합"],
            ["경기 중 확인", "–", "슛 직후 다음 프리스타일(NEXT) 표시", "up"] ] } ] },

      { id: "buy", nav: "구매", title: "프리스타일은 어떻게 얻나요?", q: "팩을 열어 조각을 모을 필요 없이, 원하는 프리스타일을 골라 바로 구매합니다.",
        blocks: [
          { type: "facts", photo: "buy", items: [
            ["구매 재화", "코인"],
            ["얻는 레벨", "Lv.1 — 이후 강화로 Lv.5 까지 올릴 수 있습니다."],
            ["없어지는 것", "프리스타일 팩 · 조각 · 티켓"] ] } ] },

      { id: "cycle", nav: "사이클", title: "사이클은 어떻게 쓰나요?", q: "점프슛 · 레이업 · 덩크마다 사이클이 하나씩 있고, 칸에 넣은 순서대로 경기에서 나갑니다.",
        blocks: [
          { type: "facts", photo: "cycle", label: "사이클 3개", items: [
            ["점프슛 사이클", "점프슛 프리스타일만 넣을 수 있습니다."],
            ["레이업 사이클", "레이업 프리스타일만 넣을 수 있습니다."],
            ["덩크 사이클", "덩크 프리스타일만 넣을 수 있습니다."],
            ["빈 칸", "기본 모션이 나갑니다."] ] },
          { type: "facts", photo: "order", label: "순서 정하기", items: [
            ["배치", "원하는 칸에 원하는 프리스타일을 넣어 순서를 정합니다."],
            ["레벨이 높을수록", "한 프리스타일을 더 많은 칸에 넣을 수 있습니다."] ] },
          { type: "facts", label: "경기에서 나가는 규칙", items: [
            ["순서", "사이클의 칸 순서대로 나갑니다."],
            ["페이크", "페이크를 하면 다음 칸으로 넘어갑니다."],
            ["소모", "실제로 슛을 해야 그 칸이 사용됩니다. 스킬 슛은 칸을 쓰지 않습니다."],
            ["한 바퀴 뒤", "마지막 칸까지 쓰면 기본 모션이 나갑니다(처음부터 반복하지 않음)."],
            ["NEXT 표시", "슛 직후 다음에 나갈 프리스타일이 화면에 표시됩니다."] ] } ] },

      { id: "enhance", nav: "강화", title: "강화는 어떻게 하나요?", q: "포인트 또는 코인으로 Lv.5 까지 강화합니다. 레벨이 높을수록 능력치가 오르고 더 많은 칸에 넣을 수 있습니다.",
        blocks: [
          { type: "facts", photo: "enhance", items: [
            ["강화 재화", "포인트 또는 코인 — 재화별 성공 확률은 강화 화면에 표시됩니다."],
            ["성공하면", "레벨이 오르고 능력치가 정해진 만큼 오릅니다(무작위 아님)."],
            ["실패하면", "레벨은 그대로이고 사용한 재화만 소모됩니다."],
            ["강화 티켓", "포인트 강화 1회를 대신하는 티켓입니다. 지급 방식은 추후 안내됩니다."] ] },
          { type: "deadline", label: "개편 기념 포인트 강화 확률 UP", deadline: "2026-11-25T16:59:00+09:00",
            text: "기간 동안 포인트 강화 성공 확률이 올라갑니다.", v: "11/18 – 11/25 16:59 KST" } ] },

      { id: "dex", nav: "프리스타일 영상", title: "모션이 어떻게 바뀌었나요?", q: "프리스타일을 누르면 변경 전과 변경 후 영상을 나란히 볼 수 있습니다.",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "기존 보유자", title: "가지고 있던 프리스타일은 어떻게 되나요?", q: "개편 전에 가지고 있던 프리스타일과 아이템이 어떻게 바뀌는지 안내합니다.",
        blocks: [
          { type: "alert", text: "<b>가지고 있던 프리스타일은 레벨 그대로 새 시스템으로 옮겨집니다.</b>" },
          { type: "facts", items: [
            ["Lv.1 – 2", "개편 전보다 조금 약해집니다."],
            ["Lv.3 이상", "개편 전보다 강해집니다."],
            ["남은 조각 · 재료", "인벤토리에서 코인으로 판매할 수 있습니다."],
            ["열지 않은 팩", "인벤토리에서 열 수 있고, 나온 조각은 코인으로 판매할 수 있습니다."] ],
            note: "레벨별 능력치는 확정되면 이 칸에 추가합니다." } ] }
    ]
  },
  en: {
    site: "Freestyle Guide", ribbon: "Updated Nov. 18th, 2026", title: "Freestyle System Renewal",
    lead: "Buy the Freestyle you want and set it in the order you want. Compare the updated motions side by side.",
    ended: "Ended",
    ui: {
      search: "Search Freestyles", all: "All", unit: "",
      cat: { jump: "Jump Shot", layup: "Layup", dunk: "Dunk" },
      before: "Before", after: "After", isNew: "New", newOnly: "This is a new Freestyle, so there is no 'before' video.",
      was: "Previous name", replay: "Replay together", slow: "Slow", normal: "Normal speed",
      videoNote: "Preview footage recorded in the practice court. It may differ from actual matches.",
      prev: "Previous", next: "Next", close: "Close", none: "None", photo: "Image coming soon", mock: "In development",
      noResult: "No Freestyles found.", dialog: "Freestyle video comparison", tabs: "Sections", compareHint: "Tap for before / after"
    },
    chapters: [
      { id: "overview", nav: "What's New", title: "Here's How Freestyle Is Changing", q: "No more packs, pieces or tickets. Buy the Freestyle you want and set your own order for Jump Shot, Layup and Dunk.",
        blocks: [
          { type: "keys", items: [
            ["Buy Directly", "Pick a Freestyle and get it at Lv.1 with Coins"],
            ["Freestyle Cycle", "A separate cycle for Jump Shot, Layup and Dunk"],
            ["Level Up to Lv.5", "Enhance with Points or Coins — your level stays if it fails"],
            ["3 New Freestyles", "360 Screw Shot · Under-the-Leg Layup · 360 Honey Dip"] ] },
          { type: "compare", eyebrow: "AT A GLANCE", label: "Before vs After", head: ["", "Before", "After"], rows: [
            ["How to get", "Silver · Gold · Platinum Packs → Pieces → Combine", "Pick a Freestyle and buy it with Coins", "up"],
            ["Enhancement", "Combine Pieces", "Points or Coins up to Lv.5, success rate shown on screen", "up"],
            ["Failed enhancement", "–", "Level stays, only the currency is used"],
            ["Equipping", "Fixed order, by use count", "Place them in any slot and order in each cycle", "up"],
            ["Layup / Dunk types", "Close and Long Range split", "One Layup cycle, one Dunk cycle"],
            ["In-match", "–", "Your NEXT Freestyle is shown right after each shot", "up"] ] } ] },

      { id: "buy", nav: "Buy", title: "How do I get Freestyles?", q: "No need to open packs and collect pieces. Just pick the Freestyle you want.",
        blocks: [
          { type: "facts", photo: "buy", items: [
            ["Currency", "Coins"],
            ["Starting level", "Lv.1 — enhance it up to Lv.5."],
            ["Removed", "Freestyle Packs · Pieces · Tickets"] ] } ] },

      { id: "cycle", nav: "Cycle", title: "How does the Cycle work?", q: "Jump Shot, Layup and Dunk each have a cycle, and Freestyles come out in the order of the slots.",
        blocks: [
          { type: "facts", photo: "cycle", label: "3 Cycles", items: [
            ["Jump Shot Cycle", "Jump Shot Freestyles only."],
            ["Layup Cycle", "Layup Freestyles only."],
            ["Dunk Cycle", "Dunk Freestyles only."],
            ["Empty slot", "Your default motion is used."] ] },
          { type: "facts", photo: "order", label: "Set Your Order", items: [
            ["Placement", "Put the Freestyles you want in the slots you want."],
            ["Higher level", "A Freestyle can be placed in more slots."] ] },
          { type: "facts", label: "In-match rules", items: [
            ["Order", "Freestyles come out in slot order."],
            ["Fake", "A fake moves you on to the next slot."],
            ["Use", "A slot is only used when you actually shoot. Skill shots don't use slots."],
            ["After one round", "Once the last slot is used, your default motion is used (the cycle doesn't repeat)."],
            ["NEXT", "Your next Freestyle is shown right after each shot."] ] } ] },

      { id: "enhance", nav: "Enhance", title: "How does Enhancement work?", q: "Enhance up to Lv.5 with Points or Coins. Higher levels give better stats and more cycle slots.",
        blocks: [
          { type: "facts", photo: "enhance", items: [
            ["Currency", "Points or Coins — the success rate for each is shown on the Enhancement screen."],
            ["Success", "Level up with fixed stat gains, not random."],
            ["Failure", "Your level stays; only the currency is used."],
            ["Enhancement Ticket", "Replaces one Point enhancement. Details on how it is given will be announced."] ] },
          { type: "deadline", label: "Renewal Celebration: Point Enhancement Rate UP", deadline: "2026-11-25T16:59:00+09:00",
            text: "The success rate of Point enhancement is increased during the event.", v: "Nov. 18th – Nov. 25th 16:59 KST" } ] },

      { id: "dex", nav: "Freestyle Videos", title: "How have the motions changed?", q: "Select a Freestyle to watch the before and after videos side by side.",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "Current Owners", title: "What happens to my Freestyles?", q: "How the Freestyles and items you had before the Renewal will change.",
        blocks: [
          { type: "alert", text: "<b>Your Freestyles move to the new system at the same level.</b>" },
          { type: "facts", items: [
            ["Lv.1 – 2", "A little weaker than before."],
            ["Lv.3+", "Stronger than before."],
            ["Leftover Pieces · materials", "Sell them for Coins in your Inventory."],
            ["Unopened Packs", "Open them in your Inventory and sell the pieces for Coins."] ],
            note: "Stats by level will be added here once confirmed." } ] }
    ]
  }
};
