const prod1 = {
    nome: '',
    preco: 45
}

const prod2 = {    
    nome: '',
    preco: 44

}

//...Trabalhoso!!!



//Factory simples
function criarProduto(nome,preco){
    return{
        desconto: 10,
        nome,
        preco,
        precoComDesconto: preco - (preco*0.1)
    }
}

console.log(criarProduto('Hamburguer Artesanal',32));
console.log(criarProduto('Salgadinho',9.90))
