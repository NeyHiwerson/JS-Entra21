const pessoas = [];
const pessoa = {
  nome: "",
  sobrenome: "",
  ano_nascimento: 1992,
};
const anoAtual = new Date().getFullYear();

console.log(pessoa);

pessoa.nome = "Rafael";
pessoa.sobrenome = "Silva";
pessoa.ano_nascimento = 1990;
pessoa.sexo = "Masculino";
pessoa.idade = function (){
  return anoAtual - this.ano_nascimento;
};
pessoa.status_ativo = true;
pessoa.fullName = () => pessoa.nome + " " + pessoa.sobrenome;//arrow function

pessoa.fullName2 = function () {
  let fullName = "";
  if(this.hasOwnProperty("nome")){
    fullName += this.nome
  }

  if(this.hasOwnProperty("sobrenome")){
    fullName += " " + this.sobrenome
  }
  return fullName;
}

pessoa.endereco = {
  logradouro: "Rua XalaYaZuki",
  numero: 123,
  complemento: "casa fundos",
  bairro: "Centro",
}
pessoa.hobies = ["Futebol", "Cinema", "Descansar"];

console.log(pessoa.nome + " " + pessoa.sobrenome);
console.log(pessoa.idade()+ " anos.");
console.log(pessoa.sexo);
console.log(pessoa['sexo']);
console.log(pessoa.fullName());

if (pessoa.sobrenome === undefined) {
    console.log("Na validação 1 a chave não existe");
}

if (!(pessoa.sobrenome in pessoa)) {
  console.log("Na validação 2 a chave não existe");
}

if (!pessoa.hasOwnProperty("sobrenome")) {
  console.log("Na validação 3 a chave não existe");
}

// Extração de chaves e valores para um array
const chaves_do_objeto = Object.keys(pessoa);
const valores_do_objeto = Object.values(pessoa);

console.log('chaves: ' + chaves_do_objeto);
console.log('valores: ' + valores_do_objeto);

pessoas.push(pessoa);
pessoas.push(pessoa);
//pessoas.push(structuredClone(pessoa));//structuredClone() clona o objeto, não aponta para o mesmo endereço de memória, porem não clona funções, da erro.
pessoas.push(JSON.parse(JSON.stringify(pessoa)));//tbm não clona funções, funciona mas deleta as funções.
pessoas.push({...pessoa});

console.log(pessoas);

const outraPessoa = {...pessoa};
outraPessoa.nome = "Joker";

pessoas[1].nome = "Rafaela";
pessoas[2].nome = "João";
pessoas[3].nome = "Ana";
pessoas[1].status_ativo = false;
pessoas[3].status_ativo = false;
console.log(pessoas[3].idade());
console.log(pessoas);
console.log(outraPessoa.nome);
