let country = "Guinea Bissau";
let city = " Sydney   ";
let place = "School";
let attraction = "Opera House";

country = country.replace(" ", "-");
console.log(country);

city = city.trim();
console.log(city);

attraction = attraction.toLowerCase();
console.log(attraction);

place = place.toUpperCase();
console.log(place);

attraction = "Opera House";
country = country.replace("-", " ");
place = place.toLowerCase();

let message = `I went to vist the ${attraction} in ${city}, right next to my ${place}.  Now, I'm getting ready for my trip to ${country}!`;
console.log(message);
