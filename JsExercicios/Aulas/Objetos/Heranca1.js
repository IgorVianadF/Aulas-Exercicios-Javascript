const avo = {at1:'A'}
const pai = {__proto__:avo,at2:'B',at3:3}//at3 do filho sombreia o at3 do pai(caso seja chamado a partir do fiho)
const filho = {__proto__:pai,at3:'C'}//Ele sempre vai procurar o atributo mais próximo à função chamada

console.log(filho.at1,filho.at2,filho.at3)

const carro = {
    velAtual:0,
    velMax:200,
    acelerar(delta){
        if (this.velAtual+delta<=this.velMax){
            this.velAtual+=delta;
        }
        else{
            this.velAtual=this.velMax;
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari={
    modelo:'F40',
    velMax:450,
}

const fiat={
    modelo:'Uno',
    velMax:210,
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro);
Object.setPrototypeOf(fiat,carro);

fiat.acelerar(190);
console.log(fiat.status());
ferrari.acelerar(250);
console.log(ferrari.status());
