/*setTimeout(function(){
    console.log('Executando callback...');
    setTimeout(function(){
        console.log('Executando callback...2');
    },2000)
},2000)*/

function esperarPor(tempo = 2000){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Executando promise')
            resolve()
        },tempo)
    })
}

let p = esperarPor(3000)
    .then(()=>esperarPor())
    .then(esperarPor)