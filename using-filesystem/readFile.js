const http = require('http');

// Importar file system com objeto promises
const fs = require('fs').promises;

async function readFile(filePath) {
    // try catch para capturar os erros nos processos de leitura de arquivo
    try {
        const data = await fs.readFile(filePath);       // retorna um objeto Buffer (armazena qualquer tipo de arquivo)
        console.log(data.toString());       // converte o Buffer para String
    } catch (error) {
        console.error(`got an error trying to read the file: ${error.message}`);
    }
}

readFile('./hellos.txt');