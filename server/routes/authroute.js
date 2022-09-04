const express=require('express')
const {addUser,loginAuth} =require('../controllers/authcontroller')

const addingUser=express.Router()

addingUser.post("/register",addUser)
addingUser.post("/login",loginAuth)

module.exports=addingUser