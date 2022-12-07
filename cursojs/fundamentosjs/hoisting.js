console.log('a =', a)
var a = 2
console.log('a =', a)

// é a mesma coisa que isso por causa do hoisting que é o ato de jogar pra cima para declarar a variavel
 var a 
 console.log('a =', a)
 a = 2
 console.log('a =', a)

 // na função acontece a mesma coisa 
 function test()
 {
    console.log('b =', b)
    var b = 2
    console.log('b =', b)

 }
 test()

 // hoisting nao ocorre com let