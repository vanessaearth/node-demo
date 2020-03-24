const http = require('http')
const serve = http.createServer((request, response) => {
  console.log('request')
  response.end('end')
})
serve.listen(3000)

function getPrototypeChain (obj) {
  const protoChain = []
  while (obj = Object.getPrototypeOf(obj)) {
    protoChain.push(obj)
  }
  return protoChain
}