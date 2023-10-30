let weather1 = {};
console.log(weather1);

let weather = { temperature: 43, humidity: 87 };
console.log(weather);

console.log(`humidity: ${weather.humidity}`);
console.log(`temperature: ${weather.temperature}`);

weather.windSpeed = 8;
console.log(`windSpeed: ${weather.windSpeed}`);

console.log(`windSpeed: ${weather["windSpeed"]}`);
console.log(`temperature: ${weather["temperature"]}`);
console.log(`humidity: ${weather["humidity"]}`);

let forecast = [
  { day: "Monday", temperature: 48 },
  { day: "Tuesday", temperature: 60 },
  { day: "Wednesday", temperature: 62 },
  { day: "Thursday", temperature: 68 },
  { day: "Friday", temperature: 73 },
  { day: "Saturday", temperature: 81 },
  { day: "Sunday", temperature: 82 }
];

console.log(forecast);
