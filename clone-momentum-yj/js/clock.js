function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minute}:${second}`;
}

//padStart : only applicable for string

getClock();
setInterval(getClock, 1000);
