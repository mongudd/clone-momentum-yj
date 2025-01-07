const API_KEY = "f312b668a28619367ef00aaa57a80309";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const degree = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      degree.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
      city.innerText = data.name;
    });
}

function onGeoErr() {
  alert("Cannot Find Your Location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

/* 
//navigator.geolocation.getCurrentPosition(Success함수, Error함수)
// API : 다른 서버와 이야기 할 수 있는 방법
// open weather map : https://openweathermap.org/api
// API key is on my profile
const API_KEY = "f312b668a28619367ef00aaa57a80309";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    });
  // fetch : JS is calling url instead of clicking url
  // json : information inside fetched url
}

function onGeoError() {
  alert("Cat't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
 */
