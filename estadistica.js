// seleccionando los botones de las estadistica
const selectPromedio = document.querySelector('#selectPromedio');
const selectMediana = document.querySelector('#selectMediana');
const selectModa = document.querySelector('#selectModa');
const calcularButton = document.querySelector('.calcularResultadosPMM');
// seleccionando los inputs para la funcion de crear los inputs 
const inputValorPorsentaje1 = document.querySelector('#valorPorsentaje1');
const inputValorPorsentaje2 = document.querySelector('#valorPorsentaje2');
const inputs_porsentajes = [inputValorPorsentaje1, inputValorPorsentaje2];
const containerInputs = document.querySelector('.containerInputs');
// creando la funsion de añadir mas inputs para calcular el promedio , moda y mediana
const addInput = document.querySelector('.añadirInput');
const deleteInput = document.querySelector('.quitarInput');
addInput.addEventListener('click', addInputs)
deleteInput.addEventListener('click', deleteInputs)
// creando las variables para insertarles los resultados amigo 
const resultadosSumaValoresP = document.querySelector('.resultadosSumaValoresP');
const canditadVPMM = document.querySelector('.canditadVPMM');
// esta parte es la de insertar pero aqui tienes que insertar que tipo de 
// formula estas utilizando
const ResultadosPMM = document.querySelector('.ResultadosPMM');
const ResultadosPMMV = document.querySelector('.ResultadosPMMV');
const noSelectClass = document.querySelector('.noSelectClass');

// activando los botones
selectMediana.addEventListener('click', activar_funcion);
selectModa.addEventListener('click', activar_funcion);
selectPromedio.addEventListener('click', activar_funcion);
calcularButton.addEventListener('click',calcularPMM)

// creando la funcion de validar si la funcion esta activa
let  function_activa = false;
function activar_funcion(e){
    const botones = [selectPromedio, selectMediana, selectModa];
    botones.forEach(boton =>{
        if(e.target == boton){
            function_activa = e.target.id;
            boton.classList.add('button--promedios-active');
            boton.classList.remove('button--promedios');
        }else{
            boton.classList.add('button--promedios');
            boton.classList.remove('button--promedios-active');
        }
    })
}

