const cliente = {
    nome: "Adrian",
    idade: 20,
    cpf: '123456789',
    email: "adrian.gabriel@gmail.com",
    fones: ["51998887766", "5599998776363"]
}

cliente.dependente = {
    nome: "Carla",
    parentesco: "filha",
    dataNascimento: "20/03/2011"
}

console.log(cliente)
/*nome: 'Adrian',
  idade: 20,
  cpf: '123456789',
  email: 'adrian.gabriel@gmail.com',
  fones: [ '51998887766', '5599998776363' ],
  dependente: { nome: 'Carla', parentesco: 'filha', dataNascimento: '20/03/2011' } */

cliente.dependente.nome = "Carla Lima"

console.log(cliente)
/* nome: 'Adrian',
  idade: 20,
  cpf: '123456789',
  email: 'adrian.gabriel@gmail.com',        
  fones: [ '51998887766', '5599998776363' ],
  dependente: {
    nome: 'Carla Lima',
    parentesco: 'filha',
    dataNascimento: '20/03/2011'*/