const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // number타입으로 받은 데이트값을 String으로 감싸서 문자로 만들어주기
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

getClock(); // 바로 실행되게 해서 1초 뒤에 실행되는 간격을 메워줌.
setInterval(getClock, 1000); // 1초마다 시간이 찍히도록 인터벌을 찍어준다.