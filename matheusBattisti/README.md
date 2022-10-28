# Playlist "Curso de Javascript" - Matheus Battisti - Hora de Codar
**Referência:** https://youtu.be/x89T_rGiFiY

### Aula 10: Tipos de dados Objeto

Os objetos funcionam como um **array associativo** de outras linguagens, em que podemos criar propriedades com **chave** e **valor**. O objetivo é guardar um conjunto de valores para utilizar posteriormente.

Código da aula:
```javascript
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
```
