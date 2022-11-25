const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3]) // printa primeiro e ultimo elemento do array

console.log(valores[4]) // acessando valor não existente no array retorna indefinido

valores[4] = 10

console.log(valores[4]) // printa 10

valores[7] = 6

console.log(valores[5], valores[6], valores[7]) // ao pular posições o JS cria posições vazias 

console.log(valores.length) // retorna tamanho do vetor

valores.push({id: 3}, false, null, 'teste') // push adiciona valores ao array

console.log(valores) // fazer array homogeneo ajuda o codigo a ficar limpo

valores.pop() // retira a ultima posição do array

delete valores[0] // deleta o valor da posição do array

console.log(valores)

console.log(typeof valores) // mostra que o array é do tipo object
