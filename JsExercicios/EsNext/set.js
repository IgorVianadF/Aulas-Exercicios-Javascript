//set não aceita repetição/não indexada

const times = new Set();
times.add('Vasco');
times.add('Sport');
times.add('Santa Cruz');
times.add('Náutico');
times.add('Vasco');//não vai entrar no Set


console.log(times);
console.log(times.size);//tamanho
console.log(times.has('vasco'));//false, case sensitive
console.log(times.has('Vasco'));
times.delete('Santa Cruz');
console.log(times.has('Santa Cruz'));

const nomes = ['João', 'Maria', 'José', 'João']
const nomesSet = new Set(nomes)//passando nomes de um Array para um Set
console.log(nomesSet);//Ele vai deletar as repetições