
const pegaInput = function(elemento){
    const render_number = document.getElementById("render_number");
    let valor = new Number(elemento.value.replace(',','.'));
    console.log("teste tipo: " + typeof valor);
    if(Number.isNaN(Number.parseInt(valor))){
        render_number.innerHTML = `
        <b style="color:red;
                font-size:20px;
                font-weight:bold;                
            "
        >Valor inválido, Informe um número.</b>
        `
        return;
    }

    render_number.innerHTML = `
        ${typeof valor} <br>
        ${Number.parseInt(valor)} <br>
        ${Number.parseFloat(valor)} <br>
        ${valor.toPrecision(3)} <br>
        ${valor.toFixed(2)} <br>
        ${valor.toString()} <br>   
    `; 
}
