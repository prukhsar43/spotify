import React, { useState } from 'react'
 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {
    const navigate = useNavigate()
    const [userDetail, setUserDetail] = useState({
        name: "",
        email: "",
        password: "",
        repassword: ""
    })
    const changeHandeler = (e) => {
        setUserDetail({ ...userDetail, [e.target.id]: e.target.value })
    }

    const signUpHandeler = () => {
        if (userDetail.password !== userDetail.repassword) {
            alert("Password mismatched")
        } else {
            axios.post("http://localhost:9090/auth/register", userDetail).then((response) => {
                console.log(response.data)
                navigate('/')
                setUserDetail({
                    username: "",
                    email: "",
                    password: "",
                    repassword: ""
                })
                alert("You can log in your account. your account is created")
            }).catch((err) => {
               alert(err.response.data.message)
            })
        }
    }

    return (
        <>
        <h2 style={{marginTop:"20px"}}>SignUp</h2>
        <div style={{marginLeft:"400px",marginTop:"20px"}} >
         
            <Card style={{ width: "60%" , backgroundColor:"grey" }} >
                <CardContent>
                    <TextField id="name" label="Name"   style={{  width: "60%" }}
                        onChange={changeHandeler} value={userDetail.username}  /><br />
                    <TextField id="email" label="E-mail"   style={{ marginTop: "3%", width: "60%" }}
                        onChange={changeHandeler} value={userDetail.email}   /><br />
                    <TextField id="password" label="Password"   style={{ marginTop: "3%", width: "60%" }}
                        onChange={changeHandeler} value={userDetail.password} type="password"  /><br />
                    <TextField id="repassword" label="Re-password"  style={{ marginTop: "3%", width: "60%" }}
                        onChange={changeHandeler} value={userDetail.repassword} type="password"  /><br />
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" style={{ marginLeft: "120px", width: "60%" ,backgroundColor:"black"}}
                        onClick={signUpHandeler}>
                        Signup
                    </Button>
                </CardActions>
                <Typography style={{ marginTop: "4%", marginBottom: "2%" }}>
                    Having an account <span style={{color:"blue"}}   onClick={() => { navigate('/') }}>Login</span>
                </Typography>
            </Card>
        </div >
        </>
    )
}

export default Signup