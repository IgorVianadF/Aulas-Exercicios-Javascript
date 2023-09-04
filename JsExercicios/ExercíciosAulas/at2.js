/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
triângulo). */

function detectarTriangulo(a,b,c){
    if(a+b>c&&a+c>b&&b+c>a)
    {
        if(a==b && b==c){
        console.log("Triângulo equilátero!");
    } else if(a==b||b==c||a==c){
        console.log("Triângulo isósceles");
    } else {
        console.log("Trigângulo escaleno");
    }
} else {
    console.log("Não é um triângulo!")
}
}

detectarTriangulo(1,3,4);
