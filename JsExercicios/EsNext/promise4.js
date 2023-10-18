function funcionarOuNao(valor,chanceErro){
    return new Promise((resolve, reject)=>{
        if(Math.random()<chanceErro){
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('testando...',0.5)
    .then(v=>console.log(`Valor: ${v}`),
          err=>console.log(`Erro tratado: ${err}`))
    .catch(err=>console.log(`Erro: ${err}`))//inutilizado
    .then(()=>console.log('Fim'))