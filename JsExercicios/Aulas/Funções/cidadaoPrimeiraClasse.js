//Forma literal
function fun1(){}

//Armazenando em uma variável

const fun2 = function(){}

//Arrays

const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3));

//Objetos

const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar());

//Fução como parâmetro

function run(fun){
    fun()
}

run(function () {console.log('Executando...') })

//Função pode conter outra função

function soma(a, b){
    return function (c) {
        console.log(a+b+c);
    }
}

soma(5, 5)(5);

const retornoFun = soma(1,3)
retornoFun(3)//resultado = 7