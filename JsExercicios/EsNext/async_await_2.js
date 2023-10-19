function gerarNumero(min, max, numeroProibidos){
    if(min>max){
        [min,max]=[max,min]
    }
    return new Promise((resolve,reject)=>{
        const fator = max-min +1
        const aleatorio = parseInt(Math.random()*fator)+min
        if(numeroProibidos.includes(aleatorio)){
            reject("Numero Proibido!");
        } else(
        resolve(aleatorio)
        )
    })
}

async function gerarMegaSena(qtdNumero){
    try{
    const numeros = []
    for(let _ of Array(qtdNumero).fill()){
        numeros.push(await gerarNumero(1,60,numeros))
    }
    return numeros//resolve
} catch(e){
        throw "que chato!!! erro: "+ e//reject
    }
}

gerarMegaSena(8)
.then(console.log)
.catch(console.log)