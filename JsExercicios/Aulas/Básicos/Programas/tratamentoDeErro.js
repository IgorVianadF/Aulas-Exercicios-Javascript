
function tratamentoDeErro(erro) {
    //throw new Error("Nome inválido")
    throw "Erro inválido"
}

function imprimirNomeGritando(obj){  
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratamentoDeErro(e)
    } finally {
        console.log(`Perdão ${obj.name}, houve um erro!`)
    }
}

const obj = {nome: "Roberto"}
imprimirNomeGritando(obj);