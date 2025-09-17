const commands = [
  { name: "/aplock", purpose: "현재 서 있는 부동산을 잠그는 명령어입니다.", syntax: "/aplock" },
  { name: "/adminobjectmenu", purpose: "가구용 오브젝트 메뉴를 엽니다. DIM 0에서만 사용하십시오.", syntax: "/adminobjectmenu" },
  { name: "/setbuildperm", purpose: "인테리어 외부에서 건축 권한을 부여합니다. DIM 0에서만 사용하십시오.", syntax: "/setbuildperm" },
  { name: "/createproperty", purpose: "현재 위치에 부동산을 생성합니다.", syntax: "/createproperty [유형] [외부 차원] [인테리어] [소유 가능] [가격] [이름] \n a" },
  { name: "/pdelete", purpose: "부동산을 삭제합니다.", syntax: "/pdelete [부동산 ID] [confirm]" },
  { name: "/pinfo", purpose: "현재 내부에 서 있거나 입구에 서 있는 부동산 정보를 제공합니다.", syntax: "/pinfo" },
  { name: "/pmove", purpose: "부동산의 외부 차원 위치를 이동합니다.", syntax: "/pmove [부동산 ID] [confirm]" },
  { name: "/pinterior", purpose: "부동산의 인테리어를 변경합니다.", syntax: "/pinterior [부동산 ID] [인테리어] [confirm]" },
  { name: "/prename", purpose: "부동산의 이름을 변경합니다.", syntax: "/prename [부동산 ID] [이름]" },
  { name: "/pprice", purpose: "부동산의 가격을 설정합니다.", syntax: "/pprice [부동산 ID] [가격]" },
  { name: "/powner", purpose: "부동산 소유자를 (온라인인 사용자 대상) 으로 변경", syntax: "/powner [부동산 ID] [대상]" },
  { name: "/powneroffline", purpose: "부동산 소유자를 [오프라인 사용자를 대상으로] 설정", syntax: "/powneroffline [부동산 ID] [캐릭터 ID]" },
  { name: "/ptype", purpose: "부동산 유형을 설정합니다.", syntax: "/ptype [부동산 ID] [유형]" },
  { name: "/pownable", purpose: "부동산 소유 가능 여부를 변경합니다.", syntax: "/pownable [부동산 ID] [ownable]" },
  { name: "/settenantlimit", purpose: "부동산이 허용하는 임대인수를 설정합니다.", syntax: "/settenantlimit [수량]" },
  { name: "/pinvclear", purpose: "부동산 내의 모든 항목을 지웁니다.", syntax: "/pinvclear [부동산 ID] [confirm]" },
  { name: "/pextdim", purpose: "부동산의 외부 차원을 변경합니다.", syntax: "/pextdim [외부 차원]" },
  { name: "/pactivity", purpose: "부동산 내에서 누가 언제 진입했는지와 소유자를 표시합니다.", syntax: "/pactivity" },
  { name: "/kicktenants", purpose: "부동산의 모든 입주자를 내보냅니다.", syntax: "/kicktenants" },
  { name: "/setpropertylimit", purpose: "플레이어의 소유 부동산 제한 설정", syntax: "/setpropertylimit [대상] [수량]" },
  { name: "/setpropertylimitoffline", purpose: "오프라인 상태의 플레이어 소유 부동산 제한", syntax: "/setpropertylimitoffline [캐릭터 ID] [수량]" },
  { name: "/pteleport", purpose: "부동산으로 이동합니다.", syntax: "/pteleport [부동산 ID]" },
  { name: "/gotoprop", purpose: "이름 또는 주소로 부동산으로 이동합니다.", syntax: "/gotoprop [주소]" },
  { name: "/pnearby", purpose: "주어진 거리 내 부동산 메뉴를 엽니다.", syntax: "/pnearby [거리]" },
  { name: "/pprops", purpose: "온라인 플레이어가 소유한 부동산 확인", syntax: "/pprops [대상]" },
  { name: "/ppropsoffline", purpose: "오프라인 플레이어가 소유한 부동산 확인", syntax: "/ppropsoffline [캐릭터ID]" },
  { name: "/gotobusiness", purpose: "이름으로 지정된 비즈니스로 이동합니다.", syntax: "/gotobusiness [비즈니스 이름]" },
  { name: "/bteleport", purpose: "ID로 지정된 비즈니스로 이동", syntax: "/bteleport [비즈니스 ID]" },
  { name: "/bnearby", purpose: "주어진 거리 내 비즈니스 메뉴를 엽니다.", syntax: "/bnearby [거리]" },
  { name: "/bcreate", purpose: "현재 위치에 비즈니스를 만듭니다.", syntax: "/bcreate [ownable] [가격] [유형] [아이콘ID] [아이콘 색상] [이름]" },
  { name: "/bmove", purpose: "비즈니스를 현재 위치로 이동시킵니다.", syntax: "/bmove [ID]" },
  { name: "/bbank", purpose: "비즈니스 내의 현금 상자 금액 설정", syntax: "/bbank [금액]" },
  { name: "/bcompprice", purpose: "비즈니스 구성 요소 가격 설정", syntax: "/bcompprice [금액]" },
  { name: "/bowner", purpose: "온라인 플레이어로 비즈니스 소유자 설정", syntax: "/bowner [대상]" },
  { name: "/bowneroffline", purpose: "오프라인 플레이어로 비즈니스 소유자 설정", syntax: "/bowneroffline [캐릭터ID]" },
  { name: "/bfaction", purpose: "비즈니스를 faction 소유로 설정", syntax: "/bfaction [faction]" },
  { name: "/bownable", purpose: "비즈니스 소유 가능 상태 전환", syntax: "/bownable" },
  { name: "/bdelete", purpose: "가장 가까운 비즈니스를 삭제합니다.", syntax: "/bdelete" },
  { name: "/bprice", purpose: "비즈니스 구매 가능 가격 설정", syntax: "/bprice [가격]" },
  { name: "/bname", purpose: "비즈니스 이름 변경", syntax: "/bname [이름]" },
  { name: "/bblip", purpose: "비즈니스 블립과 색상 변경", syntax: "/bblip [블립ID] [블립 색상]" },
  { name: "/binfo", purpose: "가장 가까운 비즈니스 정보 확인", syntax: "/binfo" },
  { name: "/broleplay", purpose: "비즈니스 역할극 조우 설정", syntax: "/broleplay" },
  { name: "/bdeliverypoint", purpose: "비즈니스 트럭 배송 지점 설정", syntax: "/bdeliverypoint [비즈니스ID] [confirm]" },
  { name: "/setopenbusiness", purpose: "가장 가까운 비즈니스 오픈 가능 여부 설정", syntax: "/setopenbusiness" },
  { name: "/cleanshift", purpose: "현재 근무중인 직원 모두 근무 종료", syntax: "/cleanshift" },
  { name: "/createvehicle", purpose: "특정 캐릭터 아래 차량 생성", syntax: "/createvehicle [대상] [모델]" },
  { name: "/setvehicle", purpose: "차량 모델, 번호판, 소유자, faction 설정", syntax: "/setvehicle [모델/번호판/소유자/유형/faction]" },
  { name: "/avmod", purpose: "차량 수정 메뉴 열기", syntax: "/avmod" },
  { name: "/vnearby", purpose: "반경 내 모든 차량 나열", syntax: "/vnearby [거리]" },
  { name: "/listveh", purpose: "지정된 모델 차량 목록 확인", syntax: "/listveh [차량 이름]" },
  { name: "/createsmarttp", purpose: "부동산 내부 스마트 TP 생성", syntax: "/createsmarttp [부동산ID] [마커Bool] [canUsePropCmd] [유형] [tpName]" },
  { name: "/deletesmarttp", purpose: "부동산 스마트 TP 삭제", syntax: "/deletesmarttp [부동산ID] [텔레포트ID]" },
  { name: "/movesmarttp", purpose: "스마트 TP 위치/차원 이동", syntax: "/movesmarttp [부동산ID] [텔레포트ID]" },
  { name: "/linksmarttp", purpose: "스마트 TP 서로 연결", syntax: "/linksmarttp [부동산ID] [텔레포트ID] [연결할 텔레포트ID]" },
  { name: "/viewsmarttps", purpose: "부동산 TP 메뉴 보기", syntax: "/viewsmarttps [부동산ID]" },
  { name: "/createmi", purpose: "발 밑에 멀티인테리어 생성", syntax: "/createmi [외부차원] [인테리어] [소유 가능] [방가격] [층 수] [방 수] [인벤토리 크기] [이름]" },
  { name: "/miinfo", purpose: "가까운 멀티인테리어 정보 확인", syntax: "/miinfo" },
  { name: "/midelete", purpose: "멀티인테리어 삭제", syntax: "/midelete [멀티인테리어ID]" },
  { name: "/mimove", purpose: "멀티인테리어 외부 위치 이동", syntax: "/mimove [멀티인테리어ID]" },
  { name: "/gotomi", purpose: "멀티인테리어 이름으로 이동", syntax: "/gotomi [멀티인테리어 이름]" },
  { name: "/minearby", purpose: "범위 내 멀티인테리어 목록", syntax: "/minearby [거리]" },
  { name: "/mitp", purpose: "멀티인테리어 ID로 이동", syntax: "/mitp [멀티인테리어ID]" },
  { name: "/miallinterior", purpose: "멀티인테리어 내부 모든 부동산 인테리어 변경", syntax: "/miallinterior [멀티인테리어ID] [인테리어]" },
  { name: "/miallownable", purpose: "멀티인테리어 내부 모든 부동산 소유 가능 설정", syntax: "/miallownable [멀티인테리어ID] [소유 가능]" },
  { name: "/miallowner", purpose: "멀티인테리어 내부 모든 부동산 온라인 소유자 설정", syntax: "/miallowner [멀티인테리어ID] [대상]" },
  { name: "/miallowneroffline", purpose: "멀티인테리어 내부 모든 부동산 오프라인 소유자 설정", syntax: "/miallowneroffline [멀티인테리어ID] [대상]" },
  { name: "/miallprice", purpose: "멀티인테리어 내부 모든 부동산 가격 설정", syntax: "/miallprice [멀티인테리어ID] [가격]" }
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