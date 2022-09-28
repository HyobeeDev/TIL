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
const calculator = {
  add: function(a, b) {
    console.log(a + b);
  },
  minus: function(a, b) {
    console.log(a - b);
  },
  div: function(a, b) {
    console.log(a / b);
  },
  multi: function(a, b) {
    console.log(a * b);
  },
  powerof: function(a, b) {
    console.log(a ** b);
  },
};
calculator.add(5, 1);
calculator.minus(5, 1);
calculator.div(10, 2);
calculator.multi(5, 2);
calculator.powerof(2, 2);