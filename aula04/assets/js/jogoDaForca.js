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
/* console.log(palavraSecreta);
console.log(dica);
console.log(tentativas); */

let letrasAcertadas = [];
for (const iterator of palavraSecreta) {
  letrasAcertadas.push("_");
}
/* console.log(letrasAcertadas.join(" ")); */

const renderizaJogo = function () {
    let renderGame = document.getElementById('renderForca');
  if (tentativas == 0) {
    renderGame.innerHTML = `
    <h2>Descubra a palavra secreta com ${palavraSecreta.length} letras.</h2>
    <h3>${dica}</h3>
    <h3>Agora tente acertar a palavra secreta.</h3>
    <h2>${letrasAcertadas.join(" ")}</h2>
    <label  for="palpitePalavra">insira seu palpite da palavra</label>
    <input onchange="palpitePalavra(this.value)" id="palpitePalavra" type="text">    
    `;
  }else{
      renderGame.innerHTML = `
        <h2>Descubra a palavra secreta com ${palavraSecreta.length} letras.</h2>
        <h3>${dica}</h3>
        <h3>Você tem ${tentativas} tentativas.</h3>
        <h2>${letrasAcertadas.join(" ")}</h2>
        <label  for="palpiteLetra">insira uma letra</label>
        <input onkeyup="palpiteLetra(this.value)" id="palpiteLetra" type="text">
        `;
  }
}

const palpiteLetra = function (letra) {
    if (palavraSecreta.includes(letra)) {        
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] == letra) {
              letrasAcertadas[i] = letra ;
            }
        }
        
    }
    tentativas--;
    let limpaLetra = document.getElementById("palpiteLetra");
    limpaLetra.value = '';
    renderizaJogo();
}

const atualizaLacunas = function (arrayIndicesLetraAcertadas) {
    for (let i = 0; i < arrayIndicesLetraAcertadas.length; i++) {
        /* implementar */
    }
    renderizaJogo();
}

/* aqui verifica se a palavra digitada pelo jogador é igual a palavra secreta  */
const palpitePalavra = function (palavra) {
    if (palavra == palavraSecreta) {
        completaPalavraSecreta();
        alert("Parabéns, Você acertou!");
    }else{
        alert("Não foi dessa vez, Você errou!");
    }    
    let limpaPalavra = document.getElementById("palpitePalavra");
    limpaPalavra.value = '';
    renderizaJogo();    
}

/* função para mostrar a palavra secreta no array letrasAcertadas */
const completaPalavraSecreta = function () {
    for (let i = 0; i < palavraSecreta.length; i++) {
        letrasAcertadas[i] = palavraSecreta[i];
    }
    renderizaJogo();
}

renderizaJogo();
