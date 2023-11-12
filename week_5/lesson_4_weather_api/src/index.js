function getWeatherInfoFromApi(response) {
  let city = response.data.city;
  let currentTemperature = response.data.temperature.current;
  console.log(`Current temperature in ${city} is ${currentTemperature}`);
  currentTemperature = Math.round(currentTemperature);

  let headingLocator = document.querySelector("h1");
  headingLocator.innerHTML = `It is ${currentTemperature} degrees in ${city}`;
}

let city = "Sydney";
let unit = "metric";
let apiKey = "cf14b4c0f0c0d7a973ee3b4e430t2bo5";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;

axios.get(apiURL).then(getWeatherInfoFromApi);
