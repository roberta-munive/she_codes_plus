let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

function user_interaction() {
  let city = prompt("Enter a city");

  city = city.toLowerCase().trim();

  if (weather[city]) {
    alert_weather_conditions(city);
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://google.com/search?q=weather+${city}`
    );
  }
}

function alert_weather_conditions(city) {
  city = city.toLowerCase().trim();
  let temp_in_celsius = Math.round(weather[city].temp);
  let humidity = Math.round(weather[city].humidity);
  let temp_in_fahrenheit = Math.round(convert_celsius_to_fahrenheit(temp_in_celsius));
  let formatted_city = capitalize_first_letter_of_words_in_a_string(city);
  alert(
    `It is currently ${temp_in_celsius}°C (${temp_in_fahrenheit}°F) in ${formatted_city} with a humidity of ${humidity}%`
  );
}

function convert_celsius_to_fahrenheit(temp_in_celsius) {
  let temp_in_fahrenheit = (temp_in_celsius * 9) / 5 + 32;
  return temp_in_fahrenheit;
}

function capitalize_first_letter_of_words_in_a_string(str){
  str = str.toLowerCase().trim();
  let word_array = str.split(" ");
  for (var i = 0; i < word_array.length; i++){
    word_array[i] = word_array[i][0].toUpperCase() + word_array[i].substring(1);
  }

  return word_array.join(" ");

}

user_interaction();
