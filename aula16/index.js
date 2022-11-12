const alunos = ["Luiz", "Maria", "João"];
console.log(alunos);

// acessando o valor "Maria" no array alunos
console.log(`Elemento cujo índice é 1: ${alunos[1]}`);

// modificando valor de array
alunos[2] = "Beatriz";
console.log(alunos);

// adicionando um novo elemeto no array
alunos[3] = "Luísa";
console.log(alunos);

// tamanho do array
console.log(alunos.length);

alunos[alunos.length] = "teste 1";
alunos[alunos.length] = "teste 2";
alunos[alunos.length] = "teste 3";
alunos[alunos.length] = "teste 4";
console.log(alunos);
alunos.push='Otávio';
console.log(alunos);

// alterando o elemento do índice 0 do array
alunos.unshift('Luíza');
alunos.unshift('Sérgio');


// testes ...
// console.log("forEach: ");
// alunos.forEach( (elemento) => console.log(`Elemento cujo índice é ${elemento}: ${alunos[elemento]}`));

// console.log("for: ");
// for(i=0; i<alunos.length; i++) {
//     console.log(`Elemento cujo índice é ${i}: ${alunos[i]}`);
// }