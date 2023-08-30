let dobro = function (a){
    return 2*a
}

dobro = (a) => {
    return 2*a
}

dobro = a => 2*a //return implícito

console.log(dobro(Math.PI))

let ola = function(){
    return "ola"
}

ola=()=> console.log("Olá!")


function Pessoa() {
    this.idade = 0

    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    },1000)//this não muda por causa da arrow function
}

new Pessoa