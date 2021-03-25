const API_KEY = "6516eeaaad051f39177e3adcec53f2f7";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getweather(latitude, longitude) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      const sky = json.weather[0].description;
      weather.innerHTML = `날씨: ${sky} 온도: ${temperature} 지역: ${place}`;
    });
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getweather(latitude, longitude);
}

function handleGeoError() {
  console.log("Error Geographic Errrrorr");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const data = JSON.parse(loadedCoords);
    //console.log(data);
    getweather(data.latitude, data.longitude);
  }
}

function init() {
  loadCords();
}

init();
