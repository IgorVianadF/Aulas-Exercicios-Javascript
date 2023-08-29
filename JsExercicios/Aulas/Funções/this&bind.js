const pessoa = {
    saudacao : "Bom dia",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar.bind(pessoa)//Bind vai garantir que a função vai sempre apontar para o parâmetro, no caso, o objeto pessoa
falar()
