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

### Aula 11: Arrays

Os Arrays são considerados objetos em JS, porém eles servem como **listas**. Podemos ter itens ded qualquer tipo de dado também, porém não por chave e valor e sim por **índice** (inicia-se por 0).

> Obs.: não confundir objetos com arrays. Obj é `{}` e arrays são `[]`

Código da aula:
```javascript
var arr = [5, "Beatriz", true, {teste: 1, teste: 2}];       // obj => {}

console.log(arr);

var arr2 = [2, 3, 4];
console.log(arr2);

// acessando elementos de array
console.log(arr[1], arr[3]);
console.log(arr2[0]);

// Inserindo elemento no array
arr2[4] = 10;
console.log(arr2[4]);

// Modificando elemento de um array
arr[2] = false;
console.log(arr);
```

### Aula 14: Else if e else
Caso a instrução do `if` seja negativa, podemos adicionar `else` que é a outra condicional a ser executada.
Assim, criamos uma **bifurcação** no código.

Já a instrução `else if` nega a anterior e faz uma nova comparação, adicionando, portanto, mais um bloco de código.

Código da aula:
```javascript
var nome = "Beatriz";

if (nome == "Pedro") {
    console.log("O nome dele é Pedro!");
}  else if (nome == "João") {
    console.log("O nome dele é João e está na lista!");
}
else {
    console.log("O nome dele não é Pedro!");
}

let idade=19;

if (idade > 20) {
    console.log("Ele pode entrar na festa");
} else if (idade >= 18) {
    console.log("Ele só pode entrar com autorização!");
} else {
    console.log("Ele não pode entrar na festa!")
}
```
