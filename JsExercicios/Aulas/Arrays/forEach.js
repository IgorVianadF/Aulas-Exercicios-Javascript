const numeros = [1,2,3,4,5,6,7,8];

numeros.forEach(function(nome, i){
    console.log(`${i+1}: ${nome}`);
})//metodo mais longo

numeros.forEach((nome,i)=>console.log(`${i+1}: ${nome}`));//arrow function
