const subir = document.getElementById("Subir");
const borrar = document.getElementById("borrar");



let algo_array = localStorage.getItem("local_array_nombre");
let array_nombre = algo_array ? JSON.parse(algo_array) : [];



subir.addEventListener("click", ()=>{
    const input = document.getElementById("nombre").value;

    if(input != ""){
        array_nombre.push(input);
    }else{
        alert("Ingrese un nombre de empleado válido.");
    }

    localStorage.setItem("local_array_nombre", JSON.stringify(array_nombre));
    console.log(array_nombre);
})


borrar.addEventListener("click", ()=>{
    localStorage.clear();
    array_nombre = [];
    console.log(array_nombre);
})