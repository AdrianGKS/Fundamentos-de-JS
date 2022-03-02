function Cliente (nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}

const adrian = new Cliente("Adrian", "123456789", "adrian@email.com", 100)

console.log(adrian)