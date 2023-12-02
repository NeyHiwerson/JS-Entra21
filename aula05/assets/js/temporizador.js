
let contagem = 0;

const temporizador1 = document.getElementById('temporizador1');

const contador = function(){
  contagem++;
  temporizador1.innerHTML = `<h2>${contagem}</h2>`;
}

let repita1 = setInterval(contador, 1000);

const pararTemporizador1 = (elemento) => {
  clearInterval(repita1);
  repita1 = null;
}

const continuarTemporizador1 = () => {
  if (repita1 == null) {
    repita1 = setInterval(contador, 1000);
  }
};

let testTimeout = setTimeout(() => {
  alert('O tempo acabou!');
}, 3000);

const pararTestTimeout = setTimeout(() => {
  clearTimeout(testTimeout);
  testTimeout = null;
});
