Array.prototype.forEach2 = function(funcao){
    for (let index = 0; index < this.length; index++) {
        funcao(this[index],index,this)
    }
}

const numeros = [1,2,3,4,5,6,7,8];

numeros.forEach2(function(nome, i){
    console.log(`${i+1}: ${nome}`);
})
