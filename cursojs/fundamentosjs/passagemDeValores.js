// atribuição por valor 
let c = 3
let d = c
d++
console.log('valor de  d: ' + d)
console.log('valor de c: ' + c)



// atribuição por referencia
// passar valores pelo endereço de memoria da variavel

const a = {name: 'Teste'} // a aponta para o endereço de memoria que contem o objeto

const b = a // b aponta para o endereço de memoria que a aponta
console.log(a)

b.name = 'Opa' // troca o nome do endereço de memoria que a e b apontam.

console.log(a)

