

const input = document.getElementById('input');
const buttons = document.querySelectorAll('.calc-btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
    currentInput += button.textContent;
    input.value = currentInput;
    });
});

clear.addEventListener('click', () => {
    currentInput = '';
    input.value = '';
});

equals.addEventListener('click', () => {
    try {
        currentInput = eval(currentInput).toString();
        input.value = currentInput;
    } catch (e) {
        input.value = 'Error';
        currentInput = '';
    }
});