# Curso de JavaScript and TypeScript do básico ao avançado 2022

**Referência:** https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/

---

## Seção 2: JavaScript básico - para iniciantes

### Aula 13: variáveis com `let`

- Não podemos criar variáveis com palavras **reservadas**;
- Variáveis precisam ter nomes significativos;
- Não pode começar o nome de uma variável com um número;
- Não podem conter espaços ou traços;
- utilizamos `camelCase`;
- case sensitive;
- Não é possível **redeclarar** variáveis com `let`;


### Aula 14: constantes com `const`

Uma constante é uma palavra que não pode ser modificada, como uma variável pode. Por exemplo, `const pi = 3.141592`. Suponhamos:

```javascript
const pi = 3.141592;
console.log(pi);
```
> 3.141592


```javascript
pi = 5.12;
console.log(pi);
```
> TypeError: Assignment to constant variable.

É permitido atribuir a uma constante (ou variável) o valor de outra constante (ou variável).

Ver o tipo de variável:

```javascript
typeof(pi);
```
> number

### Aula 16: Exercícios - Const e Let

Considere o código abaixo:
```javascript
console.log(nome + " " + sobrenome + " tem " + idade + " anos, pesa " + peso + "kg\n");
console.log("tem " + altura + " de altura e seu IMC é de " + imc + "\n");
console.log(nome + " nasceu em " + anoNascimento);
```

Ele significa a mesma coisa que o seguinte:
```javascript
console.log(`${nome} está testando template string, ela possui ${idade} anos.`);
```

O recurso de colocar uma variável dentro da String através de crases e ${nome_variável} se chama **template strings**.

### Aula 18: Let vs Var - Primeira diferença

- Primeira diferença: `var` pode ser redeclarado, ao contrário de `let`.

É possível declarar variáveis das seguintes formas:
- `let variavel;`
- `var variavel;`
- `const constante;`
- `variavel;`

Porém, **não se recomenda usar a segunda e quarta forma**.

### Aula 19: Tipos de dados primitivos

Em JavaScript puro não utilizamos tipagem de dados. Java, por exemplo, colocamos: 
```java
String nomeAluno = "Beatriz";
double pi = 3.14;
```

Em Javascript é simplesmente:
```javascript
const nomeAluno = "Beatriz";    // string
const numPi = 3.1415;       // number
const aprovado = false      // booleano
```

Outro detalhe também é que apesar de existirem diversos domínios no conjunto numérico, não explicitamos se é um **inteiro**, **real**, **racional**, etc.

Outro ponto a se observar também é a **difrença entre `null` e `undefined`**. Considere a variável abaixo:
```javascript
let nomeAluno;
let emailAluno = null;
```

O primeiro será settado por *default* o valor de **undefined**. Enquanto o segundo é explicitado como **null**. Em ambos os casos, **não existe referência para a memória**.

*Obs.: só é possível criar uma variável sem inicializá-la se esta for `let`.*

Existe uma diferença entre tipos de dados primitivos e tipos de dados passados por referência. Quando se é por referência, o segundo objeto passa a ser uma cópia do outro. Veja os códigos abaixo.

```javascript
const a = [1, 2];
const b = a;
console.log(a, b);
```
> [1, 2] [1, 2]

```javascript
b.push(4);
console.log(a, b);
```

O resultado **adequado** seria:
> [1, 2] [1, 2, 4]

Porém, o que, de fato, resulta é:
> [1, 2, 4] [1, 2, 4]

Isso se deve ao fato de apontarem para a **mesma posição da memória**.

### Aula 21: Alert, confirm e prompt (Navegador)



### Conteúdo extra

Segundo [Mozilla MDN](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics#:~:text=JavaScript%20%C3%A9%20a%20linguagem%20de,%2C%20estilo%20din%C3%A2mico%2C%20anima%C3%A7%C3%B5es), existem cerca de 5 tipos de dados diferentes no Javascript. São eles:

- String: uma sequência de caracteres. `let minhaVariavel = 'Bob';`

- Number: números inteiros e reais. `let minhaVariavel = 10;`

- Boolean: valor lógico, em que pode ser true ou false. `let minhaVariavel = true;`

- Array: uma estrutura que permite armazenar vários valores em uma única variável. 
```javascript
let meuArray = ['Bob', 1, 4.10, 'Josh'];

console.log(meuArray[0]);
```

A saída do `console.log(meuArray[0])` é:
> Bob


- Object: tudo em javascript é um **objeto** e pode ser armazenado em uma variável. Todos os exemplos acima são Objects também. `let minhaVariavel = document.querySelector('h1');`


Com relação aos operadores matemáticos, eles seguem o padrão de * para multiplicação, + para adição, - para subtração e / para divisão. O adendo é relacionado aos operadores relacionais, onde teremos algumas diferenças do padrão.

- **Atribuição:** `=`

- **Operador de igualdade:** `===`

- **Negação, não igual:** `!`, `!==`

#### Condicionais

Uma estrutura condicional é da seguinte forma:

```javascript
let doceFavorito = "Chocolate";

if (doceFavorito === "chocolate") {
    alert("Opa, eu amo chocolate também!");
} else {
    alert("O meu doce favorito é açaí!");
}
```

#### Funções

Funções são uma forma de encapsular funcionalidades de maneira que possamos reutilizar posteriormente. A expressão abaixo é uma função:
```javascript
let minhaVariavel = document.querySelector("h1");
```

```javascript
function multiplica(num1, num2) {
    return num1*num2;
}

// chamado a funcao multiplica
multiplica(2, 2);
multiplica(1000, 0.10);
```

#### Eventos

Os eventos são uma forma de interagir em um site, são estruturas que percebem elementos no navegador. Por exemplo, quando você quer exibir um modal toda vez que passar por um botão ou apertar um botão. Esses procedimentos se chamam **eventos**. Vejamos um exemplo:

```javascript
document.querySelector('html').onclick = function() {
    alert('Ai! Para de me cutucar!');
}
```
