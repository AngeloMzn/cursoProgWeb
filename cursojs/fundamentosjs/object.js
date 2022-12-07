//objeto em JS não é a mesma coisa que json
//json é um formato textual parecido com o objeto
//objeto é uma coleção de chave e valor
// {} par de chaves representa um objeto
// é possivel ter um objeto outro objeto
//dentro de 1 objeto so pode ter um unico identificador


const prod1 = {} //objeto vazio

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 498.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

// outra forma de criar objeto
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        blabla: 2
    }
}




