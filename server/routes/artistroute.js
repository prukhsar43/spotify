const express=require("express")

const artistrouter=express.Router()
const {savedata, getdata,getSongs,getall}=require("../controllers/artistcontroller")
artistrouter.post("/add",savedata)
artistrouter.get("/getdata",getdata)

artistrouter.get("/getall",getall)
artistrouter.get("/getsongs",getSongs)

module.exports= artistrouter
