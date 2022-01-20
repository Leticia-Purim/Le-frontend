
function imprimir()
{
    var inicial = prompt("Digite o num unicial");
    var final = prompt ("Digite o final");

    inicial = parseInt(inicial)
    final = parseInt(final)

    while (inicial <= final)
    {
    console.log(inicial); 
    inicial = inicial + 1;
    }
}

function reverso()
{

    var inicial = prompt("Digite o num unicial"); //10
    var final = prompt ("Digite o final"); //2

    inicial = parseInt(inicial)
    final = parseInt (final)

    while (inicial >= final)
    {
         console.log(inicial);
         inicial = inicial - 1;
    }

}

function imprimirFor()
{ 
    for (var inicial = 0; inicial <= 5; inicial = inicial + 1) 
    {
        console.log(inicial);
    }

}

function fatorial()
{ 
    var num = prompt("Digite o num inicial"); //4
    num = parseInt(num);

    var total = 1

    // 4! = 4 * 3 * 2 * 1 = 24  

    while (num >1)
    {
        total = total* num; // 24
        num = num = 1; // 1
        // num = num = 1;
        // num--;
}

    for (var num2 = num; num > 1; = 1)
{
    tota2= tota2* num2;

}
console.log("o valor do fatorial é: " + total);

}