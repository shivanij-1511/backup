const mongoose=require('mongoose')

const con=mongoose.connect("mongodb://localhost:27017/CRUD")
if(con){
    console.log("DB connected successfully");
}
else{
    console.log("db unable to connect");
}
