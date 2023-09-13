const cores = ["laranja","amarelo","branco","vermelho"]
cores.pop()
console.log(cores);

cores.push('azul');
console.log(cores);

cores.shift();
console.log(cores);

cores.unshift('verde');
console.log(cores);

cores.splice(0,2,"amarelo","verde");
console.log(cores);

const coresPrincipais = cores.slice(0,2);
console.log(`
    Cores: ${cores}
    Cores principais: ${coresPrincipais}
`);