Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){

    if (typeof nota !== 'number'){
        console.log("Nota inválida")
        return;
    }

    if (nota.entre(9,10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log("Nota inválida")
    }
}

imprimirResultado(10)
imprimirResultado(7.5)
imprimirResultado(6.98)
imprimirResultado(3.22)
imprimirResultado("lula")
imprimirResultado(-1)