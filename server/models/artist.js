
const mongoose=require("mongoose")
const artistSchema=new mongoose.Schema({
    Aname:{
        type:String
    },
   
    dob:{
        type:Date
    },
   
    bio:{
        type:String,
       
    }


})

module.exports=mongoose.model("Artist",artistSchema)