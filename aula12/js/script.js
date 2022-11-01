let varA = 'A';     // aponte para -> B
let varB = 'B';     // aponte para -> C
let varC = 'C';     // aponte para -> A

// Resposta
const temp = varA;
varA=varB;
varB=varC;
varC=temp;
console.log(varA, varB, varC);