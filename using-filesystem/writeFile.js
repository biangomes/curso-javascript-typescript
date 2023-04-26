const fs = require('fs').promises;

// Funcao para criar o arquivo
async function openFile() {
    try {
        const csvHeaders = 'name,quantity,price'
        await fs.writeFile('groceries.csv', csvHeaders);
    } catch (error) {
        console.error(`Got an error trying to write to a file: ${error.message}`);
    }
}

// Funcao para escrever no arquivo
async function addGroceryItem(name,quantity,price) {
    try {
        const csvLine = `\n${name},${quantity},${price}`
        await fs.writeFile('groceries.csv',csvLine, { flag: 'a' });      // { flag: a} diz para o Node.js acrescentar ao inves de sobrescrever. Default: w
    } catch (error) {
        console.error(`Got an error trying to write to a file: ${error.message}`);
    }
}

// Adicionando os dados de forma assíncrona
(async function() {
    await openFile();
    await addGroceryItem('HyperX keyboard', 1, 700.00);
    await addGroceryItem('Redragon Cobra Mouse', 2, 350.00);
})();       // os ultimos parenteses indicam para invocar a funcao imediatamente (IIFE - Immediatly-Invoked Function Expression)