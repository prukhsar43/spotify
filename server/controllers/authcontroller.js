const User=require('../models/user')
const bcrypt=require('bcrypt')
const JWT=require('jsonwebtoken')


const addUser=async(req,res)=>{

    const{name,email,password}=req.body

    if(!name||!email||!password){

        return res.status(400).json({
            message:"Required fields are empty"
        })
    }

    let hash=await bcrypt.hash(password,10)


    try{
           
           const emailFind=await User.findOne({email:email})

           if(emailFind){
              res.status(400).json({message:"User already exists"})
           }

           else{

                 const newUser= new User({
                    name,email,password:hash
                 })

                await newUser.save()
                res.status(200).json(newUser)
           }

    }
    catch(error){
        console.log(error)
        res.status(404).status({ message: error.message })
    }
}



const loginAuth=async(req,res)=>{
        
       const{email}=req.body
       const passwords=String(req.body.password)

       try{

           const loginUser=await User.findOne({email:email})
           if(!loginUser){
              return res.status(404).json()
           }

           const ispasswordCorrect = await bcrypt.compare(passwords, loginUser.password)
           if (!ispasswordCorrect) return res.status(404).json({ message: "Inncorrect password" })
   
           const token = JWT.sign({ id: loginUser._id },
               "DELTAX")
   
           const { password, ...other } = loginUser._doc
   
           res.status(200).json({ ...other, token })
   
   
       } catch (error) {
           res.status(404).json({ message: error.message })
       }

       

       
}

module.exports={addUser,loginAuth}
