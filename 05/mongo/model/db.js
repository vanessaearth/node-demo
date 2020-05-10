
const conf = require("./conf");
const EventEmitter = require("events").EventEmitter;
// 客户端
const MongoClient = require("mongodb").MongoClient;
class Mongodb {
  constructor (conf) {
    this.conf = conf
    this.emitter = new EventEmitter();
    // 连接
    this.client = new MongoClient(
      conf.url,
      { useNewUrlParser: true }
    )
    this.client.connect(err => {
      if (err) throw err;
      console.log("连接成功");
      this.emitter.emit("connect")
    })
  }
  col (colName, dbName = conf.dbName) {
    return this.client.db(dbName).collection(colName)
  }
  once (event, cb) {
    this.emitter.once(event, cb)
  }
}
module.exports = new Mongodb(conf)
