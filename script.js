const screen = document.getElementById("screen");
const numButtons = document.getElementById("num-buttons");
const funcButtons = document.getElementById("func-buttons");

// const arrays for each button label
const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '=']
const functions = ['/', 'X', '-', '+']

/* init function called on page load */
function init() {
    genCalculator();
}

/* function that generate all calculator buttons */
function genCalculator() {
    for(let i = 0; i < 12; i++) { // 11 button element creation for 0-9, dot(.) and equal(=)
        const numButton = document.createElement('button');
        numButton.textContent = numbers[i];
        numButton.classList.add('button');
        numButtons.appendChild(numButton);
        numButton.addEventListener('click', buttonClick);
    }

    for(let i = 0; i < functions.length; i++) { // 4 button element creation for math functions (+, -, *, /)
        const funcButton = document.createElement('button');
        funcButton.textContent = functions[i];
        funcButton.classList.add('button');
        funcButtons.appendChild(funcButton);
    }
}

function buttonClick() {
    console.log(this.textContent);
}