const funcs = []

for (var i = 0; i < 10; i++)
{
    funcs.push
    (
        function()
        {
            console.log(i)

        }
    )

}
funcs[2]()
funcs[8]()
//var não tem escopo de função, portanto o valor de i a ser printado será o valor final adquirido no for e não importa o indice do array