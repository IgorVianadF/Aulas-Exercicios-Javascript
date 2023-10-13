function gerarNumero(min, max){
    if(min>max){
        [min,max]=[max,min]
    }
    return new Promise(resolve=>{
        const fator = max-min +1
        const aleatorio = parseInt(Math.random()*fator)+min
        resolve(aleatorio)
    })
}

gerarNumero(1,60)
.then(num=>`Número gerado: ${num}`)
.then(console.log)