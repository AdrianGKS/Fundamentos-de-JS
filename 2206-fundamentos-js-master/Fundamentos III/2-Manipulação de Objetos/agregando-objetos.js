const cliente = {
    nome: "Adrian",
    idade: 20,
    cpf: '123456789',
    email: "adrian.gabriel@gmail.com",
    fones: ["51998887766", "5599998776363"],
        dependentes : [{
            nome: "Carla",
            parentesco: "filha",
            dataNascimento: "20/03/2011"
        }]
}

cliente.dependentes.push({
    nome: "Alex Suarez",
    parentesco: "filho",
    dataNascimento: "23/09/2015"
})

// console.log(cliente)

const filhoNovo =  cliente.dependentes.filter(dependentes => dependentes.dataNascimento === "23/09/2015")

console.log(filhoNovo)
/*nome: 'Alex Suarez',
  parentesco: 'filho',
  dataNascimento: '23/09/2015' */

console.log(filhoNovo[0].nome)
// Alex Suarez