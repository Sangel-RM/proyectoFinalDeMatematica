const mate = document.querySelector('.Mate');
const porcentajes = document.querySelector('.Porcentajes');
const estadistica = document.querySelector('.Estadistica');
const analisis_salarial = document.querySelector('.analisis-Salarial');

mate.addEventListener('click',isMateActiveOInactive);
porcentajes.addEventListener('click', isPorcentajesActiveOInactive);
estadistica.addEventListener('click', isEstadisticaActiveOInactive);
analisis_salarial.addEventListener('click',isAnalisis_salarialActiveOInactive);
// quitar y poner las clases inactive para que se abran las otras secciones para hacer los calculos
function isMateActiveOInactive(){
    // este primer condicional es para abrir y cerrar las seccion de las formulas
    if(document.querySelector('.seccionesFormulas.inactive')){
        document.querySelector('.seccionesFormulas.inactive').classList.remove('inactive');
    }

    if(document.querySelector('.formulasMatematicas.inactive')){
        document.querySelector('.formulasMatematicas.inactive').classList.remove('inactive');
    }

    if(!document.querySelector('.porcentajesContainer.inactive')){
        document.querySelector('.porcentajesContainer').classList.add('inactive');
    }else if(!document.querySelector('.estadisticasBasica.inactive')){
        document.querySelector('.estadisticasBasica').classList.add('inactive');
    }else if(!document.querySelector('.analisis_Salarial.inactive')){
        document.querySelector('.analisis_Salarial').classList.add('inactive');
    }
    // dandole colores a la formula seleccionada y quitarndosela a quien la tenga
    if(!document.querySelector(".Mate.botonActivo")){
        document.querySelector(".Mate").classList.add('botonActivo');
    }

    if(document.querySelector('.Porcentajes.botonActivo')){
        document.querySelector('.Porcentajes.botonActivo').classList.remove('botonActivo');
    }else if(document.querySelector('.Estadistica.botonActivo')){
        document.querySelector(".Estadistica.botonActivo").classList.remove('botonActivo');
    }else if(document.querySelector('.analisis-Salarial.botonActivo')){
        document.querySelector('.analisis-Salarial.botonActivo').classList.remove('botonActivo');
    }
}
function isPorcentajesActiveOInactive (){
    // este primer condicional es para abrir y cerrar las seccion de las formulas
    if(document.querySelector('.seccionesFormulas.inactive')){
        document.querySelector('.seccionesFormulas.inactive').classList.remove('inactive');
    }

    if(document.querySelector('.porcentajesContainer.inactive')){
        document.querySelector('.porcentajesContainer.inactive').classList.remove('inactive');
    }

    if(!document.querySelector('.formulasMatematicas.inactive')){
        document.querySelector('.formulasMatematicas').classList.add('inactive');
    }else if(!document.querySelector('.estadisticasBasica.inactive')){
        document.querySelector('.estadisticasBasica').classList.add('inactive');
    }else if(!document.querySelector('.analisis_Salarial.inactive')){
        document.querySelector('.analisis_Salarial').classList.add('inactive');
    }
    // dandole colores a la formula seleccionada y quitarndosela a quien la tenga
    if(!document.querySelector('.Porcentajes.botonActivo')){
        document.querySelector(".Porcentajes").classList.add('botonActivo');
    }
    if(document.querySelector('.Mate.botonActivo')){
        document.querySelector('.Mate.botonActivo').classList.remove('botonActivo');
    }else if(document.querySelector('.Estadistica.botonActivo')){
        document.querySelector(".Estadistica.botonActivo").classList.remove('botonActivo');
    }else if(document.querySelector('.analisis-Salarial.botonActivo')){
        document.querySelector('.analisis-Salarial.botonActivo').classList.remove('botonActivo');
    }

}
function isEstadisticaActiveOInactive(){
    // este primer condicional es para abrir y cerrar las seccion de las formulas
    if(document.querySelector('.seccionesFormulas.inactive')){
        document.querySelector('.seccionesFormulas.inactive').classList.remove('inactive');
    }

    if(document.querySelector('.estadisticasBasica.inactive')){
        document.querySelector('.estadisticasBasica.inactive').classList.remove('inactive');
    }

    if(!document.querySelector('.formulasMatematicas.inactive')){
        document.querySelector('.formulasMatematicas').classList.add('inactive');
    }else if(!document.querySelector('.porcentajesContainer.inactive')){
        document.querySelector('.porcentajesContainer').classList.add('inactive');
    }else if(!document.querySelector('.analisis_Salarial.inactive')){
        document.querySelector('.analisis_Salarial').classList.add('inactive');
    }
    // dandole colores a la formula seleccionada y quitarndosela a quien la tenga
    if(!document.querySelector('.Estadistica.botonActivo')){
        document.querySelector(".Estadistica").classList.add('botonActivo');
    }
    if(document.querySelector('.Mate.botonActivo')){
        document.querySelector('.Mate.botonActivo').classList.remove('botonActivo');
    }else if(document.querySelector('.Porcentajes.botonActivo')){
        document.querySelector(".Porcentajes.botonActivo").classList.remove('botonActivo');
    }else if(document.querySelector('.analisis-Salarial.botonActivo')){
        document.querySelector('.analisis-Salarial.botonActivo').classList.remove('botonActivo');
    }
}
function isAnalisis_salarialActiveOInactive (){
    // este primer condicional es para abrir y cerrar las seccion de las formulas
    if(document.querySelector('.seccionesFormulas.inactive')){
        document.querySelector('.seccionesFormulas.inactive').classList.remove('inactive');
    }

    if(document.querySelector('.analisis_Salarial.inactive')){
        document.querySelector('.analisis_Salarial.inactive').classList.remove('inactive');
    }
    
    if(!document.querySelector('.formulasMatematicas.inactive')){
        document.querySelector('.formulasMatematicas').classList.add('inactive');
    }else if(!document.querySelector('.porcentajesContainer.inactive')){
        document.querySelector('.porcentajesContainer').classList.add('inactive');
    }else if(!document.querySelector('.estadisticasBasica.inactive')){
        document.querySelector('.estadisticasBasica').classList.add('inactive');
    }
    // dandole colores a la formula seleccionada y quitarndosela a quien la tenga
    if(!document.querySelector('.analisis-Salarial.botonActivo')){
        document.querySelector(".analisis-Salarial").classList.add('botonActivo');
    }
    if(document.querySelector('.Mate.botonActivo')){
        document.querySelector('.Mate.botonActivo').classList.remove('botonActivo');
    }else if(document.querySelector('.Porcentajes.botonActivo')){
        document.querySelector(".Porcentajes.botonActivo").classList.remove('botonActivo');
    }else if(document.querySelector('.Estadistica.botonActivo')){
        document.querySelector('.Estadistica.botonActivo').classList.remove('botonActivo');
    }
}