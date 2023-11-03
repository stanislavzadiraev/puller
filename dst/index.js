const { exec } = require('node:child_process');
import { readFile, writeFile, cp, rm } from 'node:fs/promises'

const index = () =>
    readFile('package.json')
        .then(data => JSON.parse(data))
        .then(json => console.log(json))

export default index