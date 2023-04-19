const datalist_persona = document.querySelector('#select_persona');
const datalist_empresa = document.querySelector('#select_empresa');
const input_persona = document.querySelector('#NombrePersona');
const input_empresa = document.querySelector('#NombreEmpresa');
const salario_persona_div = document.querySelector('.rsAnalisisPersona');
const salario_empresa_div = document.querySelector('.rsAnalisisEmpresa');
const buttons_salario = {
    salario_persona : document.querySelector('.button--salario-persona'),
    salario_empresa : document.querySelector('.button--salario-empresa')
};

for (const button in buttons_salario){
    buttons_salario[button].addEventListener('click', imprimirSalarios);
}
salarios.forEach(salario => {
    const option = document.createElement('option');
    option.setAttribute('value', salario.name);
    datalist_persona.appendChild(option);
});

class Persona{
    constructor(nombre){
        this.nombre = nombre;
        this.salarios = this.getSalarios();
        this.proyeccion_salario = Persona.proyectarSalarios(this.salarios);
        this.trabajos = this.getTrabajos();
    };
    getSalarios(){
        const persona = salarios.find(salario => salario.name == this.nombre);
        if(persona){
            const salarios_persona = persona.trabajos.map(trabajo => trabajo.salario);
            return salarios_persona;
        }else{
            salario_persona_div.style.display = 'flex';
            salario_persona_div.innerHTML = `<p><strong> No existe esta persona en la base de datos </strong></p>`;
        }
    };
    getTrabajos(){
        const persona = salarios.find(salario => salario.name == this.nombre);
        return persona.trabajos;
    };
    static proyectarSalarios(salarios){
        const porcentajes_aumentos = [];
        for (const index in salarios) {
           if(index < (salarios.length-1)){
                const salarioActual = salarios[parseInt(index) + 1];
                const salarioAnterior = salarios[index];
                const aumento = ((salarioActual * 100) / salarioAnterior) - 100;
                porcentajes_aumentos.push(aumento);
           }
        }
        const proyeccion_porcentaje = PlatziMath.calcularMediana(porcentajes_aumentos);
        const ultimo_salario = salarios[salarios.length - 1];
        const aumento = (ultimo_salario*proyeccion_porcentaje)/100;
        const nuevo_salario = ultimo_salario + aumento;
        return nuevo_salario;
    };
    print(){
        if(this.getSalarios()){
            salario_persona_div.style.display = 'flex';
            salario_persona_div.innerHTML = `<p><strong> Análisis salarial de ${this.nombre} </strong> </p>
            <p><strong>Proyeccion salario: </strong>${Math.ceil(this.proyeccion_salario)} $</p>`;
    
            let texto = '';
            this.trabajos.forEach(trabajo => {
                texto += `<p><strong>Año: </strong>${trabajo.year}, <strong>Empresa: </strong>${trabajo.empresa}, <strong>Salario: </strong> ${trabajo.salario} $</p>`
            });
    
            salario_persona_div.innerHTML += texto;
        }
    }
};

function imprimirSalarios(e){
    if(e.target.classList.contains('button--salario-persona') && input_persona.value != ''){
        const persona = new Persona(input_persona.value);
        persona.print();
        if(document.querySelector('.rsAnalisisPersona.inactive')){
            document.querySelector('.rsAnalisisPersona.inactive').classList.remove('.inactive');
        }
        input_persona.value = "";
    }else if(e.target.classList.contains('button--salario-empresa') && input_empresa.value != ''){
        const empresa = new Empresa(input_empresa.value);
        empresa.print();
        if(document.querySelector('.rsAnalisisEmpresa.inactive')){
            document.querySelector('.rsAnalisisEmpresa.inactive').classList.remove('.inactive');
        }
        input_empresa.value = "";
    }

}

// empresas 
const empresas = estructurarEmpresas(salarios);
function estructurarEmpresas(arraySalarios){
    const empresas = {};
    for(const salario of arraySalarios){
        for(const trabajo of salario.trabajos){
            if(!empresas[trabajo.empresa]){
                empresas[trabajo.empresa] = {};
            }
            if(!empresas[trabajo.empresa][trabajo.year]){
                empresas[trabajo.empresa][trabajo.year] = [];
            }
            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
        } 
    }
    return empresas;
}

Object.keys(empresas).forEach(empresa => {
    const option = document.createElement('option');
    option.setAttribute('value', empresa);
    datalist_empresa.appendChild(option);
});

class Empresa{
    constructor(name){
        this.name = name;
    };
    medianaSalarios(year){
        if(!empresas[this.name]){
           console.warn('No existe información de la empresa referenciada');
        }else if(!empresas[this.name][year]){
            console.warn('La empresa referenciada no dio salarios en ese año');
        }else{
            return PlatziMath.calcularMediana(empresas[this.name][year]);
        }
    };
    proyeccionSalario(option=0){
        if(!empresas[this.name]){
            console.warn('No existe información de la empresa referenciada');
        }else if(empresas[this.name] && option == 0){
            const empresaYears = Object.keys(empresas[this.name]);
            // const promedios = [];
            // empresaYears.forEach(year => {
            //     promedios.push(medianaSalarioEmpresas(empresa, year));
            // });
            const promedios = empresaYears.map(year => this.medianaSalarios(year));
            return Persona.proyectarSalarios(promedios);
        }else if(empresas[this.name] && option == 1){
            const lowest_salarios = [];
            const highest_salarios = [];
            for (const year in empresas[this.name]) {
                const salarios_ordenados = empresas[this.name][year].sort((a,b) => a - b);
                lowest_salarios.push(salarios_ordenados[0]);
                highest_salarios.push(salarios_ordenados[salarios_ordenados.length -1]);
            };
            return {
                'Salario mas bajo': PlatziMath.calcularMediana(lowest_salarios),
                'Salario mas alto': PlatziMath.calcularMediana(highest_salarios)
            }
        }
    };
    print(){
        salario_empresa_div.style.display = 'flex';
        if(empresas[this.name]){
            salario_empresa_div.innerHTML = `<p><strong>Empresa: </strong> ${this.name}</p>
            <p>Promedio salarios pagados por año</p>`
            const years = [];
            
            Object.keys(empresas[this.name]).forEach(year => {
                salario_empresa_div.innerHTML += `<p><strong>${year}: </strong>${this.medianaSalarios(year)} $</p>`;
                years.push(year);
            })
            const ultimo_anio = Math.max(...years);
            salario_empresa_div.innerHTML += `<p><strong>Proyeccion salarial ${ultimo_anio+1}: </strong>${Math.ceil(this.proyeccionSalario())} $</p>`
        }else{
            salario_empresa_div.innerHTML = `<p><strong>No existe esta empresa en la base de datos.</strong></p>`
        }
    }
}




function top10Salarios(salarios){
    // const personas = salarios.map(salario => salario.name);
    const salarios_globales = salarios.map(salario => {
        return PlatziMath.calcular_mediana(getSalarios(salario.name, salarios));
    });
    salarios_globales.sort((a,b) => a-b);
    const cantidad_top10 = ~~(salarios_globales.length * 0.10);
    const top10 = salarios_globales.slice(
        salarios_globales.length - cantidad_top10,
        salarios_globales.length
    );
    const medianaTop10 = PlatziMath.calcular_mediana(top10);
    return medianaTop10;
}