const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const clock = document.querySelector("#clock");
const greeting = document.querySelector("#greeting");
const todo = document.querySelector("#todo");
const quote = document.querySelector("#quote");
const weather = document.querySelector("#weather");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "Username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  // submit event happen -> hide login-form -> save input value in local storage
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS); // savedUsername === null 이었을 때 해당 클래스가 사라졌으니까!
  localStorage.setItem(USERNAME_KEY, username);
  showElement(username);
}

function showElement(username) {
  clock.classList.remove(HIDDEN_CLASS);
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello, ${username}`;
  todo.classList.remove(HIDDEN_CLASS);
  quote.classList.remove(HIDDEN_CLASS);
  weather.classList.remove(HIDDEN_CLASS);
}

if (savedUsername === null) {
  // show login-form
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // hide login-form, show other elements
  showElement(savedUsername);
}
