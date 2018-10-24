var listaDeTareas = [
    
];

function AgregaraLista(tarea) {
    listaDeTareas[listaDeTareas.length] = tarea;
}

function EliminarTarea(tarea) {

    for(var i = 0 ; i < listaDeTareas.length ; i++){
        if(listaDeTareas[i] == tarea){
            listaDeTareas.splice(i,1);
        }
    }
}

function MostrarTareas() {
    for(var i = 0 ; i < listaDeTareas.length ; i++){
        console.log(listaDeTareas[i]);
    }
}

function AgregarTarea(descripcionText){
    var nuevaTarea = document.createElement("li");
    nuevaTarea.className = "tarea";
    nuevaTarea.innerHTML  = descripcionText;

    var lista = document.getElementById("lista");
    lista.appendChild(nuevaTarea)
}

function Agregar() {
    var boton = document.getElementById("agregar");
    boton.addEventListener("click", function(){
        var ingresarTarea = prompt("Introduzca la tarea");
        AgregarTarea(ingresarTarea);

    }, false);
}

/*
function Agregar(tituloText, descripcionText) {
    var nuevo = document.createElement("div");
    nuevo.className="cartel";
    nuevo.innerHTML = "<h2>"+tituloText+"</h2><p>"+descripcionText+"</p>" ;

    var center = document.getElementById("center");
    center.appendChild(nuevo);

}

Agregar("Max", "LALALALLALALALA");
Agregar("Carlos", "LOLOLOLOLOLOLOLOLO");
*/

/*AgregarTarea("HOLAAAAAAAAAAAAa");
AgregarTarea("CHAOOOOO");*/
Agregar(AgregarTarea);

