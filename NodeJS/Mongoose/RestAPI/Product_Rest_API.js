
require('./config')
const ProductModel=require('./Product')
const express=require('express')
const ex=express()
ex.use(express.json())//To accept data from Postman
 
 
//POST API--insert data
ex.post("/insert",async(request,response)=>{
    const product=new ProductModel(request.body)
    const result=await product.save()
    response.send(result)
})
 
//get API--Fetch Document from Database Collection
ex.get("/fetch",async (request,response)=>{
    const result=await ProductModel.find();
    response.send(result)
})
 
//delete API--to rfemove document from Collection
ex.delete("/delete/:productName",async(request,response)=>{
    const result=await ProductModel.deleteOne({productName:{$eq:request.params.productName}})
    response.send(result)
})
 
 
//PUT API---Update Record
ex.put("/update/:_id",async (request,response)=>{
    const result=await ProductModel.updateOne(
        {_id:request.params._id},
        {
            $set:{
               ...request.body
            }
        }
    )
    response.send(result)
})
 
ex.listen(4400)
 