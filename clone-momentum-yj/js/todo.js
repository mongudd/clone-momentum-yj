const todoForm = document.querySelector("todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const TODO_KEY = "To Do";
let todos = [];

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  showTodo(newTodoObj);
  saveTodo();
}
todo.addEventListener("submit", onTodoSubmit);

function showTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodo();
}

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(showTodo);
}
