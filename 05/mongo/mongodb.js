let exec = async () => {
  const { MongoClient: MongoDB } = require('mongodb')
  const client = new MongoDB(
    'mongodb://localhost:27017',
    {
      useNewUrlParser: true
    }
  )
  let ret
  ret = await client.connect()
  // console.log('connect:', ret)
  const db = client.db('test')
  const user = db.collection('user')
  //插入
  ret = await user.insertOne({
    name: 'tom',
    age: 1
  })
  // console.log('插入:', JSON.stringify(ret))

  //更新
  ret = await user.updateOne({ name: 'tom' }, {
    $set: { name: 'jerry' }
  })
  // 删除
  ret = await user.deleteOne({ name: 'tom' })
  await user.deleteMany()
  //查询
  ret = await user.findOne()
  console.log('查询：', JSON.stringify(ret))

  // client.close()

}
exec()