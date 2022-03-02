function Cliente (nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}
const adrian = new Cliente("Andre", "12312312312", "andre@email.com", 100);

function ClientePoup (nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup;
}

const Ju = new ClientePoup("Ju", "232423423434", "ju@email.com", 100, 200);

console.log(Ju);
/*
ClientePoup {
  nome: 'Ju',
  cpf: '232423423434',
  email: 'ju@email.com',
  saldo: 100,
  depositar: [Function (anonymous)],
  saldoPoup: 200
} */

ClientePoup.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor;
}

Ju.depositarPoup(30);

console.log(Ju);
/*
ClientePoup {
  nome: 'Ju',
  cpf: '232423423434',
  email: 'ju@email.com',
  saldo: 100,
  depositar: [Function (anonymous)],
  saldoPoup: 230
} 
 */

// console.log(adrian.hasOwnProperty("saldoPoup"));
// console.log(Ju.hasOwnProperty("saldoPoup"));
// console.log(adrian instanceof Cliente);
// console.log(typeof adrian);
// console.log(typeof Ju);
// console.log(Ju instanceof ClientePoup);
// console.log(Function.prototype.isPrototypeOf(Cliente));
// console.log(Cliente.constructor === Function);