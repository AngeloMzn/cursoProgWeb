let isAtivo = false
console.log(isAtivo) //false

isAtivo = true 
console.log(isAtivo) // true

// ! é operador logico de negação

isAtivo = 1 
console.log(!!isAtivo) // true

isAtivo = 1 
console.log(!isAtivo) // false

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) 

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'epa')) // || é operador logico ou

let nome = ''

console.log(nome || 'desconhecido') // caso a variavel nome seja false retorna desconhecido

let name = 'lucas'

console.log(nome || 'desconhecido') // imprime lucas