Array.prototype.filter2=function(callback){
    const Array2 = [];
    for (let index = 0; index < this.length; index++) {
        if(callback(this[index], index, this)){
            Array2.push(this[index]);
        }
        
    }
    return Array2
}


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},
]

    
console.log(produtos.filter2(p=>p.fragil=true).filter2(p=>p.preco>=500))