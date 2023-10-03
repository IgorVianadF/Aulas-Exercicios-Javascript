//Arrow function

const soma = (a,b) => a+b;
console.log(soma(200,200));

//AF(this)

const lexico1 = () => console.log(this===exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

//Parametro padrão

function log(texto='Padrão'){
    console.log(texto);
}

log('Teste');
log();

//operador rest
function total(...numeros){
    let total =  0
    numeros.forEach(n=> total+=n);
    return total;
}
console.log(total(1,3,5,6,2,6,2,3,))
