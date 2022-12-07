let valor // declarado, mas não inicializado

console.log(valor) // retorna undefined

//console.log(valor2) // da erro nem declarado nem inicializado

valor = null // ausencia de valor (não aponta pra nenhum objeto de memoria)
console.log(valor)
//sempre usar nulo ao invés de undefined para zerar o valor de um objeto

//console.log(valor.toString()) // null não tem referencia para toString, ou seja da erro

const produto = {} 
console.log(produto.preco)// retorna indefinido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar usar
console.log(!!produto.preco)
// delete produto.preco para retirar um valor
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)