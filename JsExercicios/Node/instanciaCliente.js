const instanciaUnicaA = require('./instanciaUnica');
const instanciaUnicaB= require('./instanciaUnica');

instanciaUnicaA.inc();
instanciaUnicaA.inc();
console.log(instanciaUnicaB.valor);

const instanciaNovaA = require('./instanciaNova')();//Esses parênteses são muito importantes, pois estamos querendo chamar uma função(a função arrow de instanciaNova.js)
const instanciaNovaB = require('./instanciaNova')();//então precisamos dos parênteses pra se referir à função, se não, estaria referindo-se a um objeto

instanciaNovaA.inc();
instanciaNovaA.inc();
console.log(instanciaNovaA.valor,instanciaNovaB.valor);