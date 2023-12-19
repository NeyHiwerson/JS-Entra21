
const url_base = "https://pokeapi.co/api/v2/";

 let endpoint = "pokemon";

 let idPokemon = "/1";
 
 let lista_pokemons = [];

 let dados = [];

fetch(url_base + endpoint + idPokemon)
.then((response) => response.json())
  .then((data) => {
    //lista_pokemons = data.results;
    //lista_pokemons.forEach((element) => {
    //  console.log(element.name);
    //}); 
    console.log(data.name);
  })
.catch((erro) => {
    console.log(erro);
}); 

let endpoints = [];

fetch(url_base)
.then((response) => response.json())
.then((json) => {
    //endpoints = data.results;
    //console.log(json);
    exibeEndpoints(json);
})
.catch((erro) => {
    console.log(erro);

})
.finally(() => {
    console.log("Fim da requisição");
});

const exibeEndpoints = function (endpoints){
    const ul_endpoints = document.getElementById("endpoints");
    const keys = Object.keys(endpoints);
    keys.forEach((key) => {
        ul_endpoints.innerHTML += `<li onclick="consultaEndpoints('${key}','${endpoints[key]}')" >${key}</li>`;    
    });
}

const consultaEndpoints = function (key, endpoint){
    fetch(endpoint)
    .then((response) => response.json())
    .then((json) => {
        console.log(endpoint, json);
        dados = json;
        if (key == 'pokemon') {
            renderPokemons();
        }
    })
    .catch((erro) => {
        console.log(erro);
    });
};

const renderPokemons = function (){
    const div_items = document.getElementById("items");
    const btn_previous = document.getElementById("previous");
    const btn_next = document.getElementById("next");
    dados.results.forEach((item) => {
        if(dados.results.indexOf(item) == 0){
            div_items.innerHTML = "";
        }
        div_items.innerHTML += `<h1 style = "padding: 5px;">${item.name}</h1>`;
    
    });

    if(dados.previous == null){
        btn_previous.disabled = true
    }else{
        if(btn_previous.disabled == true){
            btn_previous.disabled = false;
        }
        btn_previous.onclick = function (){
             consultaEndpoints('pokemon', dados.previous);
        };
    }

    if(dados.next == null){
        btn_next.disabled = true 
    }else{
        if(btn_next.disabled == true){
            btn_next.disabled = false;
        }
        btn_next.onclick = function (){
             consultaEndpoints('pokemon', dados.next);
        };
    }
}

