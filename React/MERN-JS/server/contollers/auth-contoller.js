//homepage logic
const home=async (req,res)=>{
    try {
        res
        .status(200)
        .send("Welcome its from controller side");
    } catch (error) {
        res
        .status(400)
        .send({msg:"its an error of home controller"})
      
    }
}

//registration logic
const register=async(req,res)=>{
    try {
        res
        .status(200)
        .send("its registration page from controller");
    } catch (error) {
        res
        .status(400)
        .send({msg:"its an error of register controller"})
      
    }
}

module.exports={home,register}