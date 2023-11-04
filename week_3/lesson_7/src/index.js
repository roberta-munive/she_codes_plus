let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};

// Challenge 1

console.log(paris.temperature);

// Challenge 2

let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temperature: 25,
  capitalCity: false
};

console.log(sydney.temperature);

// Challenge 3

let australian_cities = ["canberra", "melbourne", "perth"];

for (var i = 0; i < australian_cities.length; i++) {
  console.log(australian_cities[i]);
}

// Challenge 4

let cities = [
  {
    name: "Milan",
    country: "Italy",
    language: "Italian",
    temperature: 15,
    capitalCity: false
  },

  {
    name: "Athens",
    country: "Greece",
    language: "Greek",
    temperature: 30,
    capitalCity: false
  },

  {
    name: "London",
    country: "England",
    language: "English",
    temperature: 28,
    capitalCity: true
  }
];

for (var i = 0; i < cities.length; i++) {
  console.log(cities[i].temperature);
}
