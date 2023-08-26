const nums = [1,2,3,4,5,6,7,8,9];
for (i in nums){ // Break faz com que o laço seja terminado após chegar no indice 5.
    if (i == 5){
        break
    }
    console.log(nums[i]);
}

for (y in nums){ //Continue faz com que o laço seja cortado momentaneamente porém continua.
    if (y == 5){
        continue
    }
    console.log(nums[y]);
}


//Pouco usado!!!

externo: for(a in nums){ // utilizando o rótulo "externo" 
    for(b in nums){
        if (a==2 && b==3){
            break externo // o rótulo faz com que o "break" quebre não só o for, mas sim o externo
        }
        console.log(a, b)
    }
}