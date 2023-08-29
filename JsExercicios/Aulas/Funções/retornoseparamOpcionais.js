function area(largura, altura){
    const area = largura*altura
    if (area>20){
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}

const quadrado = 20 //Variável como parâmetro

console.log(area(2,2))
console.log(area(2))// retorna NaN
console.log(area())// retorna NaN
console.log(area(2,3,5))// vai ignorar o terceiro parâmetro
console.log(area(2, quadrado))