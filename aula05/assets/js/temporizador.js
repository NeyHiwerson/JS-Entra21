let contagem = 0;
let controleContagem = true;
let contvoltas = 1;

const temporizador1 = document.getElementById("temporizador1");
const informeUsuario = document.getElementById("informe-usuario");

const contador = function () {
  contagem++;
  temporizador1.innerHTML = `<h2>${contagem}</h2>`;
};

let repita1 = setInterval(contador, 1000);

const pararTemporizador1 = (elemento) => {
  clearInterval(repita1);
  controleContagem = false;
  //informar ao usuário demais instruçoes
  informeUsuario.innerHTML = `
    <h4>Para continuar clique em continuar</h4>
    <h4>Para reiniciar clique em reiniciar</h4>
    `;
  /* função para apagar instruções após 3 segundos */
  setTimeout(() => {
    informeUsuario.innerHTML = "";
  }, 3000);
};

const continuarTemporizador1 = () => {
  if (!controleContagem) {
    repita1 = setInterval(contador, 1000);

    //informar ao usuário demais instruçoes
    informeUsuario.innerHTML = `
      <h4>Para Parar clique em Parar</h4>
      <h4>Para reiniciar clique em reiniciar</h4>
      `;
    controleContagem = true;
    /* função para apagar instruções após 3 segundos */
    setTimeout(() => {
      informeUsuario.innerHTML = "";
    }, 3000);
  }
};

const reiniciarTemporizador1 = () => {
  if(controleContagem == false){
    clearInterval(repita1);
    contagem = 0;
    repita1 = setInterval(contador, 1000);
    informeUsuario.innerHTML = `
      <h4>Para Parar clique em Parar</h4>
      <h4>Para reiniciar clique em reiniciar</h4>
      `;
    controleContagem = true;
    setTimeout(() => {
      informeUsuario.innerHTML = "";
    }, 3000);
  }else{
    informeUsuario.innerHTML += `<h4>Time ${contvoltas}: ${contagem} segundos.</h4>`;
    contagem = 0;
    contvoltas++;
  }  
};
