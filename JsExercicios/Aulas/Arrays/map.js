const numeros = [1,2,3,4,5,6,7];

let dobro = numeros.map(e => e*2);//ele vai mapear cada elemento e vai usar a função passada em cada um pra gerar um NOVO array

console.log(dobro);

let valorReais = numeros.map(e=>e*3).map(e=>`R$${parseFloat(e).toFixed(2).replace('.',',')}`);
console.log(valorReais);