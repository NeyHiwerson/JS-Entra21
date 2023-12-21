const btn_entrar = document.getElementById('btn_entrar');

btn_entrar.onclick = function(){
    createCookie();
    document.location.assign("index.html");

}

function createCookie(){
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 10 * 1;
    now.setTime(expireTime);
    document.cookie = "cookie=ok;expires=" + now.toUTCString() + ";path=/aula08/";
    document.cookie = `tmpck=${expireTime};path=/aula08/`;
}

