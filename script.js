const calcDisplay = document.querySelector('.calcDisplay');
const calcDisplayDefault = 0;
const clearBtn = document.getElementById('clearBtn');
const posNegBtn = document.getElementById('posNegBtn');
const percentBtn = document.getElementById('percentBtn');
const operatorBtns = document.querySelectorAll('.functionBtns');
const operatorBtnArray = [...operatorBtns];

let displayValue = "";
let runningTotal = null;
let secondNum = null;
let currOperator = null;
let allowDecimal = true;

function clearClick() {
    if (clearBtn.textContent === 'C') {
        if ((calcDisplay.textContent === runningTotal) && (displayValue === '')) {
            runningTotal = null;
            currOperator = null;
            displayValue = calcDisplay.textContent;
            clearBtn.textContent = 'AC';
    
            operatorBtnArray.forEach(element => {
                element.style.backgroundColor = 'rgb(255, 95, 32)';
            });
        }
        else {
            secondNum = null;
            displayValue = "";
            calcDisplay.textContent = calcDisplayDefault;
            clearBtn.textContent = 'AC';
        }
    }
    else {
        runningTotal = null;
        currOperator = null;
        allowDecimal = true;
        displayValue = "";
        calcDisplay.textContent = calcDisplayDefault;
        clearBtn.textContent = 'AC';

        operatorBtnArray.forEach(element => {
            element.style.backgroundColor = 'rgb(255, 95, 32)';
        });
    }
}

function posNegClick() {
    if (calcDisplay.textContent !== '0') {
        if (calcDisplay.textContent.startsWith('-')) {
            displayValue = displayValue.slice(1);
            calcDisplay.textContent = calcDisplay.textContent.slice(1);
        }
        else if (!calcDisplay.textContent.startsWith('-')) {
            calcDisplay.textContent = '-' + calcDisplay.textContent;
            displayValue = '-' + displayValue;
        }
    }
}

function percentClick() {
    calcDisplay.textContent = parseFloat(calcDisplay.textContent / 100);
    displayValue = parseFloat(displayValue / 100);
}

function operatorClick(operatorText, operatorID) {
    
    let currElement = document.getElementById(operatorID);
    
    operatorBtnArray.forEach(element => {
        element.style.backgroundColor = 'rgb(255, 95, 32)';
    });

    if (operatorText != '=') {
        currElement.style.backgroundColor = 'rgb(255, 146, 103)';
    }

    if (runningTotal === null) {
        runningTotal = calcDisplay.textContent;
        displayValue = "";
    }
    else {
        secondNum = calcDisplay.textContent;
    }

    if ((runningTotal !== null) && (secondNum !== null)) {
        runningTotal = operate(currOperator, runningTotal, secondNum);
        calcDisplay.textContent = runningTotal;
        displayValue = "";
        secondNum = null;
    }
    currOperator = operatorText;
    if (currOperator === "=") {
        runningTotal = null;
    }
}

function numClick(btnText) {
        if (btnText === '.') {
            if (allowDecimal === true) {
                displayValue = '0' + btnText;
                allowDecimal = false;
            }
        }
        else {
            if (!((btnText === '0') && (calcDisplay.textContent === '0')))
            displayValue += btnText;
        }
        
        if (displayValue === '') {
            calcDisplay.textContent = calcDisplayDefault;
            clearBtn.textContent = 'C';
        }
        else {
            calcDisplay.textContent = displayValue;
            clearBtn.textContent = 'C';
        }
}

function addAllEventListeners() {
    addCalcFunctionEventListeners();
    addOperatorEventListeners();
    addNumEventListeners();
}

function addCalcFunctionEventListeners() {
    clearBtn.addEventListener('click', () => {
        clearClick();
    });
    posNegBtn.addEventListener('click', () => {
        posNegClick();
    })
    percentBtn.addEventListener('click', () => {
        percentClick();
    })
}

function addOperatorEventListeners() {
    operatorBtnArray.forEach(element => {
        element.addEventListener('click', () => {
            operatorClick(element.textContent, element.id);
        });
    });
}

function addNumEventListeners() {
    calcDisplay.textContent = calcDisplayDefault;
    const numBtns = document.querySelectorAll('.numBtns');
    const numBtnArray = [...numBtns];
    numBtnArray.forEach(element => {
        element.addEventListener('click', () => {
            numClick(element.textContent);
        });
    });
}

function addNums(num1, num2) {
    return num1 + num2;
}

function subtractNums(num1, num2) {
    return num1 - num2;
}

function multiplyNums(num1, num2) {
    return num1 * num2;
}

function divideNums(num1, num2) {
    return num1 / num2;
}

function operate(operatorStr, num1, num2) {
    let answer;
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (operatorStr === "+") {
        answer = addNums(a, b);
    }
    else if (operatorStr === "−") {
        answer = subtractNums(a, b);
    }
    else if (operatorStr === "×") {
        answer = multiplyNums(a, b);
    }
    else if (operatorStr === "÷") {
        answer = divideNums(a, b);
    }
    return answer;
}

addAllEventListeners();

// OLD CODE - DOES NOT WORK PROPERLY

// let operatorActive = false;


// function operatorClick(operatorText) {
//     if (operatorActive === false) {
//         storedDisplay = displayValue;
//         displayValue = "";
//         operatorActive = true;
//         currOperator = operatorText;
//     }
//     else {
//         displayValue = operate(currOperator, storedDisplay, displayValue);
//         calcDisplay.textContent = displayValue;
//     }
// }


// function numClick(btnText) {
//     if (calcDisplay.textContent === '0') {
//         displayValue += btnText;
//         calcDisplay.textContent = displayValue;
//         return;
//     }
//     else {
//         if (operatorActive) {
//             displayValue = "";
//             calcDisplay.textContent = displayValue;
//         }
//         displayValue += btnText;
//         calcDisplay.textContent = displayValue;
//         return;
//     }
// }