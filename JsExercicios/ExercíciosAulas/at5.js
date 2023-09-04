function mostrarReal(a,b){
 let real = `R$${(a+b).toFixed(2).toString().replace('.',',')}`; 
 return real  
}

console.log(mostrarReal(0.1,0.2));