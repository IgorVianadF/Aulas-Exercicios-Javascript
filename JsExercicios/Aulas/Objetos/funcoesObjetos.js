const pessoa={
    nome:'Igor',
    idade: 19,
    peso: 51,
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}:${valor}`);
})

Object.defineProperty(pessoa,'DataNasc',{
    enumerable:true,
    writable:false,
    value:'21/03/2005'
})
pessoa.DataNasc = '01/01/2006'
console.log(pessoa.DataNasc);

const bucket = {a:1}
const ob1 = {b:3}
const ob2 = {c:6,a:1,b:4}
const obj = Object.assign(bucket,ob1,ob2);//Ele vai jogar as chaves e os valores de ob1 e ob2 dentro de bucket
console.log(bucket);
