// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
const botaoEl = document.querySelector('#calcular');

botaoEl.addEventListener('click', exibeFGrav);

function realizaCalculoFGrav() {
    // adquirindo os elementos
    const constanteGEl = document.querySelector('#constante');
    const massaUmEl = document.querySelector('#massa1');
    const massaDoisEl = document.querySelector('#massa2');
    const distanciaEl = document.querySelector('#distancia');

    // adquirindo os respectivos valores
    const constanteG = constanteGEl.value;
    const massaUm = massaUmEl.value;
    const massaDois = massaDoisEl.value;
    const distancia = distanciaEl.value;

    const fgrav = (constanteG * massaUm * massaDois) / (distancia * distancia);

    return fgrav;
}

function exibeFGrav() {
    const fgrav = realizaCalculoFGrav();

    const resultadoEl = document.querySelector('#resultado');
    resultadoEl.value = fgrav;
}