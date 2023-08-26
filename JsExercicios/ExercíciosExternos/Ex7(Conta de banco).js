function conta(saldo, dono){
    this.saldo = saldo
    this.dono = dono
}

function depositar(Obj,qnt){
    Obj.saldo += qnt
}

function retirar(Obj,qnt){
    Obj.saldo -= qnt
}

const ContaIgor = new conta(0.0, "Igor")

depositar(ContaIgor, 20)
console.log(ContaIgor.saldo)

retirar(ContaIgor, 10)
console.log(ContaIgor.saldo)