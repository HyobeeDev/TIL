/*
// element를 불러오는 방법 1
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// element를 불러오는 방법 2
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick(){
  // console.log("click!"); // 클릭이 잘 먹히는지 확인.
  // console.dir(loginInput); // 속성값 확인해보자.
  // console.log(loginInput.value); // value 값을 콘솔에 찍기.
  // console.log("Hello! ", loginInput.value);

  // 유저가 input에 입력하지 않았다면? => 유효성 체크
  // 조건: username 비면 안되고, 너무 길어도 안됨.
  const username = loginInput.value;
  // if(username === ""){
  //   alert("Please write your name.");
  // } else if(username.length>15) {
  //   alert("Your name is too long.");
  // }
  // 위의 유효성 체크는 HTML 안에서 Form의 input 속성을 통해서 진행 가능.
  console.log(username);
};

loginButton.addEventListener("click", handleLoginBtnClick);
*/


// 브라우저가 새로고침하지 않고 user 정보를 저장하도록 하려면?
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
  // console.username = loginInput.ariaValueMax;
  // console.log("username");

  // addEventListener의 첫 번째 인자는 이벤트이고 이벤트와 관련된 함수에서 그 이벤트에 대한 정보를 함수의 첫 번째 인자에 저장해둔다. 그 정보 안에는 preventDefault라는 메소드가 있는데 이것은 브라우저가 submit 했을 때 새로고침이 안 되게 막는 역할 등을 한다.
  event.preventDefault(); // 브라우저의 기본 동작을 막아준다.
  console.log(loginInput.value);
}

function handleLinkClick(event){
  event.preventDefault();
  // console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
// 변수명 뒤에 오는 ()괄호는 '당장 실행'하라는 명령어와 같다.
// 그래서 addEventListener를 쓸 때, onLoginSubmit()에서 괄호를 쓰지 않는 이유는 당장 실행할 것이 아니기 때문이다.
link.addEventListener("click", handleLinkClick);