const { exec } = require('node:child_process');

const index = () =>
    readFile('package.json')
        .then(data => JSON.parse(data))
        .then(json => console.log(json))

export default index