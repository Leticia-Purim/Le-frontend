
function idade() 
{
    // pega o valor digitado pelo usuario
    var idade = prompt("Digite sua idade");


    if (idade >= 18) {
        console.log("é maior de idade");
    } else {
        console.log("é menor de idade");
    }
}

function maior()
{
    var num1 = prompt("Digite o valor 1");
    var num2 = prompt("Digite o valor 2");

    num1 = parseInt(num1);
    num2 = parseInt(num2);


    if (num1 == num2)
    {
        console.log("Os 2 valores são iguais");
    } 
    else if (num1 > num2)
    {
        console.log("O valor "+ num1 + " é maior");
    } 
    else 
    {
        console.log("O valor "+ num2 + " é o maior");
    }

}

function soma()
{
    var num1 = prompt("Digite o valor 1");
    var num2 = prompt("Digite o valor 2");

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    var resultado = num1 + num2;

    console.log(resultado);

}