
console.log('test')
// console.log(memories.length)
// const memoriesL=memories.length;
 
// const result;

document.getElementById('number_l').addEventListener("click", number);

function getRandomInt(max) {
    return Math.floor(Math.random() * max+1);
}

function number() {
    const m=getRandomInt(12);
    const j=getRandomInt(31);
    console.log(m+'-'+j)
    document.getElementById("result-s").innerHTML+=m+'-'+j+'<br>'
}


document.getElementById('number_r').addEventListener("click", reset);

function reset() {
    document.getElementById("result-s").innerHTML=''
}



document.getElementById('memories_l').addEventListener("click", memoriesR);

function memoriesR() {
    const m=getRandomInt(memories.length)-1;
    document.getElementById("result-s").innerHTML+=memories[m]+'<br>'
}