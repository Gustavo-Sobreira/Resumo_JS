//ATRIBUIÇÃO SIMPLES

var a = 5 + 3 // a = 8
var b = a % 5 // b = 3
var c = 5 * b**2 // 45
var d = 10 - a/2 // 6
var e = 6 * 2 / d // 2
var f = b % e + 4 / e //3

document.open
document.write(`<h1>O resultado da variável ... é ${f}</h1>`)
document.close


//AUTO-ATRIBUIÇÕES 

var n = 2
n = n -2
n = n * 0 + 1 / 2 // Aqui dou um novo valor à variável, substituindo o seu valor antigo, pelo resultado 
document.open
document.write(`<h2>${n}</h>`)
document.close


//INCREMENTO

var x = 1
x = x + 1  //É o mesmo que:
x += 1 //Que também é igual a:
x ++


//RELACIONAIS

//Aqui poderemos receber Tue or False

 5 > 2 //True
 5 < 2 //False
 5 >= 5 //True
 
 idade >= 18 


 //LÓGICOS

 // !  -> Negação    True or False
 // && -> Conjunção  True , False, False or False
 // || -> Disjunção  True, True, True or False

 5 > 1/*True*/&& 5 < 1 /*False*/
 //Resultado igual a false 
 
 5 > 1/*True*/|| 5 < 1 /*False*/
 //Resultado igual a true


idade >= 15 && idade <= 17       //Idade está entre 15 e 17 ?

estado == 'MG' || estado == 'RJ' // o estado é MG ou RJ ?

salario > 1500 && sexo != 'M'    //Ganha mais que 500 e não é homem ?


//TERNÁRIO

//teste    ?   True     :    False
media >= 7 ? 'Aprovado' : 'Reprovado'