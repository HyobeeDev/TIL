/*
// console.log("Hello! My name is nico");
// console.log("Hello! My name is dal");
// console.log("Hello! My name is lynn");
// console.log("Hello! My name is hyobee");

// 1. Hello! My name is가 자동으로 반복되게 만들기
// function sayHello () {
//   console.log("Hello! My name is 이름");
// }

// 3. 데이터 받기 (괄호 안에 넣어 준다)
// function sayHello (nameOfPerson) {
//   console.log(nameOfPerson);
// }

// 3. 두 개의 데이터 받기(콤마로 구분해준다)
function sayHello (nameOfPerson, age) {
  console.log("Hello, my name is " + nameOfPerson + " and I'm " + age + " years old.");
}

// 2. sayHello 실행버튼 만들고, 이름 데이터 보내기
sayHello ("nico", 10);
sayHello ("dal", 21);
sayHello ("lynn", 13);
sayHello ("hyobee", 22);
*/



/*
// error 예시 01. undefined undefined : 실행버튼에 데이터를 넣지 않았기 때문.
// function plus(a, b) {
//   console.log(a, b);
// }
// plus();

// error 예시 02. NaN(Not a Number) :  숫자가 아님.
// function plus(a, b) {
//   console.log(a + b);
// }
// plus();

// 받는 데이터 이름은 뭐든 상관없지만, 순서는 매우 중요하다!
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
function divide(a, b) {
  console.log(a/b);
}
plus(8, 60);
divide(60, 8);
*/

/*
// console.log()처럼 Object 형식으로 만들어보자.
const player = {
  name: "Hyobee",
  sayHello: function(otherPersonsName){ // 데이터 받기
    console.log("Hello! " + otherPersonsName + ". Nice to meet you!");
  }
};

// 데이터 보내기
player.sayHello("lynn");
player.sayHello("Hyobee");
player.sayHello("효비");
*/



// 숙제! 계산기 만들기
// const calculator = {
//   add: function(a, b) {
//     console.log(a + b);
//   },
//   minus: function(a, b) {
//     console.log(a - b);
//   },
//   div: function(a, b) {
//     console.log(a / b);
//   },
//   multi: function(a, b) {
//     console.log(a * b);
//   },
//   powerof: function(a, b) {
//     console.log(a ** b);
//   },
// };
// calculator.add(5, 1);
// calculator.minus(5, 1);
// calculator.div(10, 2);
// calculator.multi(5, 2);
// calculator.powerof(2, 2);


// const age = 96;
// function calculateKrAge(ageOfForeigner){
//   return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);


/*
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  div: function(a, b) {
    return a / b;
  },
  multi: function(a, b) {
    return a * b;
  },
  powerof: function(a, b) {
    return a ** b;
  },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const multiResult = calculator.multi(10, minusResult);
const divideResult = calculator.div(multiResult, plusResult);
const powerResult = calculator.powerof(divideResult, minusResult);
*/


/*
true || true === true
false || true === true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false
*/

/*
const age = parseInt(prompt("How old are you?")); 

console.log();

if(isNaN(age) || age < 0) {
  console.log("Please write a real positive number.");
} else if(age < 18) {
  console.log("You are too young.");
} else if(age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if(age > 50 && age <= 80) {
  console.log("You should exercise.");
} else if(age > 80) {
  console.log("You can do whatever you want.");
}

// if((a && b) || (c && d) || (x || w)) {
//   // true || false || false => true
// }
*/


/*
// 1.
const h1 = document.querySelector(".hello h1");
// const h1 = document.querySelectorAll(".hello h1");
console.dir(h1);
// h1.innerText = "Hello!!!";
// h1.style.color = "red";

// 3.
function handleTitleClick(){
  // console.log("title was clicked!")
  h1.style.color = "blue";
}
function handleMouseEnter(){
  // console.log("mouse is here!");
  h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
  alert("It was copied!")
}
function handleWindowOffline(){
  alert("SOS! No WIFI!")
}
function handleWindowOnline(){
  alert("All Goooooood!")
}

// 2. 
// h1.addEventListener("click", handleTitleClick);
h1.onclick = handleTitleClick;
// h1.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseLeave);
h1.onmouseleave = handleMouseLeave;

//  1. 이벤트 대상인 title을 선언한다.
//  2. title에게 감지해야 할 이벤트를 정해주기 위해, 괄호 안에 어떤 상태일 때 어떤 함수를 실행할지를 정한다.
//  3. 실행을 반복할 함수 코드를 만들어 준다.
//  => 내가 직접 실행버튼을 누르지 않고, JavaScript에 이 function이름을 넘겨줘서 유저가 title을 click할 경우에 JavaScript가 실행버튼을 대신 눌러주게끔 하는 것이다.

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
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
