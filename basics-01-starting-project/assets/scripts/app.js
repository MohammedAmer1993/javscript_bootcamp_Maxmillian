const defaultValue = 0;
let currentValue = defaultValue;
let logArray = [];
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
logBtn.addEventListener("click", log);

function log() {
  for (let i = 0; i < logArray.length; ++i) {
    console.log(logArray[i]);
  }
}
function getInputValue() {
  return parseInt(userInput.value);
}
function outputLog(operator, valueBefore, inputValue) {
  let logObj = {};
  const outputLogMsg = `${valueBefore} ${operator} ${inputValue}`;
  logObj = {
    operation: operator,
    intial: valueBefore,
    input: inputValue,
    result: currentValue,
  };
  logArray.push(logObj);
  outputResult(currentValue, outputLogMsg);
}

function doCalculation(calculation) {
  const inputValue = getInputValue();
  if (
    calculation !== "ADD" &&
    calculation !== "MULTIPLY" &&
    calculation !== "SUBTRACT" &&
    calculation !== "DIVIDE"
  ) {
    return;
  }
  const valueBefore = currentValue;

  if (calculation === "ADD") {
    currentValue += inputValue;
    outputLog("+", valueBefore, inputValue);
  } else if (calculation === "MULTIPLY") {
    currentValue *= inputValue;
    outputLog("*", valueBefore, inputValue);
  } else if (calculation == "SUBTRACT") {
    currentValue -= inputValue;
    outputLog("-", valueBefore, inputValue);
  } else if (calculation == "DIVIDE") {
    if (!inputValue) {
      return;
    }
    currentValue /= inputValue;
    outputLog("/", valueBefore, inputValue);
  }
}

function add() {
  doCalculation("ADD");
}

function multiply() {
  doCalculation("MULTIPLY");
}

function subtract() {
  doCalculation("SUBTRACT");
}

function divide() {
  doCalculation("DIVIDE");
}
