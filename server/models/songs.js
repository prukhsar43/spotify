
const mongoose=require("mongoose")
const songSchema=new mongoose.Schema({
    artwork:{
        type:String
    },
   
    song:{
        type:String
    },
   
    dor:{
        type:Date,
       
    },
    Aname:{
        type:String
    },
    rating:{
        type:Number
    }


})

module.exports=mongoose.model("Song",songSchema)