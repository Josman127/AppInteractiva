const subir = document.getElementById("Subir");
const go = document.getElementById("go");
const hrf = document.getElementById("hrf"); 


const borrar = document.getElementById("borrar");

const nombre = document.getElementById("nombre");
const documento = document.getElementById("documento");
const correo = document.getElementById("correo");
const numero = document.getElementById("numero");


let algo_array = localStorage.getItem("local_array_personal");
let array_personal = algo_array ? JSON.parse(algo_array) : [];

go.addEventListener("click", ()=>{
    if(array_personal.length > 0){
        hrf.href = "calculadora.html";
    }else{
        alert("Ingrese mínimo un personal para ir a la calculadora");
    }
})

subir.addEventListener("click", ()=>{
    let nombreV = nombre.value;
    let documentoV = documento.value;
    let correoV = correo.value;
    let numeroV = numero.value;

    if(nombreV != "" && documentoV != "" && correoV != "" && numeroV != ""){

        let json = {
            nombre: nombreV,
            documento: documentoV,          // agregando personal al array.
            correo: correoV,
            numero: numeroV
        }
        array_personal.push(json);

    }else{
        alert("Ingrese correctamente los datos del empleado.");
    }

    nombre.value = "";
    documento.value = "";
    correo.value = "";
    numero.value = "";
    localStorage.setItem("local_array_personal", JSON.stringify(array_personal));
    console.log(array_personal);
})


borrar.addEventListener("click", ()=>{
    localStorage.clear();
    array_personal = [];
    console.log(array_personal);
})