// creando la funsion para calcular los porsejates con las formulas P,M,M
function calcularPMM(){
    const valores = inputs_porsentajes.map(input => parseInt(input.value));
    const totalValores = valores.reduce((acc,sum) => acc + sum);

    let resultados = '';
    resultadosSumaValoresP.innerText = '';
    canditadVPMM.innerText = '';
    noSelectClass.innerText = '';
    ResultadosPMMV.innerText = '';
    
    if(function_activa && verificarValores()){
        if(function_activa == 'selectMediana'){
            resultados = `Resultado de la mediana: ${PlatziMath.calcularMediana(valores)}`;
        }else if(function_activa == 'selectPromedio'){
            resultados = `Resultado del promedio: ${PlatziMath.calcularPromedio(valores)}`;
        }else if(function_activa == 'selectModa'){
            resultados = `Resultado de la moda: ${PlatziMath.calcularModa(valores)}`;
        }
        if(document.querySelector('.resltadosPorsentajesPMM.inactive')){
            document.querySelector('.resltadosPorsentajesPMM.inactive').classList.remove('inactive');
        }
        // cerrando esta parte para que aparezcan los valores
        if(!document.querySelector('.noEstanlosDatos.inactive')){
            document.querySelector('.noEstanlosDatos').classList.add('inactive')
        }

        // abriendo los valores solo si estan inactivos 

        if(document.querySelector('.sumaValoresPMM.inactive') && document.querySelector('.cantidadValoresPMM.inactive')
        && document.querySelector('.resultadosPMM.inactive')){
            document.querySelector('.sumaValoresPMM.inactive').classList.remove('inactive');
            document.querySelector('.cantidadValoresPMM.inactive').classList.remove('inactive');
            document.querySelector('.resultadosPMM.inactive').classList.remove('inactive');
        }else if(document.querySelector('.sumaValoresPMM.inactive') && document.querySelector('.cantidadValoresPMM.inactive')){
            document.querySelector('.sumaValoresPMM.inactive').classList.remove('inactive');
            document.querySelector('.cantidadValoresPMM.inactive').classList.remove('inactive');
        }
        resultadosSumaValoresP.innerText = `Suma de los valores: ${totalValores}`;
        canditadVPMM.innerText = `Cantidad de valores: ${inputs_porsentajes.length}`;
        ResultadosPMMV.innerText = `${resultados}`;
    
    }else if(function_activa && !verificarValores()){
        if(document.querySelector('.resltadosPorsentajesPMM.inactive')){
            document.querySelector('.resltadosPorsentajesPMM.inactive').classList.remove('inactive');
        }
        if(document.querySelector('.noEstanlosDatos.inactive')){
            document.querySelector('.noEstanlosDatos').classList.remove('inactive');
        }
        // este condicional es para ocultar todos los valores solo si no cumple con el prime condicional
        if(!document.querySelector('.sumaValoresPMM.inactive') && !document.querySelector('.cantidadValoresPMM.inactive') && !document.querySelector('.resultadosPMM.inactive')){
            document.querySelector('.sumaValoresPMM').classList.add('inactive');
            document.querySelector('.cantidadValoresPMM').classList.add('inactive');
            document.querySelector('.resultadosPMM').classList.add('inactive');
        }
        noSelectClass.innerText = 'Por favor ingrese el valor de todos los campos';
    }else if(!function_activa && verificarValores()){
        if(document.querySelector('.resltadosPorsentajesPMM.inactive')){
            document.querySelector('.resltadosPorsentajesPMM.inactive').classList.remove('inactive');
        }
        if(document.querySelector('.noEstanlosDatos.inactive')){
            document.querySelector('.noEstanlosDatos').classList.remove('inactive');
        }
        // este condicional es para ocultar todos los valores solo si no cumple con el prime condicional
        if(!document.querySelector('.sumaValoresPMM.inactive') && !document.querySelector('.cantidadValoresPMM.inactive')){
            document.querySelector('.sumaValoresPMM').classList.add('inactive');
            document.querySelector('.cantidadValoresPMM').classList.add('inactive');
        }
        noSelectClass.innerText = 'Por favor seleccione una funcion';
    }else{
        if(document.querySelector('.resltadosPorsentajesPMM.inactive')){
            document.querySelector('.resltadosPorsentajesPMM.inactive').classList.remove('inactive');
        }
        if(document.querySelector('.noEstanlosDatos.inactive')){
            document.querySelector('.noEstanlosDatos').classList.remove('inactive');
        }
        // este condicional es para ocultar todos los valores solo si no cumple con el prime condicional
        if(!document.querySelector('.sumaValoresPMM.inactive') && !document.querySelector('.cantidadValoresPMM.inactive') 
        && !document.querySelector('.resultadosPMM.inactive')){
            document.querySelector('.sumaValoresPMM').classList.add('inactive');
            document.querySelector('.cantidadValoresPMM').classList.add('inactive');
            document.querySelector('.resultadosPMM').classList.add('inactive');
        }
        noSelectClass.innerText = 'Por favor seleccione una funcion e ingrese el valor de todos los campos';
    }
}

function addInputs (){
    if(inputs_porsentajes.length < 20){
        const id = inputs_porsentajes.length + 1;
        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', `valorPorsentaje${id}`);
        input.setAttribute('placeholder', `valor ${id}`);
        input.classList.add('inputs');

        containerInputs.appendChild(input);
        inputs_porsentajes.push(input);
    }
}
// creando la funcion para quitar los inputs 
function deleteInputs (){
    if(inputs_porsentajes.length > 2){
        const id = inputs_porsentajes.length;
        document.querySelector(`[id=valorPorsentaje${id}]`).remove();
        inputs_porsentajes.pop();
    }
}

function verificarValores(){
    let validado = true;
    inputs_porsentajes.forEach(input => {
        if(input.value == ''){
            input.style.backgroundColor = 'var(--redNotingValue)';
            validado = false;
        }else{
            input.style.backgroundColor = 'var(--ColorGreenBotton)'
        }
        input.addEventListener('click', function () {
            input.style.backgroundColor = 'var(--VeryDarkBlue)';
        });
    });
    return validado;
}
