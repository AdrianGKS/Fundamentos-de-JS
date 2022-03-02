const cliente = {
    nome: "Adrian",
    idade: 20,
    cpf: '123456789',
    email: "adrian.gabriel@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))