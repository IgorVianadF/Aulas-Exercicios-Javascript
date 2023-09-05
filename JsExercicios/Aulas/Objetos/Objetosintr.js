const carro = {
    montadora: "Fiat",
    preco: 299999,
    dono: {
        nome: "Marco Antonio",
        endereco: {
            rua: "Rua das Amélias",
            numero: 33,
            cidade: "Alteropolis",
            cep: 738293755
        },
    idade: 33
    },
    tamanho: "Grande",

    condutores: [{
        nome: "Junior",
        idade: 37,
        cpf: 17486919486
    },
    {
        nome: "Igor",
        idade: 23,
        cpf: 17481391206
    }
    ],

    calcularValores(){
        return this.condutores[1].nome;
    }
}

console.log(carro.calcularValores());