const fs = require('fs');

const produto = {
        nome:'Celular',
        preco: 1249.99,
        desconto: 0.15
}

fs.writeFile(__dirname+'/arquivoGerado.json',JSON.stringify(produto),err=>{//diretorio, nome do arquivo, o que você quer persistir, tratamento de erro
    console.log(err||'arquivo salvo')
})