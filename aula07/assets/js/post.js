/* outra forma de consumir com outros metodos e usar fetch consumindo API
usando https://jsonplaceholder.typicode.com/ */

let cont = 1;

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Mundial de Clubes',
        body: 'Fluminense vai a final do mundial, após ganhar de 2 a 0 do Al-Ahly!',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

function limpaConsole(){
    document.getElementsByName("titulo")[0].value = "";
    document.getElementsByName("descricao")[0].value = "";
    let mensagem = document.getElementById("instucaoAoUsuario");
    mensagem.innerText = "Cadastro realizado com sucesso!";
    setTimeout(function(){
        mensagem.innerText = "";
    }, 3000) 
}

function cadastrarTitulo() {
    const titulo = document.getElementsByName("titulo");
    const descricao = document.getElementsByName("descricao");
    //console.log(titulo[0].value, descricao[0].value);

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: titulo[0].value,
        body: descricao[0].value,
        userId: cont
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        limpaConsole();
        cont++;
    });


}
