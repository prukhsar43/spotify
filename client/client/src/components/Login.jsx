import React, { useState } from 'react';
import style from './Login.module.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
 



const Login = () => {
   
    const navigate = useNavigate()
    const [value, setValue] = useState({
        email: "",
        password: ""
    })

    const changeHandeler = (e) => {
        setValue({ ...value, [e.target.id]: e.target.value })
    }
    const Clickandelr = () => {
        axios.post("http://localhost:9090/auth/login", value).then((response) => {
            console.log(response.data.token)
            localStorage.setItem('token',response.data.token)
            if(response.data.token){

                setValue({
                    email: "",
                    password: ""
                })
                 
                navigate('/home')
            }
            
            else{
                navigate('/signup')
            }
            
             
        }).catch((err) => {
            alert(err.response.data.message)
            console.log(err)
        })
    }


    return (
        <>
         <h2 style={{marginTop:"20px"}}>Login</h2>
         <div style={{marginLeft:"400px",marginTop:"20px"}} >
         
            <Card style={{ width: "60%" , backgroundColor:"grey" }} >
                <CardContent>
           
                <TextField id="email" label="E-mail" variant="outlined" style={{width:"60%"}}
                    onChange={changeHandeler} value={value.email}  /><br />
                <TextField id="password" label="Password" variant="outlined" type="password" style={{ marginTop: "3%",width:"60%" }}
                    onChange={changeHandeler} value={value.password} autoComplete="current-password" /><br />
                <Button  variant="contained" onClick={Clickandelr}
                    style={{ marginTop: "3%",width:"60%",backgroundColor:"black"}}>Login</Button>

                <Typography style={{ marginTop: "4%", marginLeft: '20%',   marginBottom: "2%",   width: "60%" }} onClick={() => { navigate('/signup') }}>
                    <span style={{ marginTop: "3%",width:"60%" }}>Don't </span>have an account <span style={{color:"blue"}}>Signup</span>
                </Typography>
                </CardContent>
                 </Card> 
            </div>
        </>
    );
}

export default Login;