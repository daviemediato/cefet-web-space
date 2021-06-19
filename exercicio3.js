// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
const botoesExpandirRetrair = document.querySelectorAll('.botao-expandir-retrair');

for (const botaoEl of botoesExpandirRetrair) {
    botaoEl.addEventListener('click', realizaAcaoExpansao);
}

function realizaAcaoExpansao(event) {
    const botaoAtualEl = event.currentTarget;
    const paiBotaoEl = botaoAtualEl.parentNode;

    paiBotaoEl.classList.toggle('expandido');
    botaoAtualEl.innerHTML === '+' ? botaoAtualEl.innerHTML = '-' : botaoAtualEl.innerHTML = '+';
}