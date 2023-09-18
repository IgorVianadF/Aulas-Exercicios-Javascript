Array.prototype.reduce2 = function(callback, inicial){
    const indiceInicial = inicial?0:1 
    let acumulador = this[0]||inicial
    for (let i=indiceInicial;i<this.length;i++){
        acumulador = callback(acumulador,this[i],i)
    }
    return acumulador
}