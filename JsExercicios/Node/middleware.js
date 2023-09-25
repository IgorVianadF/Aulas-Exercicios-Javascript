//Chain of responsability
const passo1 = (cont,next)=>{
    cont.valor1='mid1'
    next()
}

const passo2 = (cont, next)=>{
    cont.valor2='mid2'
    next()
}

const passo3 = cont => cont.valor3 = 'mid3'

const exec = (cont, ...middlewares)=>{
    const execPasso = indice =>{
        middlewares && indice < middlewares.length &&
        middlewares[indice](cont, ()=>execPasso(indice+1))
    }
    execPasso(0)
}
const cont = {}

exec(cont, passo1, passo2, passo3);
console.log(cont)
