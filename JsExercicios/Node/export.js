console.log(module.exports===this);
console.log(module.exports===exports);

this.a=1;
exports.b=2;
module.exports.c=3;

exports=null;
console.log(module.exports);

exports = {
    nome: 'Teste'
}

console.log(module.exports);//Continua sendo o mesmo objeto, mesmo mmudando na linha 8 e 11

module.exports  = {
    publico:true,    
}