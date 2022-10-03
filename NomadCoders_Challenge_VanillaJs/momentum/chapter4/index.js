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

  // 브라우저가 새로고침하지 않고 user 정보를 저장하도록 하려면?
};

loginButton.addEventListener("click", handleLoginBtnClick);