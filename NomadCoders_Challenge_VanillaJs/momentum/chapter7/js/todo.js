const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
// const toDoInput = document.querySelector("#todo-form input") // 윗줄과 동일한 코드임
const toDoList = document.getElementById("todo-list");

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

    paintToDo(newTodo);
};

toDoForm.addEventListener("submit", handleToDoSubmit);