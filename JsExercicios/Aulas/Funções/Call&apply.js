function getPreco(imposto=0, moeda="R$"){
    return `${moeda} ${this.preco*(1-this.desc)*(1-imposto)}`
}

const produto = {
    nome: 'Computador',
    preco: 4589,
    desc: 0.15,
    getPreco
}

const carro = {preco: 49990, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17,'$'))//call passa os parametros dentro da funcao
console.log(getPreco.apply(carro,[0.17,"$"]))//apply passa os parametros em um array