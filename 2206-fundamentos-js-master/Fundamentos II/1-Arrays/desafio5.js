/*const lista = ['João', 'Juliana', 'Ana', 'Caio'];
lista.splice(2,2, 'Rodrigo');
console.log(`Lista de chamada: ${lista}`);*/

function lista (lista = ['João', 'Juliana', 'Ana', 'Caio']) {
    lista.splice(2,2, 'Rodrigo');
    return console.log(`Lista de chamada: ${lista}`);
}
lista();