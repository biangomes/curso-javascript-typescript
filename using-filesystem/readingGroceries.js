const http = require('http');
const fs = require('fs').promises;

async function readingCsv() {
    try {
        const data = await readFile(filePath, { encoding: 'utf8' });
        console.log(data);
    } catch (error) {
        return `Error opening file: ${error.message}`;
    }
}

readingCsv('using-filesystem/groceries.csv');