// 로그인 처리
const loginForm = document.getElementById("login-form");
const loginContainer = document.getElementById("login-container");
const content = document.getElementById("content");
const loginError = document.getElementById("login-error");

const LOGGED_IN_KEY = "pm_logged_in";

// 자동 로그아웃 (창 닫으면 세션 삭제)
window.addEventListener("beforeunload", () => {
  sessionStorage.removeItem(LOGGED_IN_KEY);
});

if (sessionStorage.getItem(LOGGED_IN_KEY) === "true") {
  loginContainer.classList.add("hidden");
  content.classList.remove("hidden");
}

// 로그인 시도
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "worldkr") {
    sessionStorage.setItem(LOGGED_IN_KEY, "true");
    loginContainer.classList.add("hidden");
    content.classList.remove("hidden");
  } else {
    loginError.textContent = "아이디 또는 비밀번호가 올바르지 않습니다.";
  }
});

// 로그아웃 버튼
document.getElementById("logout-btn").addEventListener("click", () => {
  sessionStorage.removeItem(LOGGED_IN_KEY);
  content.classList.add("hidden");
  loginContainer.classList.remove("hidden");
});

// --- PM 명령어 데이터 ---
const commands = [
  {
    title: "/pm",
    purpose: "플레이어에게 개인 메시지를 보냅니다.",
    syntax: "/pm [ID] [메시지]"
  },
  {
    title: "/blockpm",
    purpose: "개인 메시지를 차단하거나 허용합니다.",
    syntax: "/blockpm"
  },
  {
    title: "/togpm",
    purpose: "모든 개인 메시지를 끄거나 켭니다.",
    syntax: "/togpm"
  }
];

// 카드 UI 생성
const grid = document.getElementById("command-grid");
commands.forEach(cmd => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${cmd.title}</h3><p>${cmd.purpose}</p>`;
  card.addEventListener("click", () => openModal(cmd));
  grid.appendChild(card);
});

// 모달 기능
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalPurpose = document.getElementById("modal-purpose");
const modalSyntax = document.getElementById("modal-syntax");
const closeBtn = document.querySelector(".close");

function openModal(cmd) {
  modalTitle.textContent = cmd.title;
  modalPurpose.textContent = cmd.purpose;
  modalSyntax.textContent = cmd.syntax;
  modal.style.display = "block";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// --- 임대 사업장 리스트 ---
const businessForm = document.getElementById("business-form");
const businessInput = document.getElementById("business-input");
const businessList = document.getElementById("business-list");

businessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = businessInput.value.trim();
  if (name) {
    addListItem(businessList, name);
    businessInput.value = "";
  }
});

// --- 임대 아파트 리스트 ---
const apartmentForm = document.getElementById("apartment-form");
const apartmentInput = document.getElementById("apartment-input");
const apartmentList = document.getElementById("apartment-list");

apartmentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = apartmentInput.value.trim();
  if (name) {
    addListItem(apartmentList, name);
    apartmentInput.value = "";
  }
});

// 공통: 리스트 항목 추가 함수
function addListItem(listElement, text) {
  const li = document.createElement("li");
  li.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
  delBtn.className = "delete-btn";
  delBtn.addEventListener("click", () => li.remove());

  li.appendChild(delBtn);
  listElement.appendChild(li);
}
