 // console.log(document.getElementById("botao-alterar-tema")); apenas para mostrar no navegador oque esta sendo realizado

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector('body');
const header = document.querySelector('header');
const imagemBotaoTrocaDeTema = document.querySelector('.sol-botao');

botaoAlterarTema.addEventListener('click', () => {

    const modoEscuroAtivo = body.classList.contains('modo-escuro');
    body.classList.toggle('modo-escuro');
    header.classList.toggle('moddo-escuro');
    
    if (modoEscuroAtivo) 
    {
        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png");
    }
    else 
    {
        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/moon.png");
    }

});


