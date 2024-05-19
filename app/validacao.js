function verificaSeAcertou() {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
        <div>Fale um número válido!</div>
        `;
        return;
    };

    if (chute == numeroSecreto) {
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O número secreto era:</h3>
        <span class="box">${chute}</span>
        <button class="btn-jogar" onclick="window.location.reload()">Jogar novamente</button>
        `;
    };

    if (chute > numeroSecreto) {
        elementoChute.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
        <div>O número secreto é menor!  <i class="fa-solid fa-arrow-down-long"></i></div>
        `;
    };

    if (chute < numeroSecreto) {
        elementoChute.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
        <div>O número secreto é maior!  <i class="fa-solid fa-arrow-up-long"></i></div>
        `;
    };

    if (numeroMaiorOuMenorQueOValorPermitido()) {
        elementoChute.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
        <div>O número deve estar entre ${menorValor} e ${maiorValor}!</div>
        `;
        return;
    };
};

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
};

function numeroMaiorOuMenorQueOValorPermitido() {
    return chute > maiorValor || chute < menorValor;
};