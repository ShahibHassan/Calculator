const eqLine = document.querySelector("#eqLine");
const output = document.querySelector("#output");
let firstOperand = "";
let op = "";
let secondOperand = "";

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  if (parseFloat(b) === 0) {
    return "NaN";
  } else {
    return parseFloat(a) / parseFloat(b);
  }
}

const operate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
  }
};

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  clearAll();
});

const clearAll = () => {
  output.textContent = "";
  eqLine.textContent = "";
  op = "";
  firstOperand = "";
  secondOperand = "";
};

const firstArgs = (input) => {
  if (input == "." && firstOperand.includes(".")) {
    return;
  }
  firstOperand += input;
  output.textContent += input;
};

const secondArgs = (input) => {
  if (input == "." && secondOperand.includes(".")) {
    return;
  }
  secondOperand += input;
  output.textContent += input;
};

const digits = document.querySelectorAll("button");
digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    if (
      Number.isInteger(parseFloat(digit.textContent)) ||
      digit.textContent == "."
    ) {
      if (op === "") {
        firstArgs(digit.textContent);
      } else if (firstOperand !== "" && op !== "") {
        secondArgs(digit.textContent);
      }
    } else if (
      !Number.isInteger(parseFloat(digit.textContent)) &&
      digit.textContent != "=" &&
      digit.textContent != "Clear" &&
      op == ""
    ) {
      op = digit.textContent;
      console.log(op);
      output.textContent = "";
    }
    //check to see if the clicked button is an operator
  });
});

const operators = document.querySelectorAll(".operation");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (firstOperand !== "" && secondOperand !== "") {
      output.textContent = "";
      output.textContent = `${operate(
        parseFloat(firstOperand),
        parseFloat(secondOperand),
        op
      )}`;
      eqLine.textContent = `${firstOperand} ${op} ${secondOperand} =`;
      firstOperand = operate(
        parseFloat(firstOperand),
        parseFloat(secondOperand),
        op
      );
      secondOperand = "";
      console.log(firstOperand);
      op = operator.textContent;
    }
  });
});

const sum = document.querySelector("#sum");
sum.addEventListener("click", () => {
  console.log("sum clicked");
  if (secondOperand == "") {
    output.textContent = firstOperand;
  } else {
    let answer = operate(
      parseFloat(firstOperand),
      parseFloat(secondOperand),
      op
    );
    //console log varaibles
    console.log(
      `first: ${firstOperand} | second: ${secondOperand} | operator: ${op}`
    );
    //output Answer to equation
    output.textContent = `${answer}`;
    // add eqaution to eqLine
    eqLine.textContent = `${firstOperand} ${op} ${secondOperand} =`;
    // make firstOperand = eq output
    firstOperand = output.textContent;
    // make secondOperand and operator = ''
    secondOperand = "";
    op = "";
  }
});
