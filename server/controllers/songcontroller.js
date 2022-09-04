


const Song=require("../models/songs")

var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'djr1wboco', 
    api_key: '452743524234481', 
    api_secret: '4j2PspeLcPWDCx4fQXCQbFcEHJg',
    secure: true
  });
const savedata=(req,res)=>{
    
    let splitarray=req.files.artwork.path.split("\\")
 
    var imageFile = req.files.artwork.path;
    cloudinary.uploader.upload(imageFile, function(error, result)
        {
             
            if(error)
            {
                console.log(error)
            }
            else{
            const song=new Song({
                artwork:result.url,
              
                dor:req.body.dor,
                Aname:req.body.Aname,
                song:req.body.song,
                rating:req.body.rating
          
            })
            song.save().then(data=>{
                res.send({
                    message:"data saved",
                    data:data
                    
                })
            })
         
        
        }
    })
}
const editrating=(req,res)=>{
    const data=req.body
    console.log(data)
    Song.updateOne({_id:data._id},{$set:{rating:data.rating}}).then(response=>{
        res.send({
            message:"data updated"
        })
    }).catch(err=>{
        console.log(err)
    })
}
const getdata=(req,res)=>{
    Song.find().then(result=>{
        res.send({
            
            data:result
        })
    })
}

module.exports={
    savedata,
    getdata,editrating
    
}
