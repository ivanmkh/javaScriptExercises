/*
* Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
*/

function getNumbers() {
    let numbersAreTaken = true;
    
    let firstNumber = document.getElementById("firstNumber").value;
    if (!firstNumber) {
        alert('Enter the first number!');
        numbersAreTaken = false;
    }

    let secondNumber = document.getElementById("secondNumber").value;
    if (!secondNumber) {
        alert('Enter the second number!');
        numbersAreTaken = false;
    }

    return {
        firstNumber,
        secondNumber,
        numbersAreTaken
    };
}

function multiply() {
    if (!getNumbers().numbersAreTaken) return;
    document.getElementById("result").innerHTML = getNumbers().firstNumber * getNumbers().secondNumber;
}

function divide() {
    if (!getNumbers().numbersAreTaken) return;
    document.getElementById("result").innerHTML = getNumbers().firstNumber / getNumbers().secondNumber;
}