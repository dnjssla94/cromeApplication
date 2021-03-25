const body = document.querySelector("body");
const IMAGE_NUM = 4;

function handleImageLoad() {
  console.log("image Loading");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  image.addEventListener("loaded", handleImageLoad); //API에서 가져올경우 쓰는 한번에 로딩하는 트릭.
}

function getRandom() {
  const number = Math.ceil(Math.random() * IMAGE_NUM);

  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}
init();
