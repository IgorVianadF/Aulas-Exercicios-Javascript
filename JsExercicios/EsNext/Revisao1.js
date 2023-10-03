//let e var
{
    var a = 1;
    let b = 2;
}

console.log(a);
//console.log(b);

//Template string
let name = 'Igor';
console.log(`Olá ${name}
Como vai você?`);

//Destructuring

const[l,e,...tras]='Igor';
console.log(l,e,tras[0],tras[1]);

const[x,,y] = [1,2,3];
console.log(x,y);

const {idade: i, nome } = { nome:"Alex",idade:32};
console.log(i, nome)