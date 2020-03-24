const fs = require('fs')
// 同步调用
const data = fs.readFileSync('./01-download.js')
console.log('data:', data, data.toString())

// 异步调用
fs.readFile('./01-download.js', (err, data) => {
  console.log('data:', data.toString())
})