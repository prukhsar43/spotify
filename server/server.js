require("dotenv").config()
const app=require("./app")
const port=process.env.PORT || 8081
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/spotify").then(data=>{
    app.listen(port,()=>{
        console.log(data)
        console.log("Db Connected,server running",port)
    })
}).catch(err=>{
    console.log(err)
})






