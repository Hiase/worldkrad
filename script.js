const commands = [
  { name: "/aplock", purpose: "현재 서 있는 부동산을 잠그는 명령어입니다.", syntax: "/aplock" },
  { name: "/adminobjectmenu", purpose: "가구용 오브젝트 메뉴를 엽니다. DIM 0에서만 사용 가능합니다.", syntax: "/adminobjectmenu" },
  { name: "/setbuildperm", purpose: "인테리어 외부에서 건축 권한을 부여합니다. DIM 0에서만 사용 가능합니다.", syntax: "/setbuildperm" },
  { name: "/createproperty", purpose: "현재 위치에 부동산을 생성합니다.", syntax: "/createproperty [유형] [외부 차원] [인테리어] [소유 가능] [가격] [이름]" },
  { name: "/pdelete", purpose: "부동산을 삭제합니다.", syntax: "/pdelete [부동산 ID] [confirm]" }
  // 나머지 명령어도 같은 형식으로 추가
];

const grid = document.getElementById("command-grid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalPurpose = document.getElementById("modal-purpose");
const modalSyntax = document.getElementById("modal-syntax");

// 카드 생성
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

// 모달 닫기
modal.querySelector(".close").addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if(e.target === modal) modal.style.display = "none"; });

// 검색 기능
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  grid.querySelectorAll(".card").forEach(card => {
    const name = card.querySelector("h3").innerText.toLowerCase();
    const purpose = card.querySelector("p").innerText.toLowerCase();
    card.style.display = (name.includes(query) || purpose.includes(query)) ? "block" : "none";
  });
});
