// cuadrado
const ladoCuadrado = document.querySelector('#BasePerimetroCuadrado');
const calcularCuadradoButton = document.querySelector('.PerimetroAreaCuadradoButton');
const rsLadosCuadrado = document.querySelector('.rsLadosC');
const rsPerimetroCuadrado = document.querySelector('.rsPerimetroC');
const rsAreaC = document.querySelector('.rsAreaC');
// 
calcularCuadradoButton.addEventListener('click',cuadradoPerimetro);
function cuadradoPerimetro(){
    const lados = Number(ladoCuadrado.value);
    if(lados >= 1){
        const perimetroCuadrado = lados * 4;
        const areaCuadrado = lados * lados;
        if(document.querySelector('.resultadosCuadrado.inactive')){
            document.querySelector('.resultadosCuadrado.inactive').classList.remove('inactive');
        }
        rsLadosCuadrado.innerText = lados;
        rsPerimetroCuadrado.innerText = perimetroCuadrado;
        rsAreaC.innerText = areaCuadrado;
        // limpiando inputs
        ladoCuadrado.value = "";
    }
}

// Triangulo
// base para dar la funcion y pquitarle la propiedad inactive
const calcularTrianguloButton = document.querySelector('.PerimetroAreaTrianguloButton');

// tomando los valores de los inputs
const baseT = document.querySelector('#BaseTriangunlo');
const lado1T = document.querySelector('#Lado1Triangulo');
const lado2T = document.querySelector('#Lado2Triangulo');

// introduciendo los valores a los resultado en la lista de html
const rsTrianguloBase = document.querySelector('.rsTrianguloBase');
const rsTrianguloL1 = document.querySelector('.rsTrianguloL1');
const rsTrianguloL2 = document.querySelector('.rsTrianguloL2');
const rsTrianguloPerimetro = document.querySelector('.rsTrangunloPerimetro');
const rsTrangunloArea = document.querySelector('.rsTrianguloArea');
const rsTrianguloTipo = document.querySelector('.rsTrianguloTipo');

calcularTrianguloButton.addEventListener('click', calcularTriangulo);

function calcularTriangulo(){
    const base = Number(baseT.value);
    const lado1 = Number(lado1T.value);
    const lado2 = Number(lado2T.value);
    // let tipo;
    // if((lado1**2 + lado2**2) < base**2){
    //     tipo = 'Obtusángulo';
    // }else if((lado1**2 + lado2**2) > base**2){
    //     tipo = 'Acutángulo';
    // }else if((lado1**2 + lado2**2) === base**2){
    //     tipo = 'Rectangulo';
    // }else if(lado1 == lado2 && lado2 == base){
    //     tipo = 'Equilátero';
    // }else if(lado1 == lado2 || lado2 == base || lado1 == base){
    //     tipo = 'Isóceles';
    // }else if(lado1 != lado2 && lado2 != base){
    //     tipo = 'Escaleno';
    // }
    if(lado1 >= 1 && lado2 >= 1 && base >= 1){
        const perimetro = lado1 + lado2 + base;
        const superimetro = perimetro / 2;
        const area = Math.sqrt(superimetro * (superimetro - lado1) * (superimetro - lado2) * (superimetro - base));
        if(document.querySelector('.resultadosTriangulo.inactive')){
            document.querySelector('.resultadosTriangulo.inactive').classList.remove('inactive');
        }
        rsTrianguloBase.innerText = base;
        rsTrianguloL1.innerText = lado1;
        rsTrianguloL2.innerText = lado2;
        rsTrianguloPerimetro.innerText = perimetro;
        rsTrangunloArea.innerText = area.toFixed(2);
        // rsTrianguloTipo.innerText = tipo;
        baseT.value = "";
        lado1T.value = "";
        lado2T.value = "";
    }
}
// circulo
const radioCirculoV = document.querySelector('#RadioCirculo');
const calcularCirculoButton = document.querySelector('.PerimetroAreaCirculoButton');

// insertando los resultados en el html
const rsRadioCirculo = document.querySelector('.rsRadioCirculo');
const rsDiametroCirculo = document.querySelector('.rsDiametroCirculo');
const rsCircunferenciaCirculo = document.querySelector('.rsCircunferenciaCirculo');
const rsAreaCirculo = document.querySelector('.rsAreaCirculo');

calcularCirculoButton.addEventListener('click',calcularCirculo);

function calcularCirculo(){
    const radio = Number(radioCirculoV.value);
    if(radio >= 1){
        const diametro = radio * 2;
        const circunferencia = diametro * Math.PI;
        const area = (radio ** 2) * Math.PI;
        if(document.querySelector('.resultadosCirculo.inactive')){
            document.querySelector('.resultadosCirculo.inactive').classList.remove('inactive');
        }
        rsRadioCirculo.innerText = radio;
        rsDiametroCirculo.innerText = diametro;
        rsCircunferenciaCirculo.innerText = circunferencia.toFixed(2);
        rsAreaCirculo.innerText = area.toFixed(2);
        // limpiando input
        radioCirculoV.value = "";
    }
}
