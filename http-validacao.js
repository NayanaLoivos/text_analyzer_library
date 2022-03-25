import fetch from 'node-fetch';

async function checkStatus(arrayURLs) {
    //promises async await
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const res = await fetch(url)
        return res.status;
    }))
    return arrayStatus;    
}

function gerateURLs(arrayLinks) {    
   return arrayLinks.map(objectLink => Object.values(objectLink).join());
}

export default async function validateURLs(arrayLinks) {
    const links = gerateURLs(arrayLinks);
    const linksStatus = await checkStatus(links);
    return linksStatus;
}


