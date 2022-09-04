const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
const artistrouter=require("./routes/artistroute")
const songrouter=require("./routes/songroutes")
const authrouter=require("./routes/authroute")

const path=require('path')
app.use("/artist",artistrouter)
app.use("/song",songrouter)
app.use("/auth",authrouter)
app.use("/image",express.static(path.join(__dirname, './routes/uploads')))

module.exports=app;