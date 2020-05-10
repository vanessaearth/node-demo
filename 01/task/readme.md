js 执行的机制：先同步再异步，先微任务再宏任务

同步任务：异步任务以外的所有任务

异步任务：setTimeout setInterval ajax 事件绑定

微任务：process.nextTick 和 promise 后的 then 和 catch

宏任务：除了微任务以外的所有异步任务
