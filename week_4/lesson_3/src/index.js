// Challenge
// 1. Create a function isWindy
// 2. Add a speed parameter to the function
// 3. If speed is greater than 5, alert ‘It is windy’
// 4. Else, alert ‘It is not windy’
// 5. Call the function twice with different arguments to test both scenarios


function isWindy(wind_speed){
    if (wind_speed > 5){
        alert("It is windy");
    }else{
        alert("It is not windy");
    }
}

let wind_speed = prompt("What is the wind speed?");
isWindy(wind_speed);

