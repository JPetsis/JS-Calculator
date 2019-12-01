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

// Mathematical operations

performOperation = (e) => {
  var operator = e.target.innerText;

  switch (operator) {
  case '+':
    pendingVal = displayVal;
    displayVal = '0';
    displayResult.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('+');
    break;
  case '-':
    pendingVal = displayVal;
    displayVal = '0';
    displayResult.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('-');
    break;
  case '×':
    pendingVal = displayVal;
    displayVal = '0';
    displayResult.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('*');
    break;
  case '÷':
    pendingVal = displayVal;
    displayVal = '0';
    displayResult.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('/');
    break;
  case '=':
    evalStringArray.push(displayVal);
    var evaluation = eval(evalStringArray.join(''));
    displayVal = evaluation + '';
    displayResult.innerText = displayVal;
    evalStringArray = [];
    break;
  default:
    break;
  }
}



// Add event listeners to buttons

for (let i = 0; i < btnNumbers.length; i++) {
  btnNumbers[i].addEventListener('click', updateDisplayVal)
}

for (let i = 0; i < btnOperators.length; i++) {
  btnOperators[i].addEventListener('click', performOperation);
}

// Clear button

clear.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  displayResult.innerHTML = displayVal;
}

// Decimal point

decimal.onclick = () => {
  if(!displayVal.includes('.')) {
    displayVal += '.';
  }
  displayResult.innerText = displayVal;
}
