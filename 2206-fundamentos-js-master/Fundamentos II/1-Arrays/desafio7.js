/*const nomes = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10,7,9,6];

let listaNotasEAlunos = [nomes, medias];

// array de duas dimensões: array e elemento
console.log(`${listaNotasEAlunos[0][0]}, sua média é ${listaNotasEAlunos[1][0]}`)*/

function listaNotasEAlunos (nomes = ['João', 'Juliana', 'Caio', 'Ana'], medias = [10,7,9,6], listaNotasEAlunos = [nomes, medias]) {
    return console.log(`${listaNotasEAlunos[0][0]}, sua média é ${listaNotasEAlunos[1][0]}`);
}
listaNotasEAlunos();