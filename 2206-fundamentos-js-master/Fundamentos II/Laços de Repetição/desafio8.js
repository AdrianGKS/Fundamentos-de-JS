function nomeEnota (nomeAluno) {
    const nomes = ['João', 'Juliana', 'Caio', 'Ana']
    const medias = [10,7,9,6]
    const listaNotasEAlunos = [nomes, medias]

    if (listaNotasEAlunos[0].includes(nomeAluno)) { //includes faz a busca no array - booleano
        let i =  listaNotasEAlunos[0].indexOf(nomeAluno); //indexOf traz o indíce do array
        return console.log(listaNotasEAlunos[0][i] + ', sua média é ' + listaNotasEAlunos[1][i]);
    } else {
        return console.log("Aluno não encontrado");
    }
}
nomeEnota("Caio");