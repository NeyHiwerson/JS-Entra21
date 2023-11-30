/* array de frutas com 10 elementos */
let frutas = [
    "banana",
    "maçã",
    "uva",
    "pera",
    "melancia",
    "morango",
    "abacaxi",
    "manga",
    "kiwi",
    "limão"    
]

console.log(frutas);

//for in itera sobre o indice
for (const key in frutas) {
    console.log("indice:",key , " fruta: ", frutas[key]);
}

frutas.unshift("melão");//adiciona ao inicio
frutas.push("laranja");//adiciona ao final

//for of itera sobre o item do array
for (const item of frutas) {
    console.log(item);
}
const valorRemovidoInicio = frutas.shift();
const valorRemovidoFinal = frutas.pop();

//for each itera sobre o item do array
frutas.forEach((itemDoArray, indiceDoItem, oProprioArray) => {
    console.log("Posição:",  indiceDoItem, "item:", itemDoArray);
});

console.log(valorRemovidoInicio, valorRemovidoFinal);

console.table(frutas);

const posicao = frutas.indexOf("manga");
console.log("Posição:", posicao, "fruta:",  frutas[posicao]);

const verificaPosicao = function(nomeDaFruta, arrayDafruta){
    const posicao = arrayDafruta.indexOf(nomeDaFruta);
    let resultado;
    if (posicao == -1) {
        console.log("Fruta não encontrada");
    } else {
        resultado = arrayDafruta[posicao];
        console.log("A fruta",resultado,"esta na gondola", posicao);
    }
    return resultado;
}
    
verificaPosicao("uva", frutas);

const frutaExiste = frutas.includes("jaca");
console.log("Fruta existe?", frutaExiste);