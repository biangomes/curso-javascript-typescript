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