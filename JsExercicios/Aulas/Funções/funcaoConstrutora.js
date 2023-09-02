function Carro(velocidadeMaxima = 200, delta = 5, nome = "Undefined"){
    let velocidadeAtual = 0; //Privado


//Metodo Publico
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
        velocidadeAtual += delta;
        console.log(`Velocidade atual em: ${this.getVelocidadeAtual()}`);
    } else {
        velocidadeAtual = velocidadeMaxima;
    }
        }

// Metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }

    this.getNomeCarro = function(){
        return
    }
}

const Uno = new Carro;
Uno.acelerar()

const Ferrari = new Carro(350, 20)
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()