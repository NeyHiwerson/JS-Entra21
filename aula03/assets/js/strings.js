const renderiza_string = function(element){
    const valor = element.value.trim();
    const email = valor;
    console.log(valor);
    const valorArray = valor.split('');
    console.log(valorArray);
    //192.168.0.1
    const valorArrayPorPonto = valor.split('.');
    console.log(valorArrayPorPonto);
    const valorStringDoArrayPorPonto = valorArrayPorPonto.join('-');
    console.log(valorStringDoArrayPorPonto);
    const frase = "ola vida sofida, a vida é boa, so vc que dificulta a vida"
    const nome = "Ney"
    const sobrenome = "Costa"
    const outroValor = nome.concat("...", " ", sobrenome)
    const templateEmail = `
        <p>O email de [nome] é</p>
        <p> [email] </p>
    ` 
    console.log(outroValor);
    console.log(outroValor.replace('Costa', 'Ribeiro'));
    console.log(frase.replaceAll('vida', 'semana'));
    console.log(templateEmail.replace("[nome]", "Ney Ribeiro").replaceAll("[email]", email))
    

    //console.log(valor.value.trim());//trim tira espaços em branco
    //console.log(element.value.valueOf());

    const render = document.getElementById('render_string');
    //render.innerText = valor.value;
    function mascaraEmail(email){

        const posicaoArroba = email.indexOf("@");
        const inicioEmail = email.substring(0, posicaoArroba);
        const tamanhoDoPrefixo = inicioEmail.length;
        const fimEmail = email.substring(posicaoArroba);
        const mascaredEmail = email.substring(0, 2).padEnd(tamanhoDoPrefixo, '*').concat(fimEmail)

        return mascaredEmail
    }
    
    console.log(mascaraEmail(email));

    render.innerHTML = `
        <p>${valor.toUpperCase()}</p>
        <p>${valor.toLowerCase()}</p>
        <p>${valor.substring(1, 4)}</p>
        <p>Começa com Script? ${valor.toLowerCase().startsWith("script")}</p>
        <p>Termina com legal? ${valor.toLowerCase().endsWith("legal")}</p>
        <p>Tem a palavra chuva? ${valor.toLowerCase().includes("chuva")}</p>
        ${templateEmail.replace("[nome]", "Ney Ribeiro").replaceAll("[email]", "NeyRibeiro@email.com")}
        <p>${valor.repeat(4)}</p>
        <p>${valor.padEnd(25, "1")}</p>
        <p>${valor.padStart(10, 2)}</p>
        <p>${valor}</p>
        <p>${email.split(0)}</p>
    `
}