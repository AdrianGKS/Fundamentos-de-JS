const notas = [10, 9, 8, 7, 6];
//                                      condição  retorno   soma
const notasAtual = notas.map( nota => nota == 10 ? nota : ++nota);
//                                         operador ternário
console.log(notasAtual);