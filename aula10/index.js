const name = "Beatriz";     // string
const name2 = "Ana";        // string
const name3 = `Flávia`;     // string
const num1 = 10;            // string
const num2 = 9.48;          //string

let nomeAluno;      // undefined -> nao aponta para nenhum local da memória
let sobrenomeAluno = null; // nulo -> nao aponta para nenhum local da memória
const aprovado = false;     // boolean = true, falso (lógico)

console.log(typeof aprovado, aprovado);

// Diferença de tipo de dado primitivo e tipo de dado passado por referência
const a = [1, 2, 3];
const b = a;
console.log(a, b);      // atribuímos o valor de a para b

b.push(4);
console.log(a, b);      // o resultado correto seria a = [1, 2, 3], b = [1, 2, 3, 4], porém são iguais, pois apontam para o mesmo valor na memória