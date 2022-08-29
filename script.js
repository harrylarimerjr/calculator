const calcDisplay = document.querySelector('.calcDisplay');
const displayDefault = 0;
let displayNums = displayDefault;

const clearBtn = document.querySelector('#clearBtn');


function clickFunction(btnText) {
    if (calcDisplay.textContent === '0') {
        calcDisplay.textContent = btnText;
        return;
    }
    else {
        calcDisplay.textContent += btnText
        return;
    }
}

const addNumEventListeners = function() {
    calcDisplay.textContent = displayNums;
    const numBtns = document.querySelectorAll('.numBtns');
    const numBtnArray = [...numBtns];
    numBtnArray.forEach(element => {
        element.addEventListener('click', () => {
            clickFunction(element.textContent);
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
    if (operatorStr === "+") {
        answer = addNums(num1, num2);
    }
    else if (operatorStr === "-") {
        answer = subtractNums(num1, num2);
    }
    else if (operatorStr === "*") {
        answer = multiplyNums(num1, num2);
    }
    else if (operatorStr === "/") {
        answer = divideNums(num1, num2);
    }
    else {
        return "ERROR";
    }
    return answer;
}

addNumEventListeners();