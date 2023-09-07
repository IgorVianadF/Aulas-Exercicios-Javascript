const sequencia ={
    _valor:100,//Boas práticas
    get valor(){return this._valor},
    set valor(Valor){
        if(Valor>this._valor){
            this._valor=Valor;
        }
        else(console.log("Valor menor que o anterior!!"));
    }
}
sequencia.valor=90//será ignorado pois é menor, ele irá conferir na chamada do set
console.log(sequencia.valor); 