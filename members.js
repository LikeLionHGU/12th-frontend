const members = [
  {
    name: "이름",
    link: "https://sungyu0309.github.io/Profile/",
    github: "https://github.com/sungyu0309/Profile",
    name: "한선규",
    github: "https://github.com/sungyu0309",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
  },
];

const membersNode = document.querySelector("div.members");
const originNode = document.querySelector("div.member-card");

// 멤버 데이터 요소마다 반복
members.map((memberData) => {
  const node = originNode.cloneNode(true); // 기존 template 클론
  node.classList.remove("template"); // template 클래스를 삭제하여 display: none 해제
  node.querySelector(".info-name").innerText = memberData.name; // 이름 변경
  node
    .querySelector(".info-github > a")
    .setAttribute("href", memberData.github); // 깃헙주소 변경
  node
    .querySelector(".card-banner > a > img")
    .setAttribute("src", memberData.image);

  // 사이트 주소 링크(href) 와 Text 를 바꾸기 위해
  // .link-a 태그를 모두 가져옴.
  node.querySelectorAll(".link-a").forEach((el) => {
    el.setAttribute("href", memberData.link);

    // 하위 노드 개수가 1개이고 하위 노드가 텍스트 노드일경우 텍스트도 변경
    if (
      el.childNodes.length == 1 &&
      el.childNodes[0].nodeType === Node.TEXT_NODE
    )
      el.innerText = memberData.link;
  });

  membersNode.appendChild(node); // 만들어진 node 를 다시 추가
});