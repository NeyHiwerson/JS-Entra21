$(document).ready(function(){
    /* se o documento estiver pronto siga as proximas instrucoes */
    console.log("Documento pronto!");
    const divExibe = $("#exibe");
    console.log(divExibe);
    console.log(divExibe.html());
    console.log(divExibe.text());

    const divAlerta = $("#alerta");
    divAlerta.addClass("amarelo");
    setInterval(() => divAlerta.removeClass("amarelo"), 3000);

    setInterval(() => divAlerta.fadeToggle("slow", "linear"), 2000);

    const input = $("input").on("click", () => {
        alert("Você clicou no input");
    })

    input.on("change", ($this) => {
        //console.log($this.target.value);
        divExibe.text($($this.target).val());
    })

    console.log(input.val());

});