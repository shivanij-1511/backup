const http=require('http')

//we can pass this function 'demo' to createServer despite of writing res over there
// function demo(req,res){
//     res.write("<h1>Cybage Software Pvt Ltd</h1><br>")
//     res.write("<lable>Name</label><input type='text' name='user_name'><br>")
//     res.write("<lable>Email</label><input type='email' name='user_email'>")
//     res.end();
//     }

const server=http.createServer((req,res)=>{
    res.write("<h1>Cybage Software Pvt Ltd</h1><br>")
    res.write("<lable>Name</label><input type='text' name='user_name'><br>")
    res.write("<lable>Email</label><input type='email' name='user_email'>")
    res.end();
    })
server.listen(5000)