跨域是浏览器限制的问题

api.js proxy.js 是 2 个服务，在 index.js 中引入可以同时启动 2 个服务，index.html 设置接口访问 3100，地址栏访问 3000 端口服务

跨域 1.后端接口设置，res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000') 2.
