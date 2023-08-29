function soma1(a, b, c){
    a=a || 1 //valores padrões
    b=b || 1
    c=c || 1
    return a + b + c
}


console.log(soma1(),soma1(3),soma1(1,2,3),soma1(0,0,0))//como 0 retorna como falso, no "ou" usado na função, eles vão receber o valor padrão de qualquer jeito

//outros métodos mais novos para valores padrões
function soma2(a, b, c){
    a = a !== undefined ? a : 1 //metodo 2
    b = 1 in arguments ? b : 1 //metodo 3
    c = isNaN(c)? 1 : c//metodo 4
    return a+b+c
}

console.log(soma2(),soma2(3),soma2(1,2,3),soma2(0,0,0))