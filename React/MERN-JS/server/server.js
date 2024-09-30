const express=require("express");
const app=express();
const router=require("./routes/auth-route")

//mount the Router: to use the Router in your main express app, we can "mount" it at a specific URL prefix.
app.use("/api/auth",router) //due to use of this router module it will ignore below part

// app.get("/",(req,res)=>
// {
//     res.status(200).send("Welcome its from server app side")
// });

// app.get("/register",(req,res)=>{
//     res.status(200).send("its registration page from server app")
// });


const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running at port: ${PORT}`);
});