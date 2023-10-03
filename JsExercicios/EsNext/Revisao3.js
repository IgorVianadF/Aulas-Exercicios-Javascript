//ESB: Object.values/Object.entries
const obj = {a:1,b:2,c:3}

console.log(Object.values(obj));
console.log(Object.entries(obj));

//Notação literal de objetos
const nome = 'Carla';
const pessoa = {
    //Forma antiga:
    //nome:nome,
    nome,
    idade: 23,
    //Forma antiga:
    /*ola: function(){
        console.log(`Olá, meu nome é ${this.nome}`);
    } */
    ola(){
        console.log(`Olá Meu nome é ${this.nome}`);
    }
}
pessoa.ola();

//Classe
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Woof woof';
    }
}

const julio = new Cachorro;
console.log(julio.falar());