var obj = {
    nome: "Beatriz",
    idade: 24,
    profissao: "",
    estaTrabalhando: null,
}

console.log(obj);

console.log(typeof(obj));
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

if (obj.profissao != null || obj.profissao != "") {
    obj.estaTrabalhando = true;
}
console.log(obj.estaTrabalhando);