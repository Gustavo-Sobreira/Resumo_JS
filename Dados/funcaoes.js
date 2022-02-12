//Utilizando variáveis

//VARIÁVEIS
var nome = window.prompt(" QUAL SEU NOME ?") //A variável nome recebe o resultado da pergunta 


//CONVERTENDO PARA NUMBER

var num1 = Number(window.prompt(" Digite o ano em que nasceu: "))

var num2 = Number(window.prompt("Digite o ano atual: ")) //Assim como no python temos que especificar que a variável é um number, aqui usamos parseInt ou parseFloat, para que nós escolhemos os tipos de number ou Number para que aceite as duas formas

//Para convertemos Number para String, basta String(n)

var soma = num2 + num1 //Assim como no python podemos fazer operações entre variáveis



//Formatando string

window.alert("Olá " + nome + ", sua idade até o fim deste ano é " +soma) //Retiramos a variável das "" e somamos ela na linha usando +

document.write(`Olá ${nome}, sua idade até o fim do ano é ${soma}`)//IMPORTANTE sempre usar as ``para que a função ${} funcione

nome.length //Quantos caracteres a string tem

nome.toUpperCase() //Tudo para maiúculas

nome.toLowerCase() //Tudo para minúsculas



//FORMATANDO NUMBER

num1.toFixed(2), replace ('.' , ',') // Troca o . por ,

//para dinheiro use:
num1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
