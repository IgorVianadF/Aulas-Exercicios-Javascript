function criarEmpregado(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30)*(30-faltas)
        }
    }
}

const f1 = criarEmpregado('João',7980, 4)
const f2 = criarEmpregado('Maria',11400,1)
console.log(f1.getSalario(),f2.getSalario())


//Não relacionado
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)