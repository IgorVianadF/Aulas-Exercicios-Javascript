function pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}
function greet(pessoa){
    console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos de idade!`)
}


const igor = new pessoa("Igor", 18);
greet(igor)