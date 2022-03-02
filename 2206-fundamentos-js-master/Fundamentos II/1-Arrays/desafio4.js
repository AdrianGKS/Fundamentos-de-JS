/*const nomes = ['João', 'Juliana', 'Ana', 'Caio'];
const sala1 = nomes.slice(0, 2);
const sala2 = nomes.slice(2);

console.log(sala1);
console.log(sala2);*/

function turmas(nomes = ['João', 'Juliana', 'Ana', 'Caio'], sala1, sala2) {
    sala1 =  nomes.slice(0, 2);
    sala2 = nomes.slice(2);
    return console.log(`Sala 1: ${sala1} // Sala 2: ${sala2}`);
}
turmas();