// botones calculadora
const input = document.getElementById('input');
const buttons = document.querySelectorAll('.calc-btn');
const borrar = document.getElementById('clear');
const igual = document.getElementById('igual');

// trayendo local storage
let array_nombre = JSON.parse(localStorage.getItem("local_array_nombre"));

array_nombre.forEach(element => {
    const empleados = document.getElementById("empleados");
    const option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    empleados.appendChild(option);
});

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

igual.addEventListener('click', () => {
    try {
        currentInput = eval(currentInput).toString();
        input.value = currentInput;
    } catch (e) {
        input.value = 'Error';
        currentInput = '';
    }
});


// imprimir tabla

function imprimirH(){
    const body  =document.getElementById("body");

    
}