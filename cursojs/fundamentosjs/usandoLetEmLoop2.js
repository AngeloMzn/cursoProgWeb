const funcs = []

for (let i = 0; i < 10; i++)
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
// com o let  o valor a ser printado sera o valor do indice do array