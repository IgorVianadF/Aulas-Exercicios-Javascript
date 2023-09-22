const fs = require('fs');

const caminho = __dirname+'/arquivo.json'

//Forma síncrona
const conteudo = fs.readFileSync(caminho,'utf-8');
console.log(conteudo);

//Forma assíncrona
fs.readFile(caminho,'utf-8',(err, conteudo)=>{
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
})

const config = require('./arquivo.json')
console.log(config.db);

fs.readdir(__dirname,(err,arquivos)=>{
    console.log("Conteudo da pasta")
    console.log(arquivos);
})