const calcDisplay = document.querySelector('.calcDisplay');
const calcDisplayDefault = 0;
let displayValue = "";
const clearBtn = document.getElementById('clearBtn');

let runningTotal = null;
let secondNum = null;
let currOperator = null;
let allowDecimal = true;

function clearButton () {
    if (runningTotal !== null) {
        secondNum = null;
        displayValue = "";
        calcDisplay.textContent = calcDisplayDefault;
        clearBtn.textContent = "AC";
    }
    else {
        runningTotal = null;
        currOperator = null;
        allowDecimal = true;
        displayValue = "";
        calcDisplay.textContent = calcDisplayDefault;
        clearBtn.textContent = "AC";
    }
}

function operatorClick(operatorText) {
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
        if (btnText === ".") {
            if (allowDecimal === true) {
                displayValue = "0" + btnText;
                allowDecimal = false;
            }
        }
        else {
            displayValue += btnText;
        }
        calcDisplay.textContent = displayValue;
        clearBtn.textContent = "C";
        return;
}

function addAllEventListeners() {
    addClearEventListener();
    addOperatorEventListeners();
    addNumEventListeners();
}

function addClearEventListener() {
    clearBtn.addEventListener('click', () => {
        clearButton();
    })
}

function addOperatorEventListeners() {
    const operatorBtns = document.querySelectorAll('.functionBtns');
    const operatorBtnArray = [...operatorBtns];
    operatorBtnArray.forEach(element => {
        element.addEventListener('click', () => {
            operatorClick(element.textContent);
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
    else {
        return "ERROR";
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