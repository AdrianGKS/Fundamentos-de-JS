const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6,5 , 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function media (notas) {      
    const soma = notas.reduce( (acum, atual) => atual + acum, 0);
    return soma/notas.length;
}

console.log(`Média da sala JS ${media(salaJS)}`);
console.log(`Média da sala Java ${media(salaJava)}`);
console.log(`Média da sala Python ${media(salaPython)}`);