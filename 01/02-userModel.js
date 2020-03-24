// const os = require('os')
// const mem = os.freemem() / os.totalmem() * 100
// console.log(`内存占用：${mem.toFixed(2)}%`)

const repo = 'github:su37josephxia/vue-template'
const desc = 'test'
const { clone } = require('./01-download.js')
clone(repo, desc)