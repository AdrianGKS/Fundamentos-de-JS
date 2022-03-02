const cliente = {
    nome: "Adrian",
    idade: 20,
    cpf: '123456789',
    email: "adrian.gabriel@gmail.com",
    fones: ["51998887766", "5599998776363"],
    dependentes : [
        {
            nome: "Carla",
            parentesco: "filha",
            dataNascimento: "20/03/2011"},
        {
            nome: 'Alex Suarez',
            parentesco: 'filho',
            dataNascimento: '23/09/2015'    
        }
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor;
    }
}

console.log(cliente.saldo) //100
cliente.depositar(30)
console.log(cliente.saldo) //130