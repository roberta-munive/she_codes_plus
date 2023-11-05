// Challenge 1
// Log li with id special

let id_special = document.querySelector("#special");
console.log(id_special);

// Challenge 2
// Log all li with class of country

let lis_country = document.querySelectorAll("li.country");
console.log(lis_country);

// Challenge 3
// Add class special to the li with id special

id_special.classList.add("special");

// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)

id_special.innerHTML = "Italy <small>IT</small>";
