// const os = require('os')
// const mem = os.freemem() / os.totalmem() * 100
// console.log(`内存占用：${mem.toFixed(2)}%`)


module.exports.clone = async function clone (repo, desc) {

  const { promisify } = require('util')

  const download = promisify(require('download-git-repo'))
  const ora = require('ora')
  const process = ora('下载...项目')
  process.start()
  try {
    await download(repo, desc)
    process.succeed()
  } catch{
    process.fail()

  }
  // download(repo, desc, err => {
  //   // console.log(err ? 'Error' : 'Success')
  //   if (err) {
  //     process.fail()
  //   } else {
  //     process.succeed()
  //   }
  // })
}
