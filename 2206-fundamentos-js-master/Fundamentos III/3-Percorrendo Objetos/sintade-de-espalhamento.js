const clientes = [
    {
        nome: "Adrian",
        idade: 20,
        cpf: '123456789',
        email: "adrian.gabriel@gmail.com",
        fones: ["51998887766", "5599998776363"],
        dependentes : [{
                nome: "Carla",
                parentesco: "filha",
                dataNascimento: "20/03/2011"
            },
            {
                nome: 'Alex Suarez',
                parentesco: 'filho',
                dataNascimento: '23/09/2015'    
            }]
    },
    {
        nome: "Juliana",
        cpf: "898798738944324",
        dependentes: [{
            nome:"Sophia",
            parentesco: "filha",
            dataNascimento: "30/08/2020"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDependentes)