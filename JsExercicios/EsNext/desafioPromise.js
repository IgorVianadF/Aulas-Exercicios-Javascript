const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname,'dados.txt');

function lerTexto(caminho){
    return new Promise(resolve=>{
        fs.readFile(caminho, function(err, texto){
            resolve(texto.toString())
        })
    })
}

lerTexto(caminho).then(console.log)