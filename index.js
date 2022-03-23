import chalk from 'chalk';
import fs from 'fs';

//***TRATAMENTO DE ERRO***/
function treatError (err) {
    throw new Error(chalk.red(err.code, 'Não há arquivo no caminho!'));
}

//***FUNÇÃO ASINCRONA COM ASYNC E AWAIT***/
async function getFile(pathOfFile) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(pathOfFile, encoding)
        console.log(chalk.blue(text));
    }catch(err){
        treatError(err);
    }    
}

//***FUNÇÃO ASINCRONA COM THEN() E CATCH()***/
// function getFile(pathOfFile) {
//     const encoding = 'utf-8';

//     fs.promises
//     .readFile(pathOfFile, encoding)
//     .then((text) => console.log(chalk.blue(text)))
//     .catch((err) => treatError(err))
// }

//***FUNÇÃO SINCRONA***/
// function getFile (pathOfFile) {     
//     const encoding = 'utf-8';

//     fs.readFile(pathOfFile, encoding, (err, text) => {
//         if(err) {
//             treatError(err);
//         }else {
//             console.log(chalk.blue(text));
//         }
//     })
// }
getFile('./arquivos/texto1.md');