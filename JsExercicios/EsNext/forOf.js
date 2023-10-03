for(let letra of 'Javascript'){
    console.log(letra);
}
const assuntosEcma = ['map', 'set', 'promise']
for (let assunto of assuntosEcma){
    console.log(assunto);
}

const assuntosMap = new Map([
    ['map',{abordado: true}],
    ['set',{abordado: true}],
    ['promise', {abordado:false}],
]);

for(let assunto of assuntosMap){
    console.log(assunto);
}
for(let chave of assuntosMap.keys()){
    console.log(chave);
}
for(let valor of assuntosMap.values()){
    console.log(valor);
}

for(let [ch,vl] of assuntosMap.entries()){
    console.log(ch,vl);
}
