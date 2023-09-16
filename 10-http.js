const ttp = require(`http`)

const server = ttp.createServer((req, res)=>{
    if(req.url === `/`){
        res.end(`This is out home page`)
    }
    else if(req.url === `/about`){
        res.end(`Our about us page`)
    }
    else {res.end(
        `<h1>Oops</h1>
        <p>We cant find the page you're requesting for</p>`
    )}
})

server.listen(5000,()=>{
    console.log(`Listening on port 5000`)
})
