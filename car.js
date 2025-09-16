const carCommands = [
  {
    name: "/acar",
    purpose: "관리자 차량 생성. 사용 후 꼭 /atow를 사용하여 해제하지 않을 것",
    syntax: "/acar"
  },
  {
    name: "/afix",
    purpose: "현재 타고 있는 차량을 수리합니다",
    syntax: "/afix"
  },
  {
    name: "/pveh",
    purpose: "플레이어의 차량을 표시하고 상호 작용할 수 있도록 합니다",
    syntax: "/pveh"
  },
  {
    name: "/fveh",
    purpose: "플레이어가 속한 팩션 차량을 표시합니다",
    syntax: "/fveh"
  },
  {
    name: "/pvehoffline",
    purpose: "오프라인 플레이어용 차량 표시 (캐릭터 ID 필요)",
    syntax: "/pvehoffline [캐릭터ID]"
  },
  {
    name: "/aflip",
    purpose: "차량을 뒤집습니다",
    syntax: "/aflip"
  },
  {
    name: "/atow",
    purpose: "가장 가까운 차량을 해제합니다",
    syntax: "/atow"
  },
  {
    name: "/lastincar",
    purpose: "차량에 들어간 마지막 플레이어들을 표시합니다",
    syntax: "/lastincar"
  },
  {
    name: "/listveh",
    purpose: "서버에 스폰된 선택한 모델의 모든 차량을 표시합니다",
    syntax: "/listveh [모델명]"
  },
  {
    name: "/setfuel",
    purpose: "차량의 연료 레벨을 설정합니다",
    syntax: "/setfuel [수치]"
  },
  {
    name: "/asetdirt",
    purpose: "차량의 더러움을 설정합니다 (1~15)",
    syntax: "/asetdirt [수치]"
  },
  {
    name: "/avmod",
    purpose: "차량을 수정합니다",
    syntax: "/avmod"
  },
  {
    name: "/avpaint",
    purpose: "차량을 페인트합니다",
    syntax: "/avpaint [색상]"
  },
  {
    name: "/getvehicleid",
    purpose: "가장 가까운 차량 ID 조회",
    syntax: "/getvehicleid"
  },
  {
    name: "/devsetmileage",
    purpose: "주행거리 변경",
    syntax: "/devsetmileage [수치]"
  },
  {
    name: "/setmileage",
    purpose: "주행거리 변경",
    syntax: "/setmileage [수치]"
  },
  {
    name: "/resetmaintenance",
    purpose: "차량 유지보수 재설정",
    syntax: "/resetmaintenance"
  },
  {
    name: "/gotoveh",
    purpose: "차량으로 텔레포트",
    syntax: "/gotoveh [차량ID]"
  },
  {
    name: "/setvehicle",
    purpose: "차량의 모델, 번호판, 오너, 유형, 팩션 설정",
    syntax: "/setvehicle [model/plate/owner/type/faction] [변경값]\n[변경값]\nmodel : 차량 모델 변경\nplate : 차량 번호판 변경\nowner : 오너 변경\ntype : 확인안됨\nfaction : /listfactions id 넘버 입력"
  }
];

// 카드 생성
const grid = document.getElementById("command-grid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalPurpose = document.getElementById("modal-purpose");
const modalSyntax = document.getElementById("modal-syntax");
const closeBtn = document.querySelector(".close");

carCommands.forEach(cmd => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<h3>${cmd.name}</h3><p>${cmd.purpose}</p>`;
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = cmd.name;
    modalPurpose.textContent = cmd.purpose;
    modalSyntax.textContent = cmd.syntax;
  });
  grid.appendChild(card);
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if(e.target === modal) modal.style.display = "none";
});

// 검색 기능
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  grid.innerHTML = "";
  carCommands.filter(cmd => cmd.name.toLowerCase().includes(query) || cmd.purpose.toLowerCase().includes(query))
    .forEach(cmd => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<h3>${cmd.name}</h3><p>${cmd.purpose}</p>`;
      card.addEventListener("click", () => {
        modal.style.display = "flex";
        modalTitle.textContent = cmd.name;
        modalPurpose.textContent = cmd.purpose;
        modalSyntax.textContent = cmd.syntax;
      });
      grid.appendChild(card);
    });
});
