//This NPM module is not in package.json
const fetch = require('node-fetch');

function OpenSourcesAPI(domains) {
    return fetch(`http://localhost:3000/sources?domains=${domains}`)
        .then(response => response.json())
}

let result = OpenSourcesAPI('["100percentfedup.com","365usanews.com"]');

result.then((data) => {
    //Do something with data
    console.log(data)
});
