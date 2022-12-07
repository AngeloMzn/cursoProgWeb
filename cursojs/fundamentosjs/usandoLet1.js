// let respeita o bloco de codigo como um escopo separado


let numero = 1
{
   let numero = 2
    console.log('dentro = ' + numero)  // imprime o que esta no bloco

}

console.log('fora = ' + numero) // imprime o que esta fora