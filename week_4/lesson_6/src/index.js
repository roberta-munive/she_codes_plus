function get_day_of_week_full_length (day_of_week_as_digit){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day_of_week_as_digit];

}

function get_month_full_length(month_as_digit){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month_as_digit];
}

// JS Challenge 1
// Log the current date

let now = new Date();
console.log(now);
let date = now.getDate();
console.log(date);

// JS Challenge 2
// Log the number of milliseconds in the current time

let msec = now.getMilliseconds();
console.log(msec);

// JS Challenge 3
// Log the current day

let day = now.getDay();
console.log(day);

// JS Challenge 4
// Log the current year

let year = now.getFullYear();
console.log(year);

// JS Challenge 5
// Log the current month
let month_as_digit = now.getMonth();
console.log(month_as_digit);

// JS Challenge 6
// Display the current date following the following format: Today is Thursday, April 4, 2020

let day_as_digit = now.getDay();
day = get_day_of_week_full_length(day_as_digit);

month_as_digit = now.getMonth();
let month = get_month_full_length(month_as_digit);
console.log(`Today is ${day}, ${month} ${date}, ${year}`);

/* JS Challenge 7
Create a function formatDate which returns a date following this format: Thursday, April 4, 2020 Call this function with the current time Log the result such as console.log(formatDate(new Date())); */

function formatDate(date_to_format){

    let day_as_digit = date_to_format.getDay();
    let day = get_day_of_week_full_length(day_as_digit);

    let month_as_digit = date_to_format.getMonth();
    let month = get_month_full_length(month_as_digit);

    let date = date_to_format.getDate();

    let year = date_to_format.getFullYear();

    let date_str = `${day}, ${month} ${date}, ${year}`;
    
    return date_str;

}

console.log(formatDate(new Date()));