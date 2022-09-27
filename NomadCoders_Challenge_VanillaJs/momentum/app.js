const player = {
  name: "Hyobee",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["fat"]); //이런 형식으로도 가능하다.

player.fat = false; // 객체의 속성 값을 바꾸는 건 const도 가능하다.
console.log(player.fat);
// player = false; // 하지만 객체 자체를 바꾸는 건 불가능하다.
// console.log(player.fat); 
player.lastName = "Kim"; // 속성 추가도 가능하다.
console.log(player.lastName); 
player.points = player.points + 15; //  값을 더하는 것도 가능하다.
console.log(player.points);

