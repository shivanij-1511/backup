const mongoose=require('mongoose')
// mongoose.connect("mongodb://localhost:27017/CRUD", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('Database connected successfully'))
// .catch(err => console.error('Database connection error:', err));

const con=mongoose.connect("mongodb://localhost:27017/CRUD")
if(con){
    console.log("DB connected successfully");
}
else{
    console.log("db unable to connect");
}

const bookSchema=new mongoose.Schema(
    {
        'bookName':String,
        'authorName':String,
        'price':Number
    }
)


//insert book details in collection

const saveInDB=async()=>{
    //create model
    const BookModel=mongoose.model("BookDetails",bookSchema)
    let data=new BookModel({
        'bookName':"C programming",
        'authorName':"Ajay mithal",
        'price':500
    })
let result=await data.save();
console.log(result);
}
// saveInDB()

//update record

const UpdateInDB=async()=>{
    const BookModel=mongoose.model("BookDetails",bookSchema)
    let result=await BookModel.updateOne(
        {
            "bookName":{$eq:'C programming'}
        },
        {
            $set:{
            'price':600
        }}
    )
    console.log(result);
}
// UpdateInDB()

//delete

const deleteInDB=async()=>{
    const BookModel=mongoose.model("BookDetails",bookSchema);
    const result=await BookModel.deleteOne({bookName:{$eq:'C programming'}})
    console.log(result);
}
// deleteInDB()

//read
const FindInDB=async()=>{
    const BookModel=mongoose.model("BookDetails",bookSchema);
    const result=await BookModel.findOne({bookName:{$eq:'C programming'}})
    console.log("read");
    console.log(result);
}

FindInDB()