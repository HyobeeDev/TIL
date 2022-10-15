const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
// const toDoInput = document.querySelector("#todo-form input") // 윗줄과 동일한 코드임
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value); // 콘솔로 인풋에 찍은 값이 잘 나오는지 확인하기

    const newTodo = toDoInput.value; // 1. 인풋에 입력된 값 저장해두기
    console.log(newTodo, toDoInput.value);
    toDoInput.value = ""; // 2. input에 내용을 치고 엔터를 누르면 새로고침은 막혔지만 값은 없어지게 하기
    console.log(newTodo, toDoInput.value);
};

toDoForm.addEventListener("submit", handleToDoSubmit);