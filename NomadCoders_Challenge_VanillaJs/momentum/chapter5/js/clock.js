/*
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
};

// interval: 매번 일어나야 하는 무언가를 말한다. ex) 매 2초마다 실행
// setInterval(실행하고자하는 function, 호출되는 간격 ms)
// setInterval(sayHello, 5000) // 5초

// timeout: 얼마간 지연되었다가 딱 한 번 실행하는 이벤트를 말한다. ex) 5초 뒤에 실행
// setTimeout(호출하고자하는 function명, 기다리는 시간 ms)
// setTimeout(sayHello, 5000)

// new Date(): 현재 년월일시분초 정보를 표시함
// 콘솔에 아래와 같이 찍어보자.
// const date = new Date();
// date.getdate()
// date.getDay() // 0: 일요일, 1: 월요일...
// date.getHours()
// date.getMinutes()
// date.getSeconds()
*/





const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
};

getClock(); // 바로 실행되게 해서 1초 뒤에 실행되는 간격을 메워줌.
setInterval(getClock, 1000); // 1초마다 시간이 찍히도록 인터벌을 찍어준다.