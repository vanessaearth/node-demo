module.exports = async function (ctx, next) {
  const { res, req } = ctx
  const blackList = ['127.0.0.1']
  const ip = getClientIp(req)
  if (blackList.includes(ip)) {
    ctx.body = 'not allowed'
  } else {
    await next()
  }
};
function getClientIp (req) {
  return (
    req.headers['x-forwarded-for'] || // 判断是否有反向代理IP
    req.connection.removeAddress || // 判断connection的远程IP
    req.socket.remoteAddress || // 判断后端socket的IP
    req.connection.socket.remoteAddress
  )
}
