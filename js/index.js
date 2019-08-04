const appKey = "e7242ddfc676b988309b540c75e0144e";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
let searchLink;

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function main() {
  initDisplay();
}

// INITIAL DISPLAY
function initDisplay() {
  var defaultCity = "Geylang";
  searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + defaultCity + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
}

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {
    alert("please input your city name and try again");
  }else {
    searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  humidity.innerHTML = jsonObject.main.humidity + "%";
}

function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}

main();

// get user default location
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     searchButton.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   searchButton.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }
