// /http/api.js
const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    const { method, url } = req;
    console.log('url:', url)
    console.log('method:', method)
    console.log('cookie:', req.headers.cookie)

    if (method == "GET" && url == "/") {
      fs.readFile("./index.html", (err, data) => {
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      });
    } else if (method == "GET" && url == "/api/users") {
      res.setHeader('Set-Cookie', 'cookie1=tom')
      // res.setHeader('Access-Control-Allow-Credentials', true)

      // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
      // res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify([{ name: "tom", age: 20 }]));
    }
    // else if (method === 'OPTIONS' && url === '/api/users') {
    //   res.setHeader('Access-Control-Allow-Credentials', true)

    //   res.writeHead(200, {
    //     "Access-Control-Allow-Origin": "http://localhost:3000",
    //     "Access-Control-Allow-Headers": "X-Token,Content-Type",
    //     "Access-Control-Allow-Methods": "PUT"
    //   });
    //   res.end();
    // }
    else if (method === 'POST' && url === '/api/save') {
      let reqData = []
      let size = 0
      //流，当有一滴水过来的时候，要收集起来
      req.on('data', data => {
        console.log('res on', data)
        reqData.push(data)
        size += data.length
      })
      req.on('end', function () {
        console.log('end')
        const data = Buffer.concat(reqData, size)
        console.log('data', size, data.toString())
        res.end(`formData:${data.toString()}`)
      })
    }
  })
  .listen(3100, () => {
    console.log('api start 3100')
  });