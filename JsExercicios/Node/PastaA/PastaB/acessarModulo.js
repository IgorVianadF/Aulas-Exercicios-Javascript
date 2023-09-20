const moduloA=require("../../moduloA");
console.log(moduloA.ola);

const saudacao=require('./PastaC')//Ao acessar a pasta ele automaticamente procura o index.js, não é necessário referencia-lo 
console.log(saudacao.ola);

const http = require('http')
http.createServer((req,res)=>{
    res.write('Badday')
    res.end()
}).listen(8080);
