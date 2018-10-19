var listaDeTareas = [];

function AgregarTarea(tarea) {
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