const Koa = require('./MyKoa')
let app = new Koa()
const delay = (ctx) => Promise.resolve(resolve => {
  setTimeout((ctx) => {
    ctx.body += 'delay'
    console.log('delay')
    resolve()
  }, 2000)
})
app.use(async (ctx, next) => {
  ctx.body = '1'
  await next()
  ctx.body += '5a'
})
app.use(async (ctx, next) => {
  ctx.body += '2'
  await delay(ctx)
  await next()
  ctx.body += '4'
})

app.use(async (ctx, next) => {
  ctx.body += '3'

})

app.listen(3001)