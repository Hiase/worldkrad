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
    // ... 나머지 명령어도 동일하게 추가
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
