/*
// // element를 불러오는 방법 1
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
  const username = loginInput.value; // 인풋값 변수 선언
  // if(username === ""){
  //   alert("Please write your name.");
  // } else if(username.length>15) { // .length: value값의 길이를 알 수 있다.
  //   alert("Your name is too long.");
  // }
  // 위의 유효성 체크는 HTML 안에서 Form의 input 속성을 통해서 진행 가능.
  console.log(username);
};

loginButton.addEventListener("click", handleLoginBtnClick);
*/




/*
// --- 브라우저가 새로고침하지 않고 user 정보를 저장하도록 하려면? ---
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); // form의 기본 동작인 submit이 동작하는 것을 막는다.
  // console.log(event); // 콘솔에 event 객체들을 보여준다.
  console.log(loginInput.value); // Input 창에 유저가 입력한 값을 콘솔에 표시해준다.

  // addEventListener의 첫 번째 인자는 이벤트이고 이벤트와 관련된 함수에서 그 이벤트에 대한 정보를 함수의 첫 번째 인자에 저장해둔다. 그 정보 안에는 preventDefault라는 메소드가 있는데 이것은 브라우저가 submit 했을 때 새로고침이 안 되게 막는 역할 등을 한다.
};

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  // alert("clicked!"); // 알람창이 뜬 상태에서만 링크로 넘어가는 걸 막는다.
};
// a 태그를 클릭하면 링크로 이동하는 것을 막는다.

loginForm.addEventListener("submit", onLoginSubmit);
// 변수명 뒤에 오는 ()괄호는 '당장 실행'하라는 명령어와 같다.
// 그래서 addEventListener를 쓸 때, onLoginSubmit()에서 괄호를 쓰지 않는 이유는 당장 실행할 것이 아니기 때문이다.

// 첫 번째 argument로써 추가적인 정보를 가진 채로 호출하게 될 것.

link.addEventListener("click", handleLinkClick);
*/




/*
// --- 유저가 입력하고 나면 입력 form을 없애보자! ---
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 왜 대문자로 쓸까? => 일반적으로 string만 포함된 변수는 중요한 정보를 담은 것이 아니라서 대문자로 표기한다.(대문자가 가독성이 떨어지니까)

function onLoginSubmit(event) {
  event.preventDefault();

  // Action2
  loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인폼 사라져라, 얍!
  const username = loginInput.value;
  // console.log(username); // 그리고 유저가 입력한 값은 콘솔에 표시해라, 얍!

  // Action4
  localStorage.setItem(USERNAME_KEY, username); // localStorage.setItem(Key, value)

  // Action3. h1에 표시할 텍스트가 있을 때 표시하기.
  // greeting.innerText = "Hello! " + username; // 더 가독성 좋게 백틱을 사용하자.
  // Action5. 아래의 두줄은 반복되기 때문에 아래의 함수로 줄인다.
  // greeting.innerText = `Hello! ${username}`; // 좀더 새로운 방법!
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(username);
};

// --- Action5. 반복되는 두줄의 코드를 함수로 만들어 줄여보자. ---
function paintGreetings(username) {
  greeting.innerText = `Hello! ${username}`; 
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

// --- Action4. 로그인한 유저는 새로고침을 해도 폼이 안 보이도록, User 정보를 저장해보자! ---
// localStorage: 이 API는 브라우저에 뭔가를 저장할 수 있게 해줌. 작은 DB 같은 거라서 나중에 가져다 쓸 수 있다.
// 개발자 도구 > Application > 왼쪽창의 Storage에서 Local Storage 안에 주소를 클릭하면 Key, Value 값을 확인할 수 있음.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  // greeting.innerText = `Hello! ${savedUsername}`; 
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
*/





// 완성된 코드
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

const savedUsername = localStorage.getItem(USERNAME_KEY); // 저장된 유저이름을 받아오는 변수

if (savedUsername === null) { // 저장된 유저이름과 일치하지 않으면 로그인 폼 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else { // 일치하면 인사말만 보여주기
  paintGreetings(savedUsername);
}





/*
// localStorage.removeItem도 만들어보자!

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onSubmit(event) {
event.preventDefault();
loginForm.classList.add("hidden");
const username = loginInput.value;
localStorage.setItem("username", username);
paintGreeting(username);
}

loginForm.addEventListener("submit", onSubmit);

function paintGreeting(username) {
greeting.innerText = `Hello ${username}`;
greeting.classList.remove("hidden");
}

const saveUsername = localStorage.getItem("username");

if (saveUsername === null) {
loginForm.classList.remove("hidden");
loginForm.addEventListener("submit", onSubmit);
} else {
paintGreeting(saveUsername);
}

const removeBtn = document.querySelector(".remove_storage");

function removeStorage() {
localStorage.removeItem("username");
window.location.reload();
}

// h1.classList.add(HIDDEN_CLASS)
// loginForm.classList.remove(HIDDEN_CLASS)
// removeBtn.classList.add(HIDDEN_CLASS)
// loginInput.value = ''
// 위의 4줄을 window.location.reload(); 한 줄로 정리할 수 있다.

removeBtn.addEventListener("click", removeStorage);
*/