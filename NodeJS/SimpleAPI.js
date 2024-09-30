const http=require('http')
const info=require('./info')


const server=http.createServer((req,res)=>{
res.writeHead(200,{'content-Type':'application/json'})

// res.write(JSON.stringify({name:"Shivani",email:"shivanij@cybage.com"}))
res.write(JSON.stringify(info))

res.end()
    })
server.listen(4000)