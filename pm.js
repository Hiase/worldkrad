const scriptURL = "https://script.google.com/macros/s/AKfycbyNTeasnNwNimxTsJZDai05JeqK5df-LpdHUeRWOeO8tJz09IJwCSUsv9LEI0VS1Q/exec";
let currentSheet = "";

if(localStorage.getItem("loggedIn") !== "true") window.location.href = "login.html";
function logout() { localStorage.removeItem("loggedIn"); window.location.href="login.html"; }

// 모달 열기/닫기
const businessBtn = document.getElementById('addBusinessBtn');
const apartBtn = document.getElementById('addApartBtn');
const businessModal = document.getElementById('businessModal');
const apartModal = document.getElementById('apartModal');

businessBtn.onclick = () => businessModal.style.display = 'flex';
apartBtn.onclick = () => apartModal.style.display = 'flex';

document.querySelectorAll('.close-popup').forEach(el => {
  el.onclick = () => el.parentElement.parentElement.style.display = 'none';
});

window.onclick = (e) => {
  if(e.target.classList.contains('modal-popup')) e.target.style.display = 'none';
}

// 폼 제출
document.getElementById('businessForm').onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  formData.append("sheet","business");
  await submitData(formData);
  e.target.reset();
  businessModal.style.display = 'none';
  loadData("business");
};

document.getElementById('apartForm').onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  formData.append("sheet","apart");
  await submitData(formData);
  e.target.reset();
  apartModal.style.display = 'none';
  loadData("apart");
};

// 데이터 전송
async function submitData(formData) {
  const res = await fetch(scriptURL, { method:"POST", body:formData });
  const result = await res.json();
  if(result.status==="success") alert("데이터가 추가되었습니다 ✅");
  else alert("추가 실패 ❌");
}

// 데이터 보기
function loadData(sheet) {
  currentSheet = sheet;
  fetch(`${scriptURL}?sheet=${sheet}`)
    .then(res => res.json())
    .then(data => renderTable(data))
    .catch(err => alert("데이터 로드 실패 ❌"));
}

function renderTable(data) {
  const table = document.getElementById("data-table");
  const thead = table.querySelector("thead");
  const tbody = table.querySelector("tbody");
  thead.innerHTML = "";
  tbody.innerHTML = "";

  if(!data || data.length === 0) {
    tbody.innerHTML = "<tr><td colspan='10'>데이터가 없습니다.</td></tr>";
    return;
  }

  const headers = Object.keys(data[0]);
  let headerHTML = "<tr>";
  headers.forEach(h => headerHTML += `<th>${h}</th>`);
  headerHTML += "<th>삭제</th></tr>";
  thead.innerHTML = headerHTML;

  data.forEach((row,index) => {
    let rowHTML = "<tr>";
    headers.forEach(h => rowHTML += `<td>${row[h]}</td>`);
    rowHTML += `<td><button onclick="deleteRow(${index})">삭제</button></td>`;
    rowHTML += "</tr>";
    tbody.innerHTML += rowHTML;
  });
}

// 삭제
function deleteRow(index) {
  if(!confirm("정말 삭제하시겠습니까?")) return;
  const formData = new FormData();
  formData.append("sheet",currentSheet);
  formData.append("action","delete");
  formData.append("rowIndex",index);

  fetch(scriptURL,{method:"POST",body:formData})
    .then(res => res.json())
    .then(res=>{
      if(res.status==="deleted") {
        alert("삭제 완료 ✅");
        loadData(currentSheet);
      } else alert("삭제 실패 ❌");
    });
}
