let tamanhoFonte = 16;

const aumentaFonte = document.querySelector(".aumentar");
const diminuiFonte = document.querySelector(".diminuir");
const fonte = document.querySelector(".fonte")

aumentaFonte.addEventListener('click', () => {
    tamanhoFonte++;
    fonte.style["font-size"] = tamanhoFonte + 'px';
})

diminuiFonte.addEventListener('click', () => {
    tamanhoFonte--;
    fonte.style["font-size"] = tamanhoFonte + 'px'
} )