const fs = require("fs")
fs.readFile('./content/result-sync.txt', "utf8",(err, result) => {
    if(err){
        console.log(err)
        return;
    }
    const first = result
    fs.readFile("./content/second.txt","utf8",(err, result)=>{
        if(err)
        {
            console.log(err)
        }
        const second = result
    })
  }
)
console.log("Done")