let currentNumber = '';
let previousNumber = '';
let operation = undefined;

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber = currentNumber.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentNumber = computation;
    operation = undefined;
    previousNumber = '';
    updateDisplay();
}

function clearResult() {
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentNumber;
}

clearResult();
