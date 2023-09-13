console.log(typeof Array);
console.log(typeof new Array);
console.log(typeof []);

const frutas =["Manga","Pera","Uva",];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
frutas.push('Lixía');

console.log(frutas);
frutas[10] = "Siriguela";
frutas.sort()
console.log(frutas);
frutas.splice(1,2,"Mango","Pear");//(qual indice quer trabalhar,quantos vai querer deletar,o que vai querer adicioinar)
console.log(frutas)