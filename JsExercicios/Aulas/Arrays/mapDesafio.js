Array.prototype.map2 = function(callback){
    const Array2 = [];
    for (let index = 0; index < this.length; index++) {
        Array2.push(callback(this[index], index, this));
        
    }
    return Array2;
}




const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de Lapis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}',
];

const arrayJs = (carrinho.map(e=>JSON.parse(e)));
const valores = arrayJs.map2(e=>e.preco);
console.log(valores);
