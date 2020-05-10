const express = require('express')
const app = express()
const proxy = require('http-proxy-middleware').createProxyMiddleware
console.log('111:', proxy)
app.use(express.static(__dirname + '/'))
app.use('/api', proxy({
  target: 'http://localhost:3100', changeOrigin: false
}));

app.listen(3000, () => {
  console.log('proxy is start 3000')
})