import fetch from 'node-fetch';

function checkStatus() {
    
}

function gerateURLs(arrayLinks) {    
   return arrayLinks.map(objectLink => Object.values(objectLink).join());
}

export default function validateURLs(arrayLinks) {
    return gerateURLs(arrayLinks);
}

