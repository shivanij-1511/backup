// Product.js
/* Define Schema and model(Create Collection) */
 
const mongoose=require('mongoose')
const ProductSchema=mongoose.Schema({
    'productName':String,
    'brandName':String,
    'price':Number,
    '_id':Number
})
 
const ProductModel=mongoose.model("Product",ProductSchema);//creating collection
module.exports=ProductModel;