/* 프리스타일 가이드 문구 — 단원(chapters) 순서가 화면 순서다. 블록 형식은 펫 가이드와 같다(keys · compare · steps · facts · alert · deadline · dex …).
   출처: 기획서 「프리스타일 시스템 개편」 문서 모음(개발 문서 11/17·BM 밸런스 11/17·인게임 밸런스 11/17)·기획팀 답변(11/13)·사용자 확정(11/18: 강화 비용·확률 통일·구매가 통일·티켓 지급 수량)·점검 공지 v12 명칭.
   2026-11-18 최신화: 페이크 규칙 정정, 신규 3종 한글 이름, 강화 비용·확률, 티켓 지급 기준. 구매 금액·레벨별 능력치·사이클 칸 수는 아직 쓰지 않는다. JP 추가(2026-11-17) — 용어는 펫 가이드·게임 텍스트(LOC_JPN)를 따름, 신규 3종 이름은 임시 표기. */
window.NOTICE = {
  updated: "2026-11-18",
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
            ["신규 프리스타일 3종", "360도 스크류 슛 · 언더레그 레이업 · 360도 허니딥"] ] },
          { type: "compare", eyebrow: "AT A GLANCE", label: "기존 vs 변경 한눈에 보기", head: ["구분", "기존", "변경"], rows: [
            ["얻는 방법", "실버 · 골드 · 플래티넘 팩 → 조각 → 합성", "원하는 프리스타일을 골라 코인으로 바로 구매", "up"],
            ["강화", "조각 합성", "포인트 또는 코인으로 Lv.5 까지, 화면에서 성공 확률 확인", "up"],
            ["강화 실패", "–", "레벨 유지, 사용한 재화만 소모"],
            ["장착", "정해진 순서대로 모션별 사용 횟수만큼", "점프슛 · 레이업 · 덩크 사이클에 원하는 칸 · 순서로 배치", "up"],
            ["레이업 · 덩크 구분", "근거리 · 원거리 따로", "레이업 하나, 덩크 하나로 통합"],
            ["페이크", "다음 모션으로 넘어감", "넘어가지 않음 — 실제로 슛해야 칸 사용"],
            ["경기 중 확인", "–", "슛 직후 방금 쓴 모션(NOW) · 다음 모션(NEXT) 표시", "up"] ] } ] },

      { id: "buy", nav: "구매", title: "프리스타일은 어떻게 얻나요?", q: "팩을 열어 조각을 모을 필요 없이, 원하는 프리스타일을 골라 바로 구매합니다.",
        blocks: [
          { type: "facts", photo: "buy", items: [
            ["구매 재화", "코인 — 모든 프리스타일이 같은 가격입니다."],
            ["얻는 레벨", "Lv.1 — 이후 강화로 Lv.5 까지 올릴 수 있습니다."],
            ["구매 단위", "캐릭터마다 따로 구매합니다. 지금 선택한 캐릭터가 받습니다."],
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
            ["레벨이 높을수록", "한 프리스타일을 더 많은 칸에 넣을 수 있습니다(최대 3칸). 넣을 수 있는 칸 수는 레벨마다 정해져 있고, 모든 프리스타일이 같습니다."] ] },
          { type: "facts", label: "프리스타일 모션 적용 규칙", items: [
            ["순서", "사이클의 칸 순서대로 나갑니다."],
            ["페이크", "페이크로는 다음 칸으로 넘어가지 않습니다."],
            ["소모", "실제로 슛을 해야 그 칸이 사용됩니다. 슛 도중 패스 · 더블 클러치도 사용으로 칩니다. 스킬 슛은 칸을 쓰지 않습니다."],
            ["한 바퀴 뒤", "마지막 칸까지 쓰면 기본 모션이 나갑니다(처음부터 반복하지 않음). 로비 연습에서는 처음부터 계속 반복됩니다."],
            ["NOW · NEXT 표시", "슛 직후 방금 쓴 모션(NOW)과 다음에 나갈 모션(NEXT)이 화면에 표시됩니다."] ] } ] },

      { id: "enhance", nav: "강화", title: "강화는 어떻게 하나요?", q: "포인트 또는 코인으로 Lv.5 까지 강화합니다. 레벨이 높을수록 능력치가 오르고 더 많은 칸에 넣을 수 있습니다.",
        blocks: [
          { type: "facts", photo: "enhance", items: [
            ["강화 재화", "포인트 또는 코인 — 1회에 6포인트 또는 20,000코인입니다."],
            ["성공 확률", "모든 프리스타일이 같습니다. 포인트 강화는 Lv.2 30% · Lv.3 20% · Lv.4 10% · Lv.5 5%이고, 코인 강화는 이보다 낮습니다. 강화 화면에서 확인할 수 있습니다."],
            ["성공하면", "레벨이 오르고 능력치가 정해진 만큼 오릅니다(무작위 아님)."],
            ["실패하면", "레벨은 그대로이고 사용한 재화만 소모됩니다."],
            ["강화 티켓", "포인트 강화 1회를 대신하는 티켓이며, 성공 확률도 포인트 강화와 같습니다. 개편 전에 프리스타일을 가지고 있던 분께 지급됩니다(기존 보유자 참고)."] ] } ] },

      { id: "dex", nav: "프리스타일 영상", title: "모션이 어떻게 바뀌었나요?", q: "프리스타일을 누르면 변경 전과 변경 후 영상을 나란히 볼 수 있습니다.",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "기존 보유자", title: "가지고 있던 프리스타일은 어떻게 되나요?", q: "개편 전에 가지고 있던 프리스타일과 아이템이 어떻게 바뀌는지 안내합니다.",
        blocks: [
          { type: "alert", text: "<b>가지고 있던 프리스타일은 레벨 그대로 새 시스템으로 옮겨집니다.</b>" },
          { type: "facts", items: [
            ["강화 티켓 지급", "가지고 있던 프리스타일 1개(캐릭터별)마다 레벨에 따라 지급됩니다: Lv.2 4장 · Lv.3 12장 · Lv.4 30장 · Lv.5 60장 (Lv.1 은 없음)."],
            ["칸 수 · 능력치", "모든 프리스타일이 레벨별로 같은 칸 수를 쓰고, 레벨이 높을수록 능력치가 높습니다."],
            ["남은 조각 · 재료", "인벤토리에서 코인으로 판매할 수 있습니다."],
            ["열지 않은 팩", "인벤토리에서 열 수 있고, 나온 조각은 코인으로 판매할 수 있습니다."],
            ["커리어 모드 보상", "FS 골드 팩이 보상에서 빠집니다. 이미 받은 팩은 그대로 남습니다."] ],
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
            ["Shot fakes", "Move on to the next motion", "Don't use a slot — only shots you take do"],
            ["In-match", "–", "NOW (just used) and NEXT shown right after each shot", "up"] ] } ] },

      { id: "buy", nav: "Buy", title: "How do I get Freestyles?", q: "No need to open packs and collect pieces. Just pick the Freestyle you want.",
        blocks: [
          { type: "facts", photo: "buy", items: [
            ["Currency", "Coins — every Freestyle costs the same."],
            ["Starting level", "Lv.1 — enhance it up to Lv.5."],
            ["Per character", "Bought separately for each character. The character you have selected gets it."],
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
          { type: "facts", label: "Freestyle Motion Rules", items: [
            ["Order", "Freestyles come out in slot order."],
            ["Shot fakes", "Shot fakes don't use a slot."],
            ["Use", "A slot is only used when you actually shoot. Skill shots don't use slots."],
            ["After one round", "Once the last slot is used, your default motion is used (the cycle doesn't repeat)."],
            ["NOW · NEXT", "Right after each shot, the motion you just used (NOW) and the next one (NEXT) are shown."] ] } ] },

      { id: "enhance", nav: "Enhance", title: "How does Enhancement work?", q: "Enhance up to Lv.5 with Points or Coins. Higher levels give better stats and more cycle slots.",
        blocks: [
          { type: "facts", photo: "enhance", items: [
            ["Currency", "Points or Coins — 6 Points or 20,000 Coins per try."],
            ["Success rate", "Same for every Freestyle. Point enhancement: Lv.2 30% · Lv.3 20% · Lv.4 10% · Lv.5 5%. Coin enhancement is lower. Check it on the Enhancement screen."],
            ["Success", "Level up with fixed stat gains, not random."],
            ["Failure", "Your level stays; only the currency is used."],
            ["Enhancement Ticket", "Replaces one Point enhancement, with the same success rate. Given to players who owned Freestyles before the Renewal (see Current Owners)."] ] } ] },

      { id: "dex", nav: "Freestyle Videos", title: "How have the motions changed?", q: "Select a Freestyle to watch the before and after videos side by side.",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "Current Owners", title: "What happens to my Freestyles?", q: "How the Freestyles and items you had before the Renewal will change.",
        blocks: [
          { type: "alert", text: "<b>Your Freestyles move to the new system at the same level.</b>" },
          { type: "facts", items: [
            ["Enhancement Tickets", "For each Freestyle you owned (per character), by level: Lv.2 4 · Lv.3 12 · Lv.4 30 · Lv.5 60 (none for Lv.1)."],
            ["Slots · stats", "Every Freestyle uses the same number of slots per level, and higher levels give better stats."],
            ["Leftover Pieces · materials", "Sell them for Coins in your Inventory."],
            ["Unopened Packs", "Open them in your Inventory and sell the pieces for Coins."],
            ["Career Mode rewards", "FS Gold Packs are removed from the rewards. Packs you already received stay."] ],
            note: "Stats by level will be added here once confirmed." } ] }
    ]
  },
  jp: {
    site: "フリースタイルガイド", ribbon: "2026/11/18 アップデート", title: "フリースタイルシステムリニューアル",
    lead: "欲しいフリースタイルをすぐに購入し、好きな順番で装着しましょう。変わったモーションは動画で見比べられます。",
    ended: "終了",
    ui: {
      search: "フリースタイル名で検索", all: "すべて", unit: "種",
      cat: { jump: "ジャンプシュート", layup: "レイアップ", dunk: "ダンク" },
      before: "変更前", after: "変更後", isNew: "新規", newOnly: "新しく追加されたフリースタイルのため、変更前の動画はありません。",
      was: "以前の名前", replay: "最初から一緒に見る", slow: "スロー", normal: "通常速度",
      videoNote: "練習場で撮影したプレビュー動画のため、実際の試合画面とは異なる場合があります。",
      prev: "前へ", next: "次へ", close: "閉じる", none: "なし", photo: "画像準備中", mock: "開発中の画面",
      noResult: "該当するフリースタイルがありません。", dialog: "フリースタイル動画比較", tabs: "目次", compareHint: "タップで変更前・後の動画"
    },
    chapters: [
      { id: "overview", nav: "変更点", title: "フリースタイルはこう変わります", q: "パック・ピース・チケットなしで欲しいフリースタイルをすぐに購入し、ジャンプシュート・レイアップ・ダンクごとに好きな順番で装着します。",
        blocks: [
          { type: "keys", items: [
            ["すぐに購入", "欲しいフリースタイルを選んでコインで購入、Lv.1 で獲得"],
            ["フリースタイルサイクル", "ジャンプシュート・レイアップ・ダンクごとに、好きな枠・順番で装着"],
            ["Lv.5 まで強化", "ポイントまたはコインで強化、失敗してもレベルはそのまま"],
            ["新規フリースタイル3種", "360スクリューショット・アンダーザレッグレイアップ・360ハニーディップ"] ] },
          { type: "compare", eyebrow: "AT A GLANCE", label: "変更前・変更後", head: ["", "変更前", "変更後"], rows: [
            ["入手方法", "シルバー・ゴールド・プラチナパック → ピース → 合成", "欲しいフリースタイルを選んでコインで購入", "up"],
            ["強化", "ピース合成", "ポイントまたはコインで Lv.5 まで、成功確率は画面で確認", "up"],
            ["強化失敗", "–", "レベルはそのまま、使った通貨のみ消費"],
            ["装着", "使用回数による固定順", "サイクルごとに好きな枠・順番に配置", "up"],
            ["レイアップ・ダンクの区分", "ショート・ロングに分かれる", "レイアップ・ダンクそれぞれ1つのサイクル"],
            ["フェイク", "次のモーションに進む", "進まない — 実際にシュートした時だけ枠を使用"],
            ["試合中", "–", "シュートの直後に今（NOW）・次（NEXT）のモーションを表示", "up"] ] } ] },

      { id: "buy", nav: "購入", title: "フリースタイルはどうやって手に入れますか？", q: "パックを開けてピースを集める必要はありません。欲しいフリースタイルを選ぶだけです。",
        blocks: [
          { type: "facts", photo: "buy", items: [
            ["通貨", "コイン"],
            ["最初のレベル", "Lv.1 — Lv.5 まで強化できます。"],
            ["廃止", "フリースタイルパック・ピース・チケット"] ] } ] },

      { id: "cycle", nav: "サイクル", title: "サイクルはどう動きますか？", q: "ジャンプシュート・レイアップ・ダンクごとにサイクルがあり、枠の順番どおりにフリースタイルが出ます。",
        blocks: [
          { type: "facts", photo: "cycle", label: "3つのサイクル", items: [
            ["ジャンプシュートサイクル", "ジャンプシュートのフリースタイルのみ装着できます。"],
            ["レイアップサイクル", "レイアップのフリースタイルのみ装着できます。"],
            ["ダンクサイクル", "ダンクのフリースタイルのみ装着できます。"],
            ["空いている枠", "基本モーションが出ます。"] ] },
          { type: "facts", photo: "order", label: "順番を決める", items: [
            ["配置", "好きな枠に好きなフリースタイルを入れます。"],
            ["レベルが高いほど", "1つのフリースタイルをより多くの枠に配置できます（最大3枠）。配置できる枠の数はレベルごとに決まっており、すべてのフリースタイルで同じです。"] ] },
          { type: "facts", label: "フリースタイルモーション適用ルール", items: [
            ["順番", "枠の順番どおりにフリースタイルが出ます。"],
            ["フェイク", "フェイクでは次の枠に進みません。"],
            ["使用", "実際にシュートしたときだけ枠を使います。スキルシュートでは使いません。"],
            ["1周したら", "最後の枠を使った後は基本モーションが出ます（サイクルは繰り返しません）。"],
            ["NOW · NEXT", "シュートの直後に、今使ったモーション（NOW）と次のモーション（NEXT）が表示されます。"] ] } ] },

      { id: "enhance", nav: "強化", title: "強化はどう行いますか？", q: "ポイントまたはコインで Lv.5 まで強化します。レベルが上がるほど能力値が上がり、装着できる枠も増えます。",
        blocks: [
          { type: "facts", photo: "enhance", items: [
            ["強化通貨", "ポイントまたはコイン — 1回 6ポイント または 20,000コインです。"],
            ["成功確率", "すべてのフリースタイルで同じです。ポイント強化は Lv.2 30%・Lv.3 20%・Lv.4 10%・Lv.5 5%で、コイン強化はこれより低くなります。強化画面で確認できます。"],
            ["成功すると", "レベルが上がり、能力値が決まった分だけ上がります（ランダムではありません）。"],
            ["失敗すると", "レベルはそのままで、使った通貨のみ消費されます。"],
            ["強化チケット", "ポイント強化1回の代わりになるチケットで、成功確率もポイント強化と同じです。リニューアル前にフリースタイルをお持ちだった方に配布されます（既存の所持者を参照）。"] ] } ] },

      { id: "dex", nav: "フリースタイル動画", title: "モーションはどう変わりましたか？", q: "フリースタイルを選ぶと、変更前と変更後の動画を並べて見られます。",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "既存の所持者", title: "持っていたフリースタイルはどうなりますか？", q: "リニューアル前に持っていたフリースタイルとアイテムがどう変わるかをご案内します。",
        blocks: [
          { type: "alert", text: "<b>持っていたフリースタイルは、レベルそのままで新システムに移行されます。</b>" },
          { type: "facts", items: [
            ["強化チケットの配布", "お持ちだったフリースタイル1つ（キャラクターごと）につき、レベルに応じて配布: Lv.2 4枚・Lv.3 12枚・Lv.4 30枚・Lv.5 60枚（Lv.1 はなし）。"],
            ["枠の数・能力値", "すべてのフリースタイルがレベルごとに同じ枠の数を使い、レベルが高いほど能力値が上がります。"],
            ["残ったピース・素材", "インベントリでコインに売却できます。"],
            ["未開封のパック", "インベントリで開封し、ピースをコインに売却できます。"],
            ["キャリアモード報酬", "FSゴールドパックが報酬から外れます。すでに受け取ったパックはそのまま残ります。"] ],
            note: "レベル別の能力値は確定次第ここに追加します。" } ] }
    ]
  }
};
