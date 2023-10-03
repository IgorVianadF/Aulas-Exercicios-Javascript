//Spread com Objeto
const funcionario = {nome:'Maria', salario:12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone);

//Spread com Array
const grupoA = ['João', 'Maria', 'José']
const grupoB = ['Cláudia', ...grupoA, 'Andréia']

console.log(grupoB);
