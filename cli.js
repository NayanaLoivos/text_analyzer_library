import chalk from 'chalk';
import getFile from './index.js'
import validateURLs from './http-validacao.js';

const path = process.argv;

async function processText(pathOfFile) {  
    const result = await getFile(pathOfFile[2]);
    if(path[3] === 'validar') {
        console.log(chalk.yellow('links validados'), validateURLs(result));
    } else {
        console.log(chalk.yellow('Lista de links:'), result);
    }    
}

processText(path);
