const { EventEmitter } = require('events')
const event = new EventEmitter()
event.on('some_event', num => {
  console.log('some_event事件触发：', num)
})
let num = 0
setInterval(() => {
  event.emit('some_event:', num++)
}, 1000)
console.log(111)