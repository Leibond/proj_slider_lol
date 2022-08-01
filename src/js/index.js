/*
OBJETIVO 1 - Clicar na seta de avançar > Mostrar próximo card
da lista

    1º Passo - Pegar o elemento HTML da seta 'avançar'
    2º Passo - Identificar o clique do usuário na seta 'avançar'
    3º Passo - Fazer aparecer o Próximo card da lista
    4º Passo - Buscar o cartão selecionado e esconder

OBJETIVO 2 - Clicar na seta de voltar > Mostrar card anterior
da lista


    1º Passo - Pegar o elemento HTML da seta 'voltar'
    2º Passo - Identificar o clique do usuário na seta 'voltar'
    3º Passo - Fazer aparecer o card anterior da lista
    4º Passo - Buscar o cartão selecionado e esconder
*/

/*
OBJETIVO 1 - Clicar na seta de avançar > Mostrar próximo card
da lista

    3º Passo - Fazer aparecer o Próximo card da lista
    4º Passo - Buscar o cartão selecionado e esconder
*/

const btnAvancar = document.getElementById("btn-avançar")
const btnVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0;

//INICIO DAS FUNCOES 'ESCONDER' E 'MOSTRAR' CARTOES
function esconderCartaoSelecionado(){
    const cartaSelecionada = document.querySelector(".selecionado")
    cartaSelecionada.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado')
}



//FIM DAS FUNCOES 'ESCONDER' E 'MOSTRAR' CARTOES

//INICIO DAS FUNCOES DE EVENTO LISTENER
btnAvancar.addEventListener("click", function(){
    if(cartaoAtual === cartoes.length -1){
        cartaoAtual = [0]
        cartaoAtual--
    }
})

btnVoltar.addEventListener("click", function(){
    if(cartaoAtual === cartoes.length -3){
        cartaoAtual = [2]
        cartaoAtual++
    }
})

btnAvancar.addEventListener("click", function () {
    if(cartaoAtual === cartoes.length - 1) return;
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);

});

btnVoltar.addEventListener("click", function () {
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});
//FIM DAS FUNCOES DE EVENTO LISTENER