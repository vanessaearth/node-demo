const koa = require('../MyKoa.js')
const Router = require('./router.js')
const static = require('./static')

const app = new koa()
const router = new Router()
//访问静态资源
app.use(static(__dirname + '/public'))
//拦截黑名单中IP

router.get('/index', async ctx => {
  console.log('index page')
  ctx.body = 'index page'
})
router.get('/post', async ctx => { ctx.body = 'post page' })
router.get('/list', async ctx => { ctx.body = 'list page' })
router.post('/index', async ctx => { ctx.body = 'post2 page' })

app.use(router.routes())
app.use(ctx => {
  ctx.body = 'aha'
})
app.use(require('./interceptor'))

app.listen(3000, () => { console.log('start') })