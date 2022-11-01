let varA = 'A';     // aponte para -> B
let varB = 'B';     // aponte para -> C
let varC = 'C';     // aponte para -> A

// Resposta
const temp = varA;
varA=varB;
varB=varC;
varC=temp;

// [varA, varB, varC] = [varB, varC, varA];  => outra solução
console.log(varA, varB, varC);