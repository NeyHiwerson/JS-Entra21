const perfil = {
  nome: "Joana",
  status: false
}

const alteraStatus = function(elemento){
  perfil.status = !perfil.status;
  if (perfil.status) {
    elemento.classList.add("active");
  }else{
    elemento.classList.remove("active");
  }
  console.log(perfil.status);
}
