
const verificaCookie = function () {
    
    let cookies = document.cookie;
    
    if (!cookies.includes('cookie=ok')){
        cookies = document.cookie.split(" ");
        const tempoCookie = cookies[0].split("=")[1];
        document.cookie = `tmpck=${tempoCookie};expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/aula08/`
        document.location.assign('login.html');
    }

    cookies = document.cookie.split(" ");
    const tempoCookie = cookies[1].split("=")[1];

    const agora = new Date().getTime();
    
    let diferenca = (tempoCookie - agora);
    console.log(diferenca);
    if (diferenca < 6000) {
        const contador = diferenca < 1000 ? 0 : diferenca.toString().substring(0, 1);
        const sessao = document.getElementById('sessao');
        sessao.style.display = 'block';
        sessao.innerText = `Sessão expirará em ${contador} segundos`;	
    }

}

setInterval(() => verificaCookie(), 1000);
