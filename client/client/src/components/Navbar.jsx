import React from 'react'
import { Menu } from 'antd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const token=localStorage.getItem('token')
  console.log(token)
  const navigate=useNavigate()
  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
                  const handleClick=()=>{
                       localStorage.removeItem('token')
                  }

  if(!token){
       
    return (
     
      <nav class="navbar navbar-expand-lg bg-dark" backgroundColor="black">
    <div class="container-fluid" style={{color:'white'}}>
      <a class="navbar-brand" href="#" style={{color:'white'}}>My Music</a>
      <button  style={{marginTop:'50px'}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
         
      </div>
    <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                
              />
        </Search>
      </div>
  </nav>
    )

  }
    else{

      return (
     
        <nav className="navbar navbar-expand-lg bg-dark" backgroundColor="black">
      <div className="container-fluid" style={{color:'white'}}>
        <a className="navbar-brand" href="#" style={{color:'white'}}>My Music</a>
        <button  style={{marginTop:'50px'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" style={{color:'white'}} aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:'white'}} href="/artist">Artist</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:'white'}} href="/" onClick={handleClick}>Logout</a>
            </li>
           
          </ul>
        </div>
      <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  
                />
          </Search>
        </div>
    </nav>
      )
  
      }   
  

}

  
export default Navbar