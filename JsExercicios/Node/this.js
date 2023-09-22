console.log(this===global);
console.log(this===module);
console.log(this===module.exports);
console.log(this===exports);

function teste(){
    console.log(this===global);
}
teste();

const testeArrow = ()=>{
    console.log(this===module.exports);
    console.log(this===exports);
    console.log(this===global);
}

testeArrow()