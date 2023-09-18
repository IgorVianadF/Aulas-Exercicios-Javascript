Array.prototype.filter2=function(callback){
    const Array2 = [];
    for (let index = 0; index < this.length; index++) {
        if(callback(this[index], index, this)){
            Array2.push(this[index]);
        }
        
    }
    return Array2;
}