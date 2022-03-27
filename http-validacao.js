import fetch from 'node-fetch';

function handleErrors(error) {
    throw new Error(error.message);
}

async function checkStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
                const res = await fetch(url)
                return res.status;
       }))
    return arrayStatus;               
    }catch (error) {
        handleErrors(error);
    }
    
  
}

function gerateURLs(arrayLinks) {    
    return arrayLinks
        .map(objectLink => Object
            .values(objectLink).join());
}

export default async function validateURLs(arrayLinks) {
    const links = gerateURLs(arrayLinks);
    const linksStatus = await checkStatus(links);
    
    const resultados = arrayLinks.map((object, index) => ({
        ...object, 
        status: linksStatus[index]
    }))
    return resultados;
}


