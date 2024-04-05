const images = ["0.jpeg","1.jpeg","2.jpeg"];

const randomImgIdx = Math.floor(Math.random() * images.length);
const chosenImgName = images[randomImgIdx];

// const bgImg = document.createElement("img");
// bgImg.src = `img/${chosenImgName}`;
// document.body.appendChild(bgImg);

const imgUrl = `./img/${chosenImgName}`;
document.body.style.backgroundImage = `url(${imgUrl})`;

console.log(`background image : ${imgUrl}`);