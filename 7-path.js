const path = require("path")

const filepath = path.join("/content", "subfolder", "text.txt")
const base = path.basename(filepath)
const absolute = path.resolve(__dirname, "content","subfolder", "text.txt")

console.log(path.sep)
console.log(filepath)
console.log(base)
console.log(absolute)