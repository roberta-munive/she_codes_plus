// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

function addActionsToTemperatureBtn(event) {
  event.preventDefault();
  alert("It is 18 degrees");
  event.target.innerHTML = "18 degrees";
}

let temperatureBtn = document.querySelector("#temp-btn");

temperatureBtn.addEventListener("click", addActionsToTemperatureBtn);
