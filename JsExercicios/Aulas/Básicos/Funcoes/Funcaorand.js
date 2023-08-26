function rand([min=10, max=1000]){
    if(min>max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

console.log(rand([20, 1000]));


const d1 = new Date()
console.log(d1.getTime());    