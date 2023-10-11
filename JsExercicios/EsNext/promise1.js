const primeiroElemento= (Arrayoustring)=>Arrayoustring[0]
const segundoElemento = (Arrayoustring)=>Arrayoustring[1]
const letraMinuscula = letra=>letra.toLowerCase();

new Promise((resolve)=>{
    resolve(['Ana', 'Bia', 'Claudia']);
})
    .then(segundoElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)