const net = require('net')
const chatServer = net.createServer() //
const clientList = []
chatServer.on('connection', client => {
  //有人连上，打印hi
  client.write('hi!\n')
  clientList.push(client)
  //监听客户端有发送消息
  client.on('data', data => {
    //服务端打印收到的消息
    console.log('receive:', data.toString())
    //广播，把收到的消息，给每个客户端发送一次
    clientList.forEach(v => {
      v.write(data)
    })
  })
})
chatServer.listen(7000)


//终端连接服务，mac先安装telnet，brew install telnet
// telnet localhost 7000

