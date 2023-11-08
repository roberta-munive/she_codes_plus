function capitalizeFirstLetterOfWordsInString(str) {
  str = str.toLowerCase().trim();
  let word_array = str.split(" ");
  for (var i = 0; i < word_array.length; i++) {
    word_array[i] = word_array[i][0].toUpperCase() + word_array[i].substring(1);
  }

  return word_array.join(" ");
}

function displayCityName(event) {
  event.preventDefault();
  let citySearchBarLocator = document.querySelector("#city-search-bar");
  let city = citySearchBarLocator.value;
  city = capitalizeFirstLetterOfWordsInString(city);
  let currentCityLocator = document.querySelector("#current-city");
  currentCityLocator.innerHTML = city;
}

function displayCurrentDayOfWeek() {
  let dayOfWeekLocator = document.querySelector("#current-day-of-week");
  let now = new Date();
  let dayOfWeekAsDigit = now.getDay();
  let day = getDayOfWeekFullLength(dayOfWeekAsDigit);
  dayOfWeekLocator.innerHTML = day;
}

function displayCurrentTime() {
  let currentTimeLocator = document.querySelector("#current-time");
  let now = new Date();

  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  currentTimeLocator.innerHTML = `${hour}:${minutes}`;
}

function getDayOfWeekFullLength(dayOfWeekAsDigit) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[dayOfWeekAsDigit];
}

displayCurrentDayOfWeek();

displayCurrentTime();

let citySearchInputLocator = document.querySelector("#city-search-input");
citySearchInputLocator.addEventListener("submit", displayCityName);
