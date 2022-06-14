const secondaryDisplay = document.querySelector('.secondary-display');
const primaryDisplay = document.querySelector('.primary-display');
const buttons = document.querySelector('.buttons');

const clear = document.querySelector('.ac');
const plusMinus = document.querySelector('.pm');
const percent = document.querySelector('.percent');

const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');

let operatorMemory;

const getPrimaryValueAsStr = () => primaryDisplay.textContent;

const getSecondaryValueAsStr = () => secondaryDisplay.textContent;

const getPrimaryValueAsNum = () => parseFloat(getPrimaryValueAsStr());

const getSecondaryValueAsNum = () => {
  if(secondaryDisplay.textContent.includes('−') || secondaryDisplay.textContent.includes('+') || secondaryDisplay.textContent.includes('×') || secondaryDisplay.textContent.includes('÷')){
    return parseFloat(secondaryDisplay.textContent.replace(/[×−+÷]/g,''))
  } else {
    return parseFloat(getSecondaryValueAsStr());
  }
};

// When I click a number ...
buttons.addEventListener('click', (e) => {
  if(e.target.classList.contains('number')) {
    const primaryDisplayVal = getPrimaryValueAsStr();
    const numberVal = e.target.textContent;
    if(primaryDisplayVal !== '0') {
      primaryDisplay.textContent = primaryDisplayVal + numberVal;
    } else {
      primaryDisplay.textContent =  numberVal;
    }
  }
})

// When I click an operator ...
buttons.addEventListener('click', (e) => {
  if(e.target.classList.contains('operator')) {
    const primaryDisplayVal = getPrimaryValueAsStr();
    const operatorVal = e.target.textContent;
    if(primaryDisplayVal !== '0') {
      secondaryDisplay.textContent = primaryDisplayVal + operatorVal;
      primaryDisplay.textContent = '0';
      operatorMemory = operatorVal;
    }
  }
})

// When I click equal ...
buttons.addEventListener('click', (e) => {
  if(e.target.classList.contains('equal')) {
    const fistValue = getPrimaryValueAsNum();
    const secondValue = getSecondaryValueAsNum();
    let result;
    if(operatorMemory) {
      switch(operatorMemory) {
        case '+':
          result = fistValue + secondValue;
          break;
        case '-':
          result = fistValue - secondValue;
          break;
        case 'x':
          result = fistValue * secondValue;
          break;
        case '÷':
          result = fistValue / secondValue;
          break;
      }
      primaryDisplay.textContent = result;
      secondaryDisplay.textContent = null;
      operatorMemory = null;
    }
  }
})

// When I click decimal ...
buttons.addEventListener('click', e => { 
  if(e.target.classList.contains('decimal') && !primaryDisplay.innerText.includes('.')) {
    primaryDisplay.textContent = primaryDisplay.textContent + '.';
   }   
})

// When I click funcitons ...
buttons.addEventListener('click', e => {  //add event listening to all buttons
  if (e.target.classList.contains('function')) {
    const primaryDisplayVal = primaryDisplay.textContent;
    const functionType = e.target.textContent;
    switch (functionType) {
      case 'AC':
        primaryDisplay.textContent = '0';
        secondaryDisplay.textContent = '';
        fistValueMemory = null;
        secondValueMemory = null;
        break;
      case '±':
        if(primaryDisplayVal !== '0'){
          if (!primaryDisplay.textContent.includes('-')) {
            primaryDisplay.textContent = '-' + primaryDisplay.textContent;
          } else {
            primaryDisplay.textContent = primaryDisplay.textContent.split('-')[1];
          }
          fistValueMemory = primaryDisplay.textContent;
          break;
        }
      case '%':
        if(primaryDisplayVal !== '0'){
          secondaryDisplay.textContent = primaryDisplay.textContent/100;
          primaryDisplay.textContent='0';
        }
      default:
        break;
    }
  }
  });