// armazenando uma função em uma variavel
const imprimirSoma = function (a, b) 
{
console.log(a + b)
} // função sem nome (anonima)

imprimirSoma(2,3)

//armazenando uma função arrow em uma variavel
const soma = (a, b) =>
{
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const subtracao = (a, b) => a - b // função com 1 linha retorna o resultado dessa linha
 console.log(subtracao(2, 3))

 const imprimir2 = a => console.log(a) // função para imprimir. Como possui apenas um parametro não se usa parenteses
 imprimir2('legal !!!')