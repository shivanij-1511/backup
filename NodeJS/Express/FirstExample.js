const express=require('express')
const app=express()
app.use(express.json())

app.get("",(req,res)=>{
    res.send("Cybage Softwares pvt ltd pune")
})
app.get("/login",(req,res)=>{
    res.send(`<h1>CYABGE LOGIN FORM</h1><br>

    <input type="text" name="username"></input><br>`)
    res.end()
})
app.get("/home",(req,res)=>{
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get("/loginPage",(req,res)=>{
    res.sendFile(`${__dirname}/views/Login.html`)
})

//insert
app.post("/insertUser",(req,res)=>{
    console.log(req.body);//to get value from req body
    res.sendFile(`${__dirname}/views/home.html`)
})

//delete
app.delete("/deleteUser/:id",(req,res)=>{
    console.log(req.params.id); //get value recieved from path
    res.sendFile(`${__dirname}/views/home.html`)
})

app.listen(3000)