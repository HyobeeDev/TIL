const quotes = [
  {
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela",
  },
  {
    quote:"The die is cast.",
    author:"Julius caesar",
  },
  {
    quote:"All you need in this life is ignorance and confidence, then success is sure. ",
    author:"Mark Twain",
  },
  {
    quote:"Great minds have purposes, others have wishes.",
    author:"Washington Irving",
  },
  {
    quote:"If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author:"Jim Rohn",
  },
  {
    quote:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author:"Winston S. Churchill",
  },
  {
    quote:"Don’t be afraid to give up the good to go for the great.",
    author:"John D. Rockefeller",
  },
  {
    quote:"Try not to become a man of success. Rather become a man of value.",
    author:"Albert Einstein",
  },
  {
    quote:"Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally.",
    author:"David Frost",
  },
  {
    quote:"Grind Hard, Shine Hard.",
    author:"Dwayne Johnson",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[10-1]); 
// 랜덤으로 quotes 객체 안의 0~9까지를 보여주려면? 

// 콘솔에 찍어보자.
// Math.random() // 랜덤으로 숫자를 보여줌. 근데 0~1사이라서 소숫점임
// Math.random() * 10
// Math.round() // 반올림
// Math.ceil() // 올림
// Math.floor() // 내림

// 방법1.
// console.log(quotes[Math.floor(Math.random() * 10)]); // 여기서 문제점은 배열이 더 늘어날 수도 있다는 점이다.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;