const express=require('express')
const ex=express();
ex.set('view engine','ejs')

ex.get("/profile",(req,res)=>{
const data={
    name:"shivani",
    email:"shivanij@cybage.com",
    designation:"Software Engineer",
    skills:['React','C++','node']
}
res.render('profile.ejs',{'emp':data}) //sending object also but its a optional argument

})
ex.listen(5500)