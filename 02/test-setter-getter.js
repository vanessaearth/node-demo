const obj = {
  info: {
    name: 'tom'
  },
  get name () {
    return this.info.name
  },
  set name (val) {
    this.info.name = val
  }
}
console.log(obj.name)
obj.name = 'jerry'
console.log(obj.name)