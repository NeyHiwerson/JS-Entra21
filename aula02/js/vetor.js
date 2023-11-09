const veiculos = [
    {modelo : "passeio", marca : "fiat"},
    {modelo : "SUV", marca : "ford"},
    {modelo : "hatch", marca : "volkswagen"},
    {modelo : "sedan", marca : "ford"},
    {modelo : "esportivo", marca : "porshe"},
    {modelo : "passeio", marca : "nissan"},
    {modelo : "SUV", marca : "renault"},
    {modelo : "hatch", marca : "tesla"},
    {modelo : "sedan", marca : "chery"},
    {modelo : "esportivo", marca : "McLaren"},
]

const exibe_veiculos = function () {
    const render = document.querySelector("#render");
    render.innerText = "";
    for (veiculo of veiculos) {
        render.innerHTML += `
        <div style="width: 25%; margin: 10px;">
            <h1>Modelo: <b>${veiculo.modelo}</b></h1>
            <h2>Marca: <b>${veiculo.marca}</b></h2>
        </div>
        `;
        
    }  
}