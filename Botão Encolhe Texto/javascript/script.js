var conteudo = document.getElementById('conteudo')
var botao = document.getElementById('mostre_mais')


//criar o evento do click do botão utilizando uma função anônima
botao.onclick = function(){

    if(conteudo.className == "open"){
        //encurtar a caixa
        conteudo.className = ""; //muda a classe da div conteudo para ""
        botao.innerHTML = "Mais"; //muda o texto do botao para mostrar mais
    }
    else{
        //expandir a caixa
        conteudo.className = "open"; //muda a classe da div conteudo para open
        botao.innerHTML="Menos"; //muda o texto do botao para mostrar menos
    }

};