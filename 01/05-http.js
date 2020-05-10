const http = require('http')
const fs = require('fs')
const serve = http.createServer((request, response) => {
  // console.log('request', getPrototypeChain(request))
  // console.log('response', getPrototypeChain(response))
  const { url, method, headers } = request
  if (url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' })
        response.end('500,服务器错误')
      }
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  }
  else if (url === '/users' && method === "GET") {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ name: 'laoWang' }))
  }
  else if (method === "GET" && headers.accept.indexOf('image/*') !== -1) {
    fs.createReadStream('.' + url).pipe(response)
  }
  else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/plain;charSet=utf-8')
    response.end('404页面未找到')
  }


  // response.end('end')
})
serve.listen(3000, () => { console.log('start at 3000') })

function getPrototypeChain (obj) {
  const protoChain = []
  while (obj = Object.getPrototypeOf(obj)) {
    protoChain.push(obj)
  }
  return protoChain
}