class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }

}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoup) {
        super(nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup;
    }

    depositarPoupanca (valor) {
        this.saldoPoup += valor;
    }
}

const Adrian = new ClientePoupanca("Adrian", "a@email.com", "123456789", 100, 200);

console.log(Adrian);
/*
ClientePoupanca {      
  nome: 'Adrian',      
  email: 'a@email.com',
  cpf: '123456789',    
  saldo: 100,
  saldoPoup: 200       
}
 */

Adrian.depositar(50);
Adrian.depositarPoupanca(50);

console.log(Adrian);
/*
ClientePoupanca {
  nome: 'Adrian',
  email: 'a@email.com',
  cpf: '123456789',
  saldo: 150,
  saldoPoup: 250
}
 */