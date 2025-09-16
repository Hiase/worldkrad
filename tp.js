const tpCommands = [
  {
    name: "/gtp",
    purpose: "지도 표시로 이동합니다.",
    syntax: "/gtp"
  },
  {
    name: "/tp",
    purpose: "플레이어에게 이동합니다.",
    syntax: "/tp [플레이어ID]"
  },
  {
    name: "/tpcoord",
    purpose: "지정된 좌표로 이동합니다.",
    syntax: "/tpcoord [x] [y] [z]"
  },
  {
    name: "/gethere /tphere",
    purpose: "플레이어를 자신의 위치로 이동시킵니다.",
    syntax: "/gethere [플레이어ID] | /tphere [플레이어ID]"
  },
  {
    name: "/tpto",
    purpose: "플레이어를 다른 플레이어에게 이동시킵니다.",
    syntax: "/tpto [대상ID] [목표ID]"
  },
  {
    name: "/tpgarbage",
    purpose: "쓰레기 처리장으로 이동합니다.",
    syntax: "/tpgarbage"
  },
  {
    name: "/tplocs",
    purpose: "특정 위치로 이동합니다. Enter를 눌러 위치 이름 확인 가능.",
    syntax: "/tplocs"
  },
  {
    name: "/goto2",
    purpose: "다양한 장소의 이동 메뉴를 엽니다.",
    syntax: "/goto2"
  },
  {
    name: "/gotoweed / gotosafe",
    purpose: "대마 식물 ID 또는 안전한 식물 ID로 이동합니다.",
    syntax: "/gotoweed [ID] | /gotosafe [ID]"
  },
  {
    name: "/tpprop",
    purpose: "소유지로 이동합니다.",
    syntax: "/tpprop [부동산ID]"
  },
  {
    name: "/ptp",
    purpose: "특정 소유지 ID로 이동합니다.",
    syntax: "/ptp [부동산ID]"
  },
  {
    name: "/move",
    purpose: "캐릭터를 위, 아래, 왼쪽, 오른쪽, 앞으로, 뒤로 이동시킬 수 있습니다.",
    syntax: "/move [up/down/left/right/forward/back(위/아래/좌/우/앞/뒤)]"
  }
];

const tpGrid = document.getElementById("command-grid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalPurpose = document.getElementById("modal-purpose");
const modalSyntax = document.getElementById("modal-syntax");
const closeBtn = document.querySelector(".close");

// 카드 생성
tpCommands.forEach(cmd => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<h3>${cmd.name}</h3><p>${cmd.purpose}</p>`;
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = cmd.name;
    modalPurpose.textContent = cmd.purpose;
    modalSyntax.textContent = cmd.syntax;
  });
  tpGrid.appendChild(card);
});

// 모달 닫기
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if(e.target === modal) modal.style.display = "none"; });

// 검색 기능
document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  tpGrid.querySelectorAll(".card").forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});
