const nome = 'rebeca'
const concatenacao = 'olá' + nome + '!' 
const template = `
olá
${nome}!
`
console.log(concatenacao, template )

//expressões

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // função arrow
console.log(`Ei... ${up('cuidado')} !`)