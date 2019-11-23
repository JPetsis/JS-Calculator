// Selectors

const decimal = document.getElementById("decimal")
const clear = document.getElementById("clear")
const displayResult = document.getElementById("displayNumbers")
const btnNumbers = document.getElementsByClassName("btnNumber")
const btnOperators = document.getElementsByClassName("btnOperators")

// Variables

var displayVal = '0';
var pendingVal;
var evalStringArray = [];

// Updating display

updateDisplayVal = (e) => {
  var btnText = e.target.innerText;
  if(displayVal === "0") { 
     displayVal = ""; 
  }

// Append the content of the button

  displayVal += btnText;
  displayResult.innerText = displayVal;
}





// Add event listeners to buttons

for (let i = 0; i < btnNumbers.length; i++) {
  btnNumbers[i].addEventListener('click', //function)
}

for (let i = 0; i < btnOperators.length; i++) {
  btnOperators[i].addEventListener('click', //function);
}
