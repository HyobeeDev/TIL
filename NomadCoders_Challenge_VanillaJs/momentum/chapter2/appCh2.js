/*
// function 기초

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



/*
// 계산기 만들기

const calculator = {
  plus: function (a, b) {
    // console.log(a + b);
    alert(a + b);
  },
  minus: function (a, b) {
    // console.log(a - b);
    alert(a - b);
  },
  times: function (a, b) {
    // console.log(a * b);
    alert(a * b);
  },
  divide: function (a, b) {
    // console.log(a / b);
    alert(a / b);
  },
  power: function (a, b) {
    // console.log(a ** b);
    alert(a ** b);
  }
};

calculator.plus(2, 3);
calculator.minus(2, 3);
calculator.times(2, 3);
calculator.divide(2, 3);
calculator.power(2, 3);

console.log(calculator.plus());
*/




/*
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


const age = 96;
function calculateKrAge(ageOfForeigner){
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);
*/





/*
// 더 나은 방법
const age = 96;
function calculateKrAge(ageOfForeigner){
  // return ageOfForeigner + 2;
  ageOfForeigner + 2;
  return "Hello"
}

const krAge = calculateKrAge(age);
console.log(krAge);

// return은 결과값을 보여주는 역할을 한다. 위의 상황처럼 ageOfForeigner+ 2 값을 보여주고 싶으면 return을 붙여줘야 한다.
*/

/*
// 그래서 더 나은 계산기를 만들어 준다면?
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  }
};

const plusResult = calculator.plus(2, 3);
// console.log(plusResult);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
// 이 상태에서는 콘솔로그를 찍지 않아서 콘솔에서는 아무것도 나오지 않음.
// 하지만 plusResult, minusResult 등 변수값을 콘솔에 직접 찍어서 결과값을 확인할 수 있게 된다.

// 믹서기에서 갈은 망고주스를 꺼내려면 console.log(a+b);형식이 아닌, 결과값을 얻을 수 있는 return a+b;와 같은 형식으로 만들어줘야 한다. 
// function은 한 번 return 하고 나면 끝나 버린다. 그래서 return 이후의 코드들은 무용지물이 된다.
*/



// 음주가 가능한 나이 계산기
const age = parseInt(prompt("How old are you?"));
// console.log(age, parseInt(age));
// console.log(typeof age); // 데이터타입 확인하려면 typeof를 사용하자.
// function은 제일 안쪽 괄호부터 실행한다.
// console.log(age);
// console.log(isNaN(age)); // boolean을 리턴한다. 숫자면 false, 아니면 true



// boolean
// true || true === true
// false || true === true
// true || false === true
// false || false === false

// true && true === true
// false && true === false
// true && false === false
// false && false === false



// if(isNaN(age)){
//   // condition === true
//   console.log("Please write a number");
// } else {
//   // condition === false
//   console.log("Thank you for writing your age.");
// };

if (isNaN(age) || age < 0) {
  // condition === true
  console.log("Please write a real positive number.");
} else if (age < 18) {
  // condition === false
  console.log("You are too young.");
} else if (age >=18 && age <=50) {
 console.log("You can drink.");
} else if (age >50 && age <=80) {
  console.log("You should exercise.");
} else if(age === 100){ // 100의 경우는 이 다음에 오는 else if보다 앞에 와야 실행된다.
  console.log("Wow! You are wise.");
} else if (age > 80) {
  console.log("You can do whatever you want.");
};

// if((a && b) || (c && d) || (x || w)) {
//   // true || false || false => true
// }
