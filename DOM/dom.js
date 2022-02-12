//FUNÇOES:

clicar = () => {

    //console.log("teste") --> Só pra testar se o documento está sendo chamado

    var b = document.querySelector("#a")    //Seleciona o id = "a"
    b.innerHTML = 'Clicou!' //Edita o texto
    b.className = "crica"   //Edita a classe
}

entrar = () => {

    //console.log("teste 2")

    var f = document.querySelector('div')
    f.innerHTML = 'Entrou!'
    f.className = "entro"
    
}

sair = () => {

    var s = document.querySelector('div')
    s.innerHTML = "Saiu"
    s.className = "sai"
}

//CHAMAR FUNÇÕES:

var chama = document.querySelector('#a')   //Qual elemento será observado

chama.addEventListener("click", clicar)     //Adiciona um evento    para determinada ação, chamando a função desejada

chama.addEventListener("mouseenter", entrar)
chama.addEventListener("mouseout", sair)