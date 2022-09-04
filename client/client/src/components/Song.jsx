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
// import Sidebar from '../Sidebar/Sidebar';




const Song = () => {
    
   const [artist,setArtist]=useState([]);
   const [artist1,setArtist1]=useState([]);
  const [info,setInfo]=useState({
    song:"",
    dor:"",
   
    Aname:"",
    rating:1
})
const changeHandler=(event)=>{
  setInfo({...info,[event.target.name]:event.target.value})
}
const onfilechnage=(event)=>{
  setFile(event.target.files[0])
  }
const [file,setFile]=useState("")



  const clickhander=()=>{
    const formdata=new FormData()
  formdata.append("song",info.song)
  formdata.append("dor",info.dor)
  formdata.append("Aname",info.Aname)
  formdata.append("rating",info.rating)
  
  formdata.append("artwork",file)
  const configobj={
    headers:{
        'Content-Type':'multipart/form-data'
    }
  }
  
            
            axios.post(`http://localhost:9090/song/add`,formdata,configobj).then(response=>{
        console.log(response.data)
        }).catch(err=>{
        console.log(err)
        })
  }
 useEffect(()=>{
  axios.get("http://localhost:9090/artist/getdata").then(res=>{
    console.log("res----->",res)
      console.log(res.data.data[0].Aname)
      for(let i=0;i<res.data.data.length;i++)
      {
        if(!artist.includes(res.data.data[i].Aname))
        {
          artist.push(res.data.data[i].Aname)
        }
        
      }

      setArtist1(artist)

        }).catch(err=>{
          console.log(err)
        })
 },[])

  return (
     <Stack direction='row' spacing={2} justifyContent='space-between'  >
        
        <Box sx={{backgroundColor:'#808080',marginTop:'20px',height:'660px'}} flex={4}>
 <div style={{ height:'50px',display:'flex',flexDirection:'column',marginTop:'10px',justifyContent:'space-between'}}>
    <h2 style={{color:'black'}}>Add a New Song</h2>  

        <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
  <label>Song Name</label> <TextField id="outlined-basic" name="song" label="" variant="outlined"  onChange={changeHandler}/><br/>
   <br/>
   <label>Date of Releaase</label> <input type='date' name="dor" onChange={changeHandler}/><br/>
   <label>Artwork</label><input type='file'  onChange={onfilechnage}/><br/>

<label>Artist</label> <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Artist</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          label="artist"
          name="Aname"
          onChange={changeHandler}
        >
            {
        artist1.map(ele=>{

        return <MenuItem value={ele}>{ele}</MenuItem>
        })
      }
         
        </Select>
      </FormControl><br/>
        <Button style={{width:'10px' ,backgroundColor:"yellow" ,color:"black"}}   >Cancel </Button><Button style={{width:'10px',backgroundColor:"yellow",color:"black"}} variant="contained" onClick={clickhander} >Done</Button>
    
  </Box></div>
        </Box>
     </Stack>
   
  )
}

export default Song