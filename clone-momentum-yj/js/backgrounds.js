const imgs = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
];
const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;
document.body.appendChild(bgImg);
