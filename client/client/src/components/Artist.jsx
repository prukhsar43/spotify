import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Stack } from '@mui/material';

const Artist = () => {
 const [info,setInfo]=useState({
    Aname:"",
    dob:"",
    bio:""

})
  const handleChange = (event) => {
    setInfo({...info,[event.target.name]:event.target.value})
   
  };
  const clickhander=()=>{
    console.log(info)
    axios.post("http://localhost:9090/artist/add",info).then(res=>{
      console.log("data added")
      alert("Artist saved")
    }).catch(err=>{
      console.log(err)
    })
  }


  return (
     <Stack direction='row' spacing={2} justifyContent='space-between'>
        
        <Box sx={{backgroundColor:'#808080',marginTop:'20px',height:'660px'}} flex={4}>
 <div style={{ height:'50px',display:'flex',flexDirection:'column',marginTop:'10px',justifyContent:'space-between'}}>
    <h2 style={{color:'black'}}>Add Artist</h2>  

        <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
  <label>Artist Name</label> <TextField id="outlined-basic" name="Aname" label="" variant="outlined" onChange={handleChange} /><br/>
   <br/>
   <label>Date of Birth</label> <input type='date' name="dob" onChange={handleChange}/><br/>
   <label>Bio</label><TextField
          id="outlined-multiline-flexible"
          
          name="bio"
          multiline
          maxRows={4}
        //   value={value}
           onChange={handleChange}
        /> <br/>
        <Button style={{width:'10px',backgroundColor:"yellow",color:"black"}} variant="contained" >Cancel </Button><Button style={{width:'10px',backgroundColor:"yellow",color:"black"}} variant="contained" onClick={clickhander}>Done</Button>
    
  </Box></div>
        </Box>
     </Stack>
   
  )
}

export default Artist