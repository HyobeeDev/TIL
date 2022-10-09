/*
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