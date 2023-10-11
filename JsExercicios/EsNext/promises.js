function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(frase)
                //reject(frase)
            }, segundos*1000)
    })
}

falarDepoisDe(3, 'TesteFrase')
    .then(frase=>frase.concat('?!?'))
    .then(outraFrase=>console.log(outraFrase))
    .catch(e=>console.log(e))