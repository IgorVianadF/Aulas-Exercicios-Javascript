const peso1 = 1;
const peso2 = 2;

const avaliacao = 5;
const avaliacao2 =  Number ('7');

const avaliacaoTotal = avaliacao * peso1 + avaliacao2 * peso2;
const mediaAvaliacao = avaliacaoTotal/(peso1 + peso2);

console.log(mediaAvaliacao.toFixed(2));
console.log(Number.isInteger);

if (mediaAvaliacao > 7){
    console.log("Você foi selecionado!!!");
}
    else if(mediaAvaliacao<7 && mediaAvaliacao>5.50){
        console.log("Você está na lista de espera, tenha paciência, ainda há chance!!!");
    }
        else {
            console.log("Você infelizmente não foi selecionado.")
        }
