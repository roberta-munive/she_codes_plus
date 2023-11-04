// Challenge 1
// 1. Modify the function is Windy and return true if the speed is greater than 5 and false if not
// 2. Call the function and alert ‘It is windy’ if it is windy, Else, alert ‘It is not windy’

// function isWindy(speed) {
//   if (speed > 5) {
//     alert("It is windy");
//   } else {
//     alert("It is not windy");
//   }
// }

function isWindy(speed){
  return speed > 5;
}

let wind_speed = prompt("What is the wind speed?");
if (isWindy(wind_speed)){
  alert("It is windy");
}else{
  alert("It is not windy");
}


// Challenge 2
// 1. Add unit parameter to isWindy
// 2. if greater than 5 and unit is metric, return true, else return false
// 3. Test both scenarios
// isWindy(2, 'imperial') should return false
// isWindy(20, 'metric') should return true

function isWindyWithUnit(speed, unit){
  if (unit === "metric" && speed > 5){
    return true;
  }

  return false;
}

wind_speed = prompt("What is the wind speed?");
let unit = prompt("What is the unit (imperial or metric)");
unit = unit.toLowerCase();
if (isWindyWithUnit(wind_speed, unit)){
  alert("It is windy");
}else{
  alert("It is not windy");
}



