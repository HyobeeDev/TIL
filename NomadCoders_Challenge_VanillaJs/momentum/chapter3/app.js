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
/*
const h1 = document.querySelector(".hello h1");
function handleTitleClick(){
  // console.log(h1.style.color); // h1은 여기서 setter 역할
  // h1.style.color = "blue"
  // console.log(h1.style.color); // h1은 여기서 getter 역할
  // 위의 세줄 코드를 통해 h1이 setter, getter 역할을 모두 한다는 것과 콘솔에서 현재 컬러값을 알아낼 수 있음을 확인.
  
  // 현재 컬러값이 OO이라면 XX로 바꿔주기 => if문
  // 1. 직관적인 if문
  // if(h1.style.color === "blue"){
  //   h1.style.color = "tomato";
  // } else {
  //   h1.style.color = "blue"
  // }

  // 2. 읽기 좋은 형태로 바뀌기
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);

// 1. find the element 엘리먼트를 찾아라
// 2. Listen for an event 이벤트를 감지해라
// 3. React to that event 그 이벤트에 반응해라
 */


/*
const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
  // const clickedClass = "clicked";
  // if(h1.className === clickedClass){
  //   h1.className = "";
  // } else {
  //   h1.className = clickedClass;
  // }

  // 클래스명 개별적으로 사용하기 위해 classList 사용
  // const clickedClass = "clicked";
  // if(h1.classList.contains(clickedClass)){
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }

  // 위의 다섯줄을 toggle로 대체하기
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
*/