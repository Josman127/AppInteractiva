// trayendo local storage de personal
let array_personal = JSON.parse(localStorage.getItem("local_array_personal")) || [];

// personal a seleccionar para uso de calculadora.
array_personal.forEach((element, id) => {
    const body = document.getElementById("bodyE");

    const fila = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    td1.innerText = id+1;
    td2.innerText = element.documento;
    td3.innerText = element.nombre;
    td4.innerText = element.correo;
    td5.innerText = element.numero;

    fila.appendChild(td1);
    fila.appendChild(td2);
    fila.appendChild(td3);
    fila.appendChild(td4);
    fila.appendChild(td5);

    body.appendChild(fila);


});

