let arroba = "Igor Viana"
String.prototype.reverse = function(){
    return this.split('').reverse().join('').toLowerCase()
}

console.log(arroba.reverse())//A função .reverse não existia para strings
 
