const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TOTOS_LS = "toDos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TOTOS_LS, JSON.stringify(toDos));
}

function deleteDoto(event) {
  const btn = event.target;
  const li = btn.parentNode;
  // console.log(btn);
  // console.log(li);
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (todo) {
    console.log(todo.id, parseInt(li.id));
    return todo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  console.log(toDos);
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deleteDoto);
  span.innerHTML = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  //  console.log(toDos);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintTodo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TOTOS_LS);

  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    //console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      paintTodo(toDo.text);
    });
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
