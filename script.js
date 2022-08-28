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