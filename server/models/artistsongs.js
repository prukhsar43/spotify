
const mongoose=require("mongoose")
const artistsongsSchema=new mongoose.Schema({
    Aname:{
        type:String
    },
   
    dob:{
        type:Date
    },
   
    song:{
        type:String,
       
    }


})

module.exports=mongoose.model("Artistsongs",artistsongsSchema)