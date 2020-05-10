const mongodb = require('./model/db')
mongodb.once('connect', async () => {
  const col = mongodb.col('course')
  await col.deleteMany()
  const data = new Array(100).fill().map((v, i) => {
    return {
      name: 'AA' + i,
      time: 90,
      category: Math.random() > 0.5 ? 'math' : 'english'
    }
  })
  await col.insertMany(data)
  console.log('插入数据成功')
})