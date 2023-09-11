const obj = {a:1,b:2,c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{A:1,B:2,C:3}"))

console.log(JSON.parse('{"A":1,"B":2,"C":3}')) //Os valores têm que OBRIGATORIAMENTE ser marcados com aspas duplas, enquanto o objeto geral, com aspas simples. 
                                               //Os valores não precisam de aspas


console.log(JSON.parse('{"nome":"Igor", "Endereco":{"Rua":"Rua Roberval Luna de Oliveira", "Numero":116}, "Telefones":[986697588,983456657,993525567]}'))