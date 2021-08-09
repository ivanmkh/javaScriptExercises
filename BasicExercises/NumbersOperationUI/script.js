function getNumbers() {
    return {
        firstNumber: parseInt(document.getElementById('firstNumber').value),
        secondNumber: parseInt(document.getElementById('secondNumber').value)
    }
}

function add() {
    let {firstNumber, secondNumber} = getNumbers();
    document.getElementById('result').innerHTML = firstNumber + secondNumber;
}

function multiply() {
    let {firstNumber, secondNumber} = getNumbers();
    document.getElementById('result').innerHTML = firstNumber * secondNumber;
}