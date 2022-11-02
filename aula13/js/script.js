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



let nomeArquivo = input("nome do arquivo: ");
let extensaoDoArquivo = input("extensão do arquivo: ");
console.log(nomeArquivo.concat("."+extensaoDoArquivo));