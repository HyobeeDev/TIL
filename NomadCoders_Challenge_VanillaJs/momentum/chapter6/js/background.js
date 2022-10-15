const images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage); // 콘솔에 랜덤하게 배열이 찍히는지 확인하기
// 시계 만드는 거랑 동일하다

const bgImage = document.createElement("img");
// createElement는 HTML 상에 태그를 만들어준다.
// console.log(bgImage); // 콘솔에 랜덤하게 배열이 찍히는지 확인하기

bgImage.src = `img/${chosenImage}`;
// console.log(bgImage); // 콘솔에 랜덤하게 배열이 찍히는지 확인하기

document.body.appendChild(bgImage);
// appendChild는 bgImage를 body에 진짜로 연결해준다.