// darle un descuento a un valor 
const precioDescontar = document.querySelector('#PrecioADescontar');
const valorDescontar = document.querySelector('#Descuento');
const calcularDescuento = document.querySelector('.CalcularDescuento');
const vaciarDatosDescuento = document.querySelector('.VaciarDatosDescuento');

// tomando los elementetos html para intarle el valor
const rsDescuento = document.querySelector('.rsDecuento');
const descuentoMayorA100 = document.querySelector('.DescuentoMayorA100');

// eliminando los div por si el numero es > 100 el cupon y no ocupe tanto espacios
// para solo dejar el dato de que si > 100 no se puede calcular el %
const resultadoFinalDescuento = document.querySelector('.resultadoFinalDescuento');

calcularDescuento.addEventListener('click',calcularDescuentoRecivido);
vaciarDatosDescuento.addEventListener('click',vaciarResultadoDescuentoRecivido);

function calcularDescuentoRecivido(){
    const precio = Number(precioDescontar.value);
    const descuento = Number(valorDescontar.value);
    let nuevoPrecio = (precio * (100 - descuento)) / 100;
    if(precio >= 1 && descuento <= 100 && descuento >= 1){
        if(document.querySelector('.seccionDescuentos.inactive')){
            document.querySelector('.seccionDescuentos.inactive').classList.remove('inactive');
        }
        if(document.querySelector('.resultadoFinalDescuento.inactive')){
            document.querySelector('.resultadoFinalDescuento.inactive').classList.remove('inactive');
            if(!document.querySelector('.DescuentoMayorA100.inactive')){
                document.querySelector('.DescuentoMayorA100').classList.add('inactive');
            }
            rsDescuento.innerText = nuevoPrecio + ' $';
        }else if(!document.querySelector('.resultadoFinalDescuento.inactive')){
            rsDescuento.innerText = nuevoPrecio + ' $';
        }
    }
    else if(descuento > 100 && precio >= 1){
        if(document.querySelector('.seccionDescuentos.inactive')){

            document.querySelector('.seccionDescuentos.inactive').classList.remove('inactive');
            document.querySelector('.resultadoFinalDescuento').classList.add('inactive');
            if(document.querySelector('.DescuentoMayorA100.inactive')){
                document.querySelector('.DescuentoMayorA100.inactive').classList.remove('inactive');
            }
            if(!document.querySelector('.resultadoFinalDescuento.inactive')){
                document.querySelector('.resultadoFinalDescuento').classList.add('inactive');
            }
            descuentoMayorA100.innerText = `el decuento debe ser de 1 a 100 o no puede poner numeros negativos para descontar`
        
        }else if(!document.querySelector('.seccionDescuentos.inactive')){
            if(document.querySelector('.resultadoFinalDescuento')){
                document.querySelector('.resultadoFinalDescuento').classList.add('inactive');
            }
            if(document.querySelector('.DescuentoMayorA100.inactive')){
                document.querySelector('.DescuentoMayorA100.inactive').classList.remove('inactive');
            }
            if(!document.querySelector('.resultadoFinalDescuento.inactive')){
                document.querySelector('.resultadoFinalDescuento').classList.add('inactive');
            }
            descuentoMayorA100.innerText = `el decuento debe ser de 1 a 100 o no puede poner numeros negativos para descontar`
        }
    }      
}

function vaciarResultadoDescuentoRecivido(){
    precioDescontar.value = '';
    valorDescontar.value = '';
    document.querySelector('.seccionDescuentos').classList.add('inactive');
}

// ahora vamos con los cupones amigo 

const precio_a_DescontarConCupon = document.querySelector('#PrecioADescontarConCupon');
const cupon_a_Utilizar = document.querySelector('#Cupon');
const aplicarDescuento = document.querySelector('.AplicarDescuento');
const vaciarDatosDecuentoConCuponesButton = document.querySelector('.VaciarDatosDecuentosCupones');

// tomando los elementos html para insertarles los resultados 
const descuentoCupon = document.querySelector('.DescuentoCupon');
const valorDescuento =  document.querySelector('.ValorDescuento');
const cuponNoExiste = document.querySelector('.cuponNoExiste');

aplicarDescuento.addEventListener('click', calculandoDescuentoConCupones)
vaciarDatosDecuentoConCuponesButton.addEventListener('click',vaciarDatosDecuentoConCupones);

