const http = require('http')
const context = require('./content')
const request = require('./request')
const response = require('./response')
class MyKoa {
  constructor () {
    this.middlewares = []
  }
  listen (...args) {
    const server = http.createServer(async (req, res) => {
      //创建上下文
      let ctx = this.createContent(req, res)
      //中间件合成
      const fn = this.compose(this.middlewares)
      await fn(ctx)

      // this.callback(ctx)
      //处理响应
      res.end(ctx.body)
    })
    server.listen(...args)
  }
  // use (callback) {
  //   this.callback = callback
  // }
  //使用中间件
  use (middleware) {
    this.middlewares.push(middleware)
  }
  // 构建上下文
  createContent (req, res) {
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)
    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res
    return ctx
  }
  //合成函数
  compose (middleware) {
    return function (ctx) {
      return dispatch(0)
      function dispatch (i) {
        let fn = middleware[i]
        if (!fn) {
          return Promise.resolve()
        }
        return Promise.resolve(
          fn(ctx, function next () {
            //promise完成后在执行下一次
            return dispatch(i + 1)
          })
        )
      }
    }
  }
}
module.exports = MyKoa