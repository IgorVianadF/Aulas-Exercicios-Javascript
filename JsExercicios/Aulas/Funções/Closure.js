let x = 'Global';

function fora(){
    let x = 'Local';
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao());/*Ele vai retornar o x local, pois o contexto léxico da função `dentro` é 
                            que foi escrita dentro da função `fora`, mesmo que ela seja chamada em outro lugar*/