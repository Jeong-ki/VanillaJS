// 랜덤 이미지
const images = ["곰1.png", "곰2.png", "곰3.png"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage);