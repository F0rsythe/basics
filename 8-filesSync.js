// Syncronous runs line by line which can cause some issues if tasks taskes too long
const { readFileSync, writeFileSync } = require('fs')
const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt","utf8")
writeFileSync("./content/result-sync.txt" , `Here is the result: ${first}, ${second}`, {flag: "a"})
console.log(first)
console.log(second)