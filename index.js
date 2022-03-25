import chalk from 'chalk';
import fs from 'fs';
 

//***EXTRAINDO LINKS COM EXPRESSÃO REGULAR COM O MÉTODO EXEC() NUMA ESTRUTURA DE REPETIÇÃO***/
function extractLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResult = [];

    let temp;
    while((temp = regex.exec(text)) != null) {
        arrayResult.push({[temp[1]]: temp[2]});
    }
    
    return arrayResult.length === 0 ? 'Não há links' : arrayResult;
}

// //***EXTRAINDO LINKS COM EXPRESSÃO REGULAR COM O MÉTODO EXEC()***/
// function extractLinks(text) {
//     const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
//     const extractedLinks = regex.exec(text);
//     console.log(extractedLinks);
// }

// //***EXTRAINDO LINKS COM EXPRESSÃO REGULAR COM O MÉTODO MATCH()***/
// function extractLinks(text) {
//     const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
//     const extractedLinks = text.match(regex);
//     console.log(extractedLinks);
// }


//***TRATAMENTO DE ERRO***/
function treatError (err) {
    throw new Error(chalk.red(err.code, 'Não há arquivo no caminho!'));
}

//***FUNÇÃO ASINCRONA COM ASYNC E AWAIT***/
export default async function getFile(pathOfFile) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(pathOfFile, encoding)
        return extractLinks(text);
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


