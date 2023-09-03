class Pessoa{
    constructor(nome){
    this.nome = nome
    }

    falar(){
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João');
p1.falar();

//ArrowFunction

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)//Não é necessário o this
    }
}

const p2 = criarPessoa('João');
p2.falar();