/*const notas = [10, 6, 8];
notas.push(7);
let media = (notas[0],notas[1],notas[2],notas[3]) / 4;
console.log(notas);
*/

function media (m = [10, 6, 8], media) {
    m.push(7);
    return console.log(media = (m[0] + m[1] + m[2] + m[3]) / m.length);
}

media();