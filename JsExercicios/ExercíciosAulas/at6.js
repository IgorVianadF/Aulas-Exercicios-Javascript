/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, 
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três 
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo 
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: 
“Delta é negativo”.*/


function bhaskara(a,b,c){
    const resultado = [];

    function delta(a,b,c){
       let result = b**2 - 4*a*c
        return result
    }

    let deltaresult = delta(a,b,c);
    if(deltaresult >= 0 ){
    let result1 = (-b+Math.sqrt(deltaresult))/(2*a);
    let result2 = (-b-Math.sqrt(deltaresult))/(2*a);
    resultado.push(result1);
    resultado.push(result2);
    
    for(i in resultado){
        console.log(`${resultado[i]}`);
    } 
    } else {console.log("Delta é negativo!!!")}
}


bhaskara(1,3,2);