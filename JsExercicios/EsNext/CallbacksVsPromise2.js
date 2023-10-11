//Com promise
const { rejects } = require('assert');
const http=require('http');
const getTurma=letra=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject)=>{
        http.get(url, res=>{
            let resultado = ''
    
            res.on('data',dados=>{
                resultado+=dados
            })
            res.on('end',()=>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'),getTurma('C')])
.then(turmas=>[].concat(...turmas))
.then(alunos => alunos.map(aluno=>aluno.nome))
.then(nomes=>console.log(nomes)).catch(e=>console.log(e.message))


getTurma('D').catch(e=>console.log(e.message));

let obterAlunos =async()=>{
    const TA = await getTurma('A');
    const TB = await getTurma('B');
    const TC = await getTurma('C');
    return [].concat(TA,TB,TC);
}//Retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos =>alunos.map(a=>a.nome))
    .then(nomes=>console.log(nomes))