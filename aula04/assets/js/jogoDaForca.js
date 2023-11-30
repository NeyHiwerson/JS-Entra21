const palavrasSecretas = [
  "cachorro",
  "gato",
  "sogra",
  "trabalho",
  "futebol",
  "corno",
  "mentira",
];

const dicas = [
  "É o melhor amigo do homem.",
  "Animal doméstico que come peixe.",
  "É o terror dos maridos.",
  "Todo mundo odeia mas não vive sem.",
  "O Brasil é o país do...",
  "É sempre o ultimo a saber.",
  "Tem pernas curtas.",
];

let palavraSecreta;
let dica;
let tentativas;
/* gerar um numero aleatorio entre 0 e o tamanho do array */
let numeroSorteado = Math.floor(Math.random() * palavrasSecretas.length);
palavraSecreta = palavrasSecretas[numeroSorteado];
dica = dicas[numeroSorteado];
tentativas = 3;
console.log(palavraSecreta);
console.log(dica);
console.log(tentativas);

let letrasAcertadas = [];
for (const iterator of palavraSecreta) {
  letrasAcertadas.push("_");
}
console.log(letrasAcertadas.join(" "));

const renderizaJogo = function () {
    let renderGame = document.getElementById('renderForca');
  if (tentativas == 0) {
    renderGame.innerHTML = `
    <h2>Descubra a palavra secreta com ${palavraSecreta.length} letras.</h2>
    <h3>Você tem ${tentativas} tentativas.</h3>
    <h2>${letrasAcertadas.join(" ")}</h2>
    <label  for="palpitePalavra">insira seu palpite de palavra</label>
    <input onchange="palpitePalavra(this)" id="palpitePalavra" type="text">`;
  }else{
      renderGame.innerHTML = `
        <h2>Descubra a palavra secreta com ${palavraSecreta.length} letras.</h2>
        <h3>Você tem ${tentativas} tentativas.</h3>
        <h2>${letrasAcertadas.join(" ")}</h2>
        `;
  }
};
const palpiteLetra = function (letra) {
    if (palavraSecreta.includes(letra)) {
        const indicesLetra = [];
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
                indicesLetra.push(i);
            }
        }
        console.log("Os índices são:", indicesLetra);
    }
}

const atualizaLacunas = function (arrayIndicesLetraAcertadas) {
    for (let i = 0; i < arrayIndicesLetraAcertadas.length; i++) {
        /* implementar */
    }
    renderizaJogo();
}
const palpitePalavra = function (palavra) {
    /* implementar */
}
renderizaJogo();
