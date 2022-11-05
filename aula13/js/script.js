let umaString = 'Um "texto"';
let doisString = "Um \"texto\"";        // escapando string
let tresString = "Um \\texto";          // usando uma barra no texto

console.log(umaString);
console.log(doisString);
console.log(tresString);

let quatroString = "Um texto";
console.log(quatroString.slice(3, 6));

let caminhoDoArquivo = "C:\\\Users\\\beatr\\\Documents\\\input.csv";
console.log(caminhoDoArquivo.charAt(caminhoDoArquivo.length-3));


// Pode ser usado para capturar a extensão de um arquivo
let caminhoDeOutroArquivo = "C:\\\Users\\\beatr\\\Documents\\\input.csv";
console.log(caminhoDeOutroArquivo.slice(caminhoDeOutroArquivo.length - 3, caminhoDeOutroArquivo.length));


let poesia = "Há uma pedra no meio do caminho";
let continuaPoesia = "No meio do caminho há uma pedra";
console.log(poesia + "\n" + continuaPoesia);
console.log("Usando concat: \n\n" + poesia.concat("\n" + continuaPoesia));


// Index de uma palavra
let nome = "Beatriz Nascimento Gomes";
console.log(nome.indexOf("Gomes"));
console.log(nome.indexOf("o", 18));  // Primeira ocorrência do caractere "o" a partir do index 3
// lastIndexOf
console.log(nome.lastIndexOf("o", 19)); // Primeira ocorrência do caractere "o" do fim pro início a partir do index 19


// Expressão regular
console.log(nome.match(/[a-z]/g));
console.log(nome.search(/[a-z]/g));