function esperarPor(tempo = 2000){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(),tempo)
    })
}

 /*esperarPor(2000)
    .then(()=>console.log('Executando promise...'))
    .then(esperarPor)
    .then(()=>console.log('Executando promise...'))
    .then(esperarPor)
    .then(()=>console.log('Executando promise...'))
    .then(esperarPor)*/

    function retornarValor(){
        return new Promise(resolve=>{
            setTimeout(()=>resolve(10),5000)
        })
    }

    async function retornarValorRapido(){
        return 20
    }

    async function executar(){
         let valor = await retornarValorRapido()

         await esperarPor(1500)
         console.log(`Async/Await ${valor}...`)
         await esperarPor(1500)
         console.log(`Async/Await ${++valor}...`)
         await esperarPor(1500)
         console.log(`Async/Await ${++valor}...`)

         return ++valor
    }

    async function executarDeVerdade(){
        const valor = await executar()
        console.log(valor)
    }

    executarDeVerdade()