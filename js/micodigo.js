// botones calculadora
const input = document.getElementById('input');
const buttons = document.querySelectorAll('.calc-btn');
const borrar = document.getElementById('clear');
const igual = document.getElementById('igual');

// trayendo local storage de personal
let array_personal = JSON.parse(localStorage.getItem("local_array_personal"));

// local storage de historial de la calculadora
let validar_h = localStorage.getItem("local_h");
let array_input = validar_h ? JSON.parse(validar_h) : [];

// personal a seleccionar para uso de calculadora.
array_personal.forEach(element => {             
    const empleados = document.getElementById("empleados");
    const option = document.createElement("option");
    option.value = element.nombre;
    option.innerText = element.nombre;
    empleados.appendChild(option);
});

let currentInput = '';

buttons.forEach(button => {                     //botones
    button.addEventListener('click', () => {
    currentInput += button.textContent;
    input.value = currentInput;
    });
});

clear.addEventListener('click', () => {             //borrar input
    currentInput = '';
    input.value = '';
});

igual.addEventListener('click', () => {            //resultado
    try {
        currentInput = eval(currentInput).toString();
        input.value = currentInput;         //imprimiendo resultado

        array_input.push(input.value);
        localStorage.setItem("local_h", JSON.stringify(array_input)); //guardando resultado
        histo()
        imprimirH(); //imprimiendo historial de personal
    } catch (e) {
        input.value = 'Error';
        currentInput = '';
    }
});

// borrar historial
const boton = document.getElementById("borrar-historial");
boton.addEventListener("click", ()=>{
    localStorage.removeItem("local_h");
    array_doc = [];
    localStorage.removeItem("local_doc");
    array_nombre = [];
    localStorage.removeItem("local_nombre");
    alert("historial borrado");
    imprimirH()
})

// local storage para documento y personal en el historial

let validar_doc = localStorage.getItem("local_doc");
let array_doc = validar_doc ? JSON.parse(validar_doc) : [];
let validar_nombre = localStorage.getItem("local_nombre");
let array_nombre = validar_nombre ? JSON.parse(validar_nombre) : [];

function histo(){
    const empleado = document.getElementById("empleados").value;
    array_personal.forEach(id =>{
        if(id.nombre == empleado){
            array_nombre.push(id.nombre);
            array_doc.push(id.documento);
            
            localStorage.setItem("local_doc", JSON.stringify(array_doc));
            localStorage.setItem("local_nombre", JSON.stringify(array_nombre));
        }
    })
}

// imprimir tabla
imprimirH()
function imprimirH(){
    const body = document.getElementById("body");
    body.innerHTML = "";

    console.log("doc "+array_doc);
    console.log("nombre "+array_nombre);
    console.log("input "+array_input);

    for(let i = 0 ; i < array_input.length ; i++){
        const fila = document.createElement("tr");
        const td0 = document.createElement("td");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
    
        td0.innerText = i+1;
        td1.innerText = array_doc[i];
        td2.innerText = array_nombre[i];
        td3.innerText = array_input[i];
    
        fila.appendChild(td0);  
        fila.appendChild(td1);
        fila.appendChild(td2);
        fila.appendChild(td3);
    
        body.appendChild(fila);
    }
}