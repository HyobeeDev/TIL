const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event) {
  event.preventDefault(); // 1. 기본 동작 막기
  loginForm.classList.add(HIDDEN_CLASSNAME); // 2. form 숨기기
  const username = loginInput.value; // 3. username 변수로 저장하기
  localStorage.setItem(USERNAME_KEY, username); // 4. localStorage에 저장하기
  paintGreetings(username); // 5. paintGreetings 함수 호출하기
}

function paintGreetings (username) { // greeting 실행하기(인사말 나오고, form 숨기기)
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 로그인 후에 저장된 유저이름을 받아오는 변수

if (savedUsername === null) { // 저장된 유저이름과 일치하지 않으면 로그인 폼 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else { // 일치하면 인사말만 보여주기
  paintGreetings(savedUsername);
}