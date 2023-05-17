import React, { useState } from 'react'
import Box from '@mui/material/Box';
import {TextField, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
const SignIn = () => {


 

  const [state, setState]= useState({
    
    email: "",
    password: "",
    
  })

  

  const HandleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value

    console.log(name,value);

    setState({...state, [name]: value});
  }

  const HandleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
   <form method='POST' onSubmit={HandleSubmit}>
    <Box
    component="form"
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 20,
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      marginTop: 150,
      padding: 15,
      borderRadius: "5",
      boxShadow: "5px 5px 10px  #ccc"
    }}
    sx={{
      width: 500,
      maxWidth: '100%',
      ":hover":{
        boxShadow: "10px 10px 20px #ccc",
      }
    }}
    
    
   
  >
    <Typography variant='h4' className='typography_sign' mt={2} mb={2}>SignIn</Typography>
 
  <TextField id="outlined-basic" fullWidth label="Email" name='email' value={state.email} onChange={HandleChange} variant="outlined" />
  <TextField id="outlined-basic" fullWidth label="Password" name='password' value={state.password} onChange={HandleChange} variant="outlined" />
  <span className='mt-3'>You have not account  <Link to="/register">SignUp</Link> </span>
  <button className='btn_single_cart_length'>Login</button>
  
  </Box>
  </form>
  )
}

export default SignIn
