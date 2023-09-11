const produto = Object.preventExtensions({
    nome:"Mamao",
    preco:24.60,
    ID: 553
})

produto.validade = "13/11/2023";
produto.ID = 10;
delete produto.nome
console.log(produto);
//Ele não deixa adicionar mais atributos, porém é possível deletar e modificar

const produto2 = {nome:"Jaca",preco:10.20, ID:334, validade: "13/01/2024"}
Object.seal(produto2);

produto2.cor = "Azul";
delete produto2.ID;
produto2.nome= "Manga";
console.log(produto2);
//Nesse caso, o seal deixa apenas modificar os atributos já existentes

const produto3 = {nome:"Sorvete",preco:5.50,ID:2}
Object.freeze(produto3);
produto3.nome = "Picole";
produto3.validade = "20/10/2022";
delete produto3.ID;

console.log(produto3);
//O object.freeze() impede qualquer modificação no objeto, ele apenas permite a visualização
