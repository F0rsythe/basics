const fs = require(`fs`)
const path = require("path")

const filePath = `./content/assessment.txt`
// const base = fs.readFile(`./content/first.txt`,`utf8`, (err, res) =>{
//     if(err)
//     {
//         console.log(err)
//         return;
//     }
//     else{
//         console.log(res)
//         const text = res
//         fs.writeFile(filePath, text, (err, res)=>{
//             if(err)
//             {
//                 console.log(err)
//                 return;
//             }
//             else{
//                 console.log(`File ${path.basename(filePath)} has been created`)
//             }
//         })
//     }
// })
const text = fs.readFileSync(filePath, `utf8`)
fs.writeFileSync(filePath, "Addition to file", {flag: `a`})
console.log(text)