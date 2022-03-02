/*const salaPython = ['Adrian', 'Helena', 'Rodrigo'];
const salaJS = ['Ju', 'Leo', 'Raquel'];

const salaUnificada = salaPython.concat(salaJS);

console.log(salaUnificada);*/

function salaUnificada (salaPython = ['Adrian', 'Helena', 'Rodrigo'], salaJS = ['Ju', 'Leo', 'Raquel'], salaJunta) {
    return console.log(salaJunta = salaPython.concat(salaJS));
}
salaUnificada();