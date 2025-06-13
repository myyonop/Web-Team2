const $txt = document.querySelector(".txt-title");
const $btnGroup = document.querySelector(".btn-group");

const content = "Welcome To Our Team-Page!✨";
let contentIndex = 0;

let typing = function () {
  if (contentIndex < content.length) {
    $txt.innerHTML += content[contentIndex];
    contentIndex++;
  } else {
    // 타이핑이 끝난 후 버튼들 등장
    clearInterval(typingInterval);
    $btnGroup.classList.remove("hidden"); // display: none 제거
    setTimeout(() => {
      $btnGroup.classList.add("show"); // opacity + transform 트리거
    }, 100); // 트랜지션 자연스럽게
  }
};

const typingInterval = setInterval(typing, 100);

