// 1 passo - dar um jeito de pegar o elemento html dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
// 2 passo - dar um jeito de identificar o click do usuario nos botoes
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //3 passo - desmarcar o botao selecionado anteriormente
        desativarBotaoSelecionado();
        //4 passo - marcar o botao clicado como se estivesse selecionado
        selecionarBotaoCarrossel(botao);
        //5 passo - esconder a imagem ativa do fundo
        esconderImagemAtiva();
        //6 passo - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mudarImagemDeFundo(indice);
    })
})

function mudarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", "");
});
