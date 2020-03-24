const fs = require('fs')
const rs = fs.createReadStream('./check.png')
const ws = fs.createWriteStream('./check.png')

rs.pipe(ws)