// Creando los cupones :)
const listaCupones = [];
listaCupones.push({
    nombre: 'Dixtrix',
    descuento: 30,
});
listaCupones.push({
    nombre:'Master-x', 
    descuento:60,
});
listaCupones.push({ 
    nombre:'Xforse',
    descuento: 5,
});
listaCupones.push({
    nombre:'Sxml', 
    descuento: 10,
});
listaCupones.push({
    nombre:'LostXtrix',
    descuento: 40,
});
listaCupones.push({
    nombre:'Defter',
    descuento: 20,
});
listaCupones.push({
    nombre:'Shein-D',
    descuento: 13,
});
listaCupones.push({
    nombre:'LasXtris',
    descuento: 20,
});
listaCupones.push({
    nombre:'TerraPlan',
    descuento: 4,
});
listaCupones.push({
    nombre:'Leguen', 
    descuento: 90,
});
listaCupones.push({
    nombre:'DTXTP',
    descuento: 8,
});
listaCupones.push({
    nombre:'LPTM', 
    descuento: 45,
});
listaCupones.push({
    nombre:'Dante', 
    descuento: 12,
});
listaCupones.push({
    nombre:'Dimitrix', 
    descuento: 35,
});
listaCupones.push({
    nombre:'Landa', 
    descuento: 46,
});
listaCupones.push({
    nombre:'Xports', 
    descuento: 23,
});
listaCupones.push({
    nombre:'LaCrinch', 
    descuento: 28,
});
listaCupones.push({
    nombre:'Dota', 
    descuento: 12,
});
listaCupones.push({
    nombre:'CiberPuck', 
    descuento: 30,
});
listaCupones.push({
    nombre:'MasterLeguen',
    descuento: 95
});
// añadiendo los values en el input de cupones dandoles los valores de los nombre


function calculandoDescuentoConCupones(){
    const precio = Number(precio_a_DescontarConCupon.value);
    const cupon = cupon_a_Utilizar.value;
    let descuento;
    function isCuponInArray(cuponElement){
        return cuponElement.nombre == cupon;
    }
    const cuponInArray = listaCupones.find(isCuponInArray);
        let cupoNoExisteV;
            if(cuponInArray){
                descuento = cuponInArray.descuento;
            }else if(!cuponInArray){
                cupoNoExisteV = `lo siento amigo tu cupon no existe`;
            }
        let nuevoPrecio = (precio * (100 - descuento)) / 100;
        if(cuponInArray && precio >= 1){
            if(document.querySelector('.ResultadoCuponesDecuentos.inactive')){
                document.querySelector('.ResultadoCuponesDecuentos.inactive').classList.remove('inactive');

                if(document.querySelector('.descuentoCupon.inactive') && document.querySelector('.PrecioFinalCupon.inactive')){
                    document.querySelector('.descuentoCupon.inactive').classList.remove('inactive');
                    document.querySelector('.PrecioFinalCupon.inactive').classList.remove('inactive');
                    
                    // ocultado el parrafo si el cupon no existe
                    document.querySelector('.cuponNoExiste').classList.add('inactive');

                    descuentoCupon.innerText = `${descuento} %`
                    valorDescuento.innerText = `${nuevoPrecio} $`
                }
            }else if(!document.querySelector('.ResultadoCuponesDecuentos.inactive')){
                if(document.querySelector('.descuentoCupon.inactive') &&
                    document.querySelector('.PrecioFinalCupon.inactive')){
                        document.querySelector('.descuentoCupon.inactive').classList.remove('inactive');
                        document.querySelector('.PrecioFinalCupon.inactive').classList.remove('inactive');
                    }
                    
                    // ocultado el parrafo si el cupon no existe
                    document.querySelector('.cuponNoExiste').classList.add('inactive');

                if(!document.querySelector('.descuentoCupon.inactive') && !document.querySelector('.PrecioFinalCupon.inactive')){
                    descuentoCupon.innerText = `${descuento} %`
                    valorDescuento.innerText = `${nuevoPrecio} $`
                }
            }
        }else if(!cuponInArray && precio >= 1 && cupon != ""){
            if(document.querySelector('.ResultadoCuponesDecuentos.inactive')){
                document.querySelector('.ResultadoCuponesDecuentos.inactive').classList.remove('inactive');
                if(document.querySelector('.cuponNoExiste.inactive')){
                    document.querySelector('.cuponNoExiste.inactive').classList.remove('inactive');

                    // ocultando los resultado de el descuento con el cupon
                    document.querySelector('.descuentoCupon').classList.add('inactive');
                    document.querySelector('.PrecioFinalCupon').classList.add('inactive');


                    cuponNoExiste.innerText = cupoNoExisteV;
                }
            }else if(!document.querySelector('.ResultadoCuponesDecuentos.inactive')){
                if(document.querySelector('.cuponNoExiste.inactive')){
                    document.querySelector('.cuponNoExiste.inactive').classList.remove('inactive');
                }
                    cuponNoExiste.innerText = cupoNoExisteV;

                    // ocultando los resultado de el descuento con el cupon
                    document.querySelector('.descuentoCupon').classList.add('inactive');
                    document.querySelector('.PrecioFinalCupon').classList.add('inactive');
            }
        }
}
function vaciarDatosDecuentoConCupones(){
    precio_a_DescontarConCupon.value = '';
    cupon_a_Utilizar.value = '';
    if(!document.querySelector('.ResultadoCuponesDecuentos.inactive')){
        document.querySelector('.ResultadoCuponesDecuentos').classList.add('inactive');
        document.querySelector('.descuentoCupon').classList.add('inactive');
        document.querySelector('.PrecioFinalCupon').classList.add('inactive');
        document.querySelector('.cuponNoExiste').classList.add('inactive');
    }
}