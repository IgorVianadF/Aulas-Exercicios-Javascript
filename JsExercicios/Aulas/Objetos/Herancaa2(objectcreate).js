const pai={nome: 'Pedro', corCabelo:'preto'}

const filha1= Object.create(pai)
filha1.nome='Ana'

const filha2= Object.create(pai, {
    nome:{
        value:'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(`Meu nome é ${filha1.nome}, tenho cabelo ${filha1.corCabelo} e sou a 1º filha`);
console.log(Object.keys(filha1));

for(let keys in filha2){
    filha2.hasOwnProperty(keys)?
    console.log(keys):console.log(`Chave adquirida: ${keys}`);
}