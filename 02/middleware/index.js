// const add = (x, y) => x + y
// const square = z => z * z

// const fn = (x, y) => square(add(x, y))
// console.log(fn(1, 2))

// const compose1 = (fn1, fn2) => (...args) => fn2(fn1(...args))
// const fn1 = compose1(add, square)
// console.log(fn1(2, 3))

// const compose2 = (...[first, ...other]) => (...args) => {
//   let ret = first(...args)
//   other.forEach(fn => {
//     ret = fn(ret)
//   })
//   return ret
// }
// const fn2 = compose2(add, square, square)
// console.log(fn2(2, 3))

//合成函数
function compose (middleware) {
  return function () {
    return dispatch(0)
    function dispatch (i) {
      let fn = middleware[i]
      if (!fn) {
        return Promise.resolve()
      }
      return Promise.resolve(
        fn(function next () {
          //promise完成后在执行下一次
          return dispatch(i + 1)
        })
      )
    }
  }
}
async function fn1 (next) {
  console.log('fn1')
  await next()
  console.log('end fn1')
}
async function fn2 (next) {
  console.log('fn2')
  await delay()
  await next()
  console.log('end fn2')
}
function fn3 (next) {
  console.log('fn3')
}
function delay () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('delay')
      resolve()
    }, 2000)
  })
}
const middleware = [fn1, fn2, fn3]
const finalFn = compose(middleware)
finalFn()