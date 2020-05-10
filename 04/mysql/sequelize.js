(async () => {
  const Sequelize = require("sequelize");
  // 建立连接
  const sequelize = new Sequelize("testDB", "root", "12345678", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false
  });
  // 定义模型
  const Fruit = sequelize.define("Fruit", {
    name: { type: Sequelize.STRING(20), allowNull: false },
    price: { type: Sequelize.FLOAT, allowNull: false },
    stock: { type: Sequelize.INTEGER, defaultValue: 0 }
  });
  // 同步数据库，force: true则会删除已存在表 
  let ret = await Fruit.sync()
  console.log('sync', ret)
  ret = await Fruit.create({
    name: "香蕉",
    price: 3.5
  })
  ret = await Fruit.create({
    name: "苹果",
    price: 3.5
  })
  console.log('create', ret)
  ret = await Fruit.findAll()
  await Fruit.update(
    { price: 4 },
    { where: { name: '香蕉' } })
  console.log('findAll', JSON.stringify(ret))
  const Op = Sequelize.Op;
  ret = await Fruit.findAll({
    // where: { price: { [Op.lt]:4 }, stock: { [Op.gte]: 100 } }
    where: { price: { [Op.lt]: 4, [Op.gt]: 2 } }
  })
  console.log('findAll', JSON.stringify(ret, '', '\t'))
})()