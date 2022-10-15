const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
// const toDoInput = document.querySelector("#todo-form input") // 윗줄과 동일한 코드임
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    // localStorage.setItem("todos",toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // JSON.stringify()는 입력되는 모든 것을 string으로 바꿔준다. 배열형태로 바뀜. JSON.parse()도 사용 가능

}


function deleteToDo(event) {
    // console.log(event);
    // console.dir(event.target);
    // console.dir(event.target.parentElement); // 클릭된 버튼의 부모가 누군지 알려줌.
    // console.log(event.target.parentElement.innerText); // 클릭된 버튼의 텍스트를 알려줌.

    // 버튼의 부모에 접근해서 부모자체를 지워버리면서 삭제를 구현하자!
    const li = event.target.parentElement;
    li.remove();
};

function paintToDo(newTodo) {
    // console.log("I will paint " + newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;  //span에 인풋 입력값 표시하도록 만들기
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span); // li에 span 자식 심기
    li.appendChild(button);
    // console.log(li); // 잘 추가되었는지 확인
    toDoList.appendChild(li); // ul에다 li 자식 심기
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value); // 콘솔로 인풋에 찍은 값이 잘 나오는지 확인하기

    const newTodo = toDoInput.value; // 1. 인풋에 입력된 값 저장해두기
    // console.log(newTodo, toDoInput.value);
    toDoInput.value = ""; // 2. input에 내용을 치고 엔터를 누르면 새로고침은 막혔지만 값은 없어지게 하기
    // console.log(newTodo, toDoInput.value);
    toDos.push(newTodo); // paint 하기 전에 toDos 배열에 밀어 넣어주기
    paintToDo(newTodo);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("This is turn of ", item);
// };

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // console.log(parsedToDos); // 배열형태로 변경되었는지 확인하기
    // parsedToDos.forEach(sayHello);
    // forEach: 배열에 있는 각각의 item에 대해서 function을 실행해준다. 공평하게 배열안에 것들에게 다돌아가면서 한번씩 실행해주는 거다.
    // parsedToDos.forEach((item) => console.log("This is the turn of ", item));
    parsedToDos.forEach(paintToDo);

};
