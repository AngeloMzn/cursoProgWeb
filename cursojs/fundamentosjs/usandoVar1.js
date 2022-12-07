{
    {
        {
            { 
                var sera = 'Será ?' 
            }
        }
    }
}
console.log(sera) // variavel var dentro de um bloco de codigo que não seja função é visivel em qualquer lugar


function teste()
{
    var local = 123

}
console.log(local)  // ao definir uma variavel dentro da função ela pertece ao escopo da função

// variavel criada com var fora de uma função ela é global
// tentar evitar variaveis globais
// a sobrescrita dessa variavel pode gerar problemas cronicos