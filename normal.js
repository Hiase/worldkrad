document.addEventListener("DOMContentLoaded", () => {
  const commands = [
    { name: "/invisibility", purpose: "유령모드로 변합니다 (재입력시 돌아옴)", syntax: "/invisibility" },
    { name: "/nametag", purpose: "어드민 네임을 가립니다 (재입력시 돌아옴)", syntax: "/nametag" },
    { name: "/cdelete", purpose: "가장 가까운 시체를 삭제합니다.", syntax: "/cdelete" },
    { name: "/areq", purpose: "침입 요청을 수락합니다.", syntax: "/areq" },
    { name: "/appreq", purpose: "침입 요청을 승인하고 문을 열며 경보 타이머를 시작합니다.", syntax: "/appreq" },
    { name: "/trep", purpose: "침입 요청을 삭제합니다.", syntax: "/trep" },
    { name: "/treq", purpose: "침입 요청을 삭제합니다.", syntax: "/treq" },
    { name: "/deletecasings", purpose: "설정된 범위 내의 탄피를 삭제합니다. 20개 이상 하지 마세요.", syntax: "/deletecasings" },
    { name: "/deleteallblood", purpose: "설정된 범위 내의 모든 피 튀김을 삭제합니다. 20개 이상 하지 마세요.", syntax: "/deleteallblood" },
    { name: "/acim", purpose: "관리자 CIM을 설치합니다.", syntax: "/acim" },
    { name: "/ajail", purpose: "플레이어를 일정 시간 동안 감옥에 가두는 명령어입니다. 타이핑 후 Enter를 눌러 사용 방법을 확인하세요.", syntax: "/ajail [ID] [시간(분)] [사유]" },
    { name: "/kick", purpose: "플레이어를 추방합니다. /kick ID 0은 기록 없이, /kick ID 1은 전체 서버에 표시됩니다.", syntax: "/kick [ID] [옵션] [사유]" },
    { name: "/warn", purpose: "플레이어에게 경고를 줍니다.", syntax: "/warn [ID] [사유]" },
    { name: "/takedriverlicense", purpose: "플레이어의 운전 면허를 회수합니다.", syntax: "/takedriverlicense [ID]" },
    { name: "/givedriverlicense", purpose: "플레이어에게 운전 면허를 부여합니다.", syntax: "/givedriverlicense [ID]" },
    { name: "/ban", purpose: "플레이어를 차단합니다.", syntax: "/ban [ID] [사유]" },
    { name: "/permban", purpose: "플레이어를 영구적으로 차단합니다.", syntax: "/permban [ID] [사유]" },
    { name: "/freeze", purpose: "플레이어를 움직이지 못하게 합니다. /unfreeze로 해제할 수 있습니다.", syntax: "/freeze [ID]" },
    { name: "/unfreeze", purpose: "움직이지 못하게 된 플레이어를 다시 움직이게 합니다.", syntax: "/unfreeze [ID]" },
    { name: "/mute", purpose: "플레이어의 채팅을 비활성화합니다.", syntax: "/mute [ID]" },
    { name: "/unmute", purpose: "플레이어의 채팅을 활성화합니다.", syntax: "/unmute [ID]" },
    { name: "/sethealth", purpose: "플레이어의 체력을 설정합니다.", syntax: "/sethealth [ID] [값]" },
    { name: "/setarmour", purpose: "플레이어의 아머를 설정합니다.", syntax: "/setarmour [ID] [값]" },
    { name: "/slay", purpose: "플레이어를 다운된 상태로 만듭니다.", syntax: "/slay [ID]" },
    { name: "/arevive", purpose: "플레이어를 부활시킵니다.", syntax: "/arevive [ID]" },
    { name: "/slap", purpose: "플레이어를 가볍게 타격합니다 (밀어냄 효과).", syntax: "/slap [ID]" },
    { name: "/forceacceptdeath", purpose: "다운된 플레이어가 병원으로 이동되기 전 1분 타이머를 시작합니다.", syntax: "/forceacceptdeath [ID]" },
    { name: "/reports", purpose: "모든 미해결된 신고를 표시합니다.", syntax: "/reports" },
    { name: "/ctot", purpose: "신고를 티켓으로 변경합니다.", syntax: "/ctot [Report ID]" },
    { name: "/aah", purpose: "플레이어의 관리자 노트에 메모를 추가합니다. 처벌은 아니지만 기록에 남습니다.", syntax: "/aah [ID] [내용]" },
    { name: "/gah", purpose: "플레이어의 관리자 노트를 표시합니다.", syntax: "/gah [ID]" },
    { name: "/seeitems", purpose: "플레이어의 인벤토리를 표시합니다. 장착된 아이템은 포함되지 않습니다.", syntax: "/seeitems [ID]" },
    { name: "/sajail", purpose: "조용한 방식으로 플레이어를 감옥에 가둡니다.", syntax: "/sajail [ID] [시간(분)] [사유]" },
    { name: "/settempname", purpose: "플레이어에게 임시 이름을 설정합니다.", syntax: "/settempname [ID] [새 이름]" }
  ];

  const grid = document.getElementById("command-grid");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalPurpose = document.getElementById("modal-purpose");
  const modalSyntax = document.getElementById("modal-syntax");

  commands.forEach(cmd => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h3>${cmd.name}</h3><p>${cmd.purpose}</p>`;
    grid.appendChild(card);

    card.addEventListener("click", () => {
      modalTitle.innerText = cmd.name;
      modalPurpose.innerText = cmd.purpose;
      modalSyntax.innerText = cmd.syntax;
      modal.style.display = "flex";
    });
  });

  modal.querySelector(".close").addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => { if(e.target === modal) modal.style.display = "none"; });

  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    grid.querySelectorAll(".card").forEach(card => {
      const name = card.querySelector("h3").innerText.toLowerCase();
      const purpose = card.querySelector("p").innerText.toLowerCase();
      card.style.display = (name.includes(query) || purpose.includes(query)) ? "block" : "none";
    });
  });
});
