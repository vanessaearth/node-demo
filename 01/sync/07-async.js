const log = (name) => {
  console.log(`log...${name}` + new Date().toLocaleDateString())
}
exports.callback = () => {
  setTimeout(() => {
    log('cb1')
    setTimeout(() => {
      log('cb2')
      setTimeout(() => {
        log('cb3')

      }, 100)
    }, 100)
  }, 100)
}