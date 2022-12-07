//função sem retorno
function imprimirSoma(a, b)
{
    console.log(a + b)

}
imprimirSoma(2, 3)

imprimirSoma(2) // coloca o segundo em unidentified e printa not a number

imprimirSoma(1, 2 ,3 ,4, 5) // vai somar só os 2 primeiros parametros

imprimirSoma() // imprime not a number

// soma com retorno 

function soma (a, b = 0)
{
    return a + b
}

console.log(soma(2,3))  // imprime 5

console.log(soma(2)) // imprime 2 pq b foi atribuido a 0

console.log(soma()) // not a number pq o primeiro é unidentified

