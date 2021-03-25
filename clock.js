// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked";

// function handleClick() {
//   //   const containIs = title.classList.contains(CLICKED_CLASS);

//   //   if (!containIs) {
//   //     title.classList.add(CLICKED_CLASS);
//   //   } else {
//   //     title.classList.remove(CLICKED_CLASS);
//   //   }
//   title.classList.toggle(CLICKED_CLASS);
// }

// function init() {
//   title.addEventListener("click", handleClick);
// }
// init();
const clockContainer = document.querySelector(".js-clock ");
const clockTitle = document.querySelector(".js-title");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
