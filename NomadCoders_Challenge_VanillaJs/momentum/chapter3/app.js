/*
// 브라우저가 app.js를 읽고 있기 때문에 document 객체를 실행할 수 있다.

const h1 = document.querySelector(".sexy-font");
// console.dir(h1); // element 내부를 보고 싶을 때 dir을 사용한다.

function handleH1Click(){
 console.log("Title was clicked!");
  h1.style.color = "blue"; // style 속성도 변경할 수 있다.
};

function handleH1Mouseenter(){
  console.log("Mouse is here!");
  h1.style.color = "green";
};

function handleH1Mouseleave(){
  console.log("Mouse has gone...");
  h1.style.color = "gray";
};

function handleWindowResize(){
  document.body.style.backgroundColor = "tomato"; // window는 body를 조작할 수 있다.
};
function handleWindowCopy(){
  alert("Copied!");
};
function handleWindowOffline(){
  alert("SOS! There's no WIFI!");
};
function handleWindowOnline(){
  alert("All Gooooooood!!!!");
};

h1.addEventListener("click", handleH1Click); // click event
// h1.onclick = handleH1Click; // 위와 동일한 이벤트 코드이다.
// addEventListener를 더 선호하는 이유는 removeEventListener를 사용해서 제거할 수 있기 때문이다.
h1.addEventListener("mouseenter", handleH1Mouseenter); // mouseenter event
h1.addEventListener("mouseleave", handleH1Mouseleave); // mouseleave event

// window 사용하기
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


// function을 사용하는 패턴 결론!
//  1. 이벤트 대상(h1)을 선언한다.
//  2. h1에게 감지해야 할 이벤트를 정해주기 위해, 괄호 안에 어떤 상태일 때 어떤 함수를 실행할지를 정한다.
//  3. 실행을 반복할 함수 코드를 만들어 준다.
//  => 내가 직접 실행버튼을 누르지 않고, JavaScript에 이 function이름을 넘겨줘서 유저가 title을 click할 경우에 JavaScript가 실행버튼을 대신 눌러주게끔 하는 것이다.
*/


  


/*
// h1을 누르면 blue, 다시 누르면 tomato 컬러로 변경하려면?
const h1 = document.querySelector(".sexy-font");

function handleH1Click(){
  // console.log(h1.style.color); // 콘솔에 아무것도 나오지 않음. 여기서 h1은 setter 역할
  // h1.style.color = "blue";
  // console.log(h1.style.color); // 콘솔에 blue라고 나옴. 색상값을 확인할 수 있음. h1은 여기서 getter 역할
  // 위의 세줄 코드를 통해 h1이 setter, getter 역할을 모두 한다는 것과 콘솔에서 현재 컬러값을 알아낼 수 있음을 확인.

  // --- 클릭시 색상이 번갈아가며 변하도록 조건문 쓰기 ---
  // if (h1.style.color === "blue") {
  //   h1.style.color = "tomato";
  // } else {
  //   h1.style.color = "blue";
  // }

  // --- 조건문 더 깔끔하게 만들기 ---
  const currentColor = h1.style.color;
  let newColor; // 클릭 이벤트 후에 변경될 컬러를 위해서 선언하지만 비워두기.
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor; // 최종적으로 변경된 컬러가 현재 컬러가 될 수 있도록 선언해준다.
};

h1.addEventListener("click", handleH1Click);

// JavaScript, HTML 간의 춤사위의 완성!
// 1. find the element 엘리먼트를 찾아라
// 2. Listen for an event 이벤트를 감지해라
// 3. React to that event 그 이벤트에 반응해라
*/





// --- style은 CSS에서 정리하자! ---
const h1 = document.querySelector(".sexy-font");

function handleH1Click(){
  // h1.className = "clicked"; //CSS에 .clicked를 작성하고 클래스이름을 붙여서 소통한다.
  
  // if (h1.className === "clicked") { // 여기서 h1은 getter이자 setter이다.
  //   h1.className = "";
  // } else {
  //   h1.className = "clicked"; // clicked 부분은 내가 만든 거기 때문에 여러번 타이핑하다가 오타가 나기 쉽다.
  // };

  // --- 오류 가능성을 줄여보자. --- string을 변수에 저장하는 것은 아주아주아주 유용하다!
  // const clickedClass = "clicked"; // 클래스명이 변경된다면 여기에 한번만 붙여넣으면 되니까 오류 가능성이 줄어든다. 그리고 이 변수를 여러 번 쓰다가 오타가 생기면 콘솔에서 오류가 뜨니까 확인 가능하다.
  // if (h1.className === clickedClass) {
  //   h1.className = "";
  // } else {
  //   h1.className = clickedClass; 
  // };
  // 하지만 여기에도 맹점이 있다. className은 기존의 class name을 완전히 없애버림.

  // --- 기존의 class name은 살리고, 새로운 class name을 붙여보자! ---
  // const clickedClass = "clicked"; 
  // if(h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }
  // 이러한 액션은 개발자들이 매우 자주 사용한다. 그래서 이를 편하게 해주는 function이 있다.

  // --- toggle로 편하게 짜보자! --- 위의 다섯줄을 toggle로 대체하기
  // toggle function은 클래스가 있는지, 없는지를 체크하고 클래스이름을 추가하거나 삭제해준다.
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleH1Click);





/* 과제1
// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>


// - The text of the title should change when the mouse is on top of it.
// - The text of the title should change when the mouse is leaves it.
// - When the window is resized the title should change.
// - On right click the title should also change.
// - The colors of the title should come from a color from the colors array.
// - DO NOT CHANGE .css, or .html files.
// - ALL function handlers should be INSIDE of "superEventHandler"


const title = document.querySelector(".hello h1");

const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = "The mouse is here!👈🏻";
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.innerText = "The mouse is gone...👉🏻";
    title.style.color = colors[1];
  },
  handleWindowResize: function () {
    title.innerText = "You just resized!🙀";
    title.style.color = colors[2];
  },
  handleWindowContextmenu: function () {
    title.innerText = "That was a right click!🖱";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener(
  "contextmenu",
  superEventHandler.handleWindowContextmenu
);
*/