let firstOperand = '';
let operator = '';
secondOperand = '';
    
    function add(a,b) {
        return a + b;
    }

    function subtract(a,b) {
        return a - b;
    }

    function multiply(a,b) {
        return a * b;
    }

    function divide(a,b) {
        return a/b;
    }

function operate(firstNum, operator, secondNum){
    switch(operator) {
        case '+':
            return add(firstNum, secondNum);
            break;
        case '-':
            return subtract(firstNum, secondNum);
            break;
        case '*':
            return multiply(firstNum, secondNum);
            break;
        case '/':
            return divide(firstNum, secondNum);
            break;
    }
}

const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equal');
const result = document.querySelector('.result');


function firstArgs(input) {
    firstOperand += input;
    result.textContent = firstOperand;
}

numbers.forEach(number => {
    number.addEventListener('click', function() {
        let value = number.textContent;
        console.log(value)
        result.textContent += valuel
    })
})