const Koa = require('./MyKoa')
let app = new Koa()
// app.use(async (ctx, next) => {
//   const start = new Date().getTime()
//   console.log(`start ${ctx.url}`)
//   await next()
//   const end = new Date().getTime()
//   console.log(`请求${ctx.url},耗时${parseInt(end - start)}ms`)
// })
// app.use((req, res) => {
//   res.writeHead(200)
//   res.end('hi,koaDemo')
// })
// app.use(ctx => {
//   ctx.body = 'aha'
// })

app.listen(3001)