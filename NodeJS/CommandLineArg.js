const https=require('http')

const server=https.createServer((req,res)=>{
 
    console.log(process.argv); //[nodejs_location,currentfile_location,]
}
)
server.listen(5000)