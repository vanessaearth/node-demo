const express = require('express')
const app = express()
const path = require('path')
const mongo = require('./model/db')

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html'))
})
app.get('/api/list', async (req, res) => {
  const { page, category, keyword } = req.query
  const condition = {}
  if (category) {
    condition.category = category
  }
  if (keyword) {
    condition.name = { $regex: new RegExp(keyword) }
  }
  const col = mongo.col('course')
  const total = await col.find(condition).count()
  const courses = await col.find(condition).skip((page - 1) * 10).limit(10).toArray()
  console.log(courses)
  res.json({
    code: 1,
    data: {
      courses,
      pagination: {
        total, page
      }
    }
  })


})
app.get('/api/category', async (req, res) => {
  const col = mongo.col('course')
  const data = await col.distinct('category')

  res.json({ code: 1, data })
})
app.listen(3000, () => {
  console.log('start: 3000')
})