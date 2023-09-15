const os = require('os')
const user = os.userInfo()
const uptime = os.uptime()

const currentos = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}
console.log(`The system uptime is ${uptime} seconds`)
console.log(currentos)