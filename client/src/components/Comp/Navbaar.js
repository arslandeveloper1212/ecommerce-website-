import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import SignIn from '../Pages/SignPages/SignIn';
const Navbaar = () => {
  const navigate = useNavigate();

  const goSignUpPage = () => {
    navigate("/register")
  }

  const goSignInPage = () => {
    navigate("/login")
  }

 


  return (
    <div className='bg_navbaar bg-dark pb-2'>
      <div className='container'>
        <div className='row'>
          <div className=' mt-3 navbaar_handle d-flex justify-content-between align-items-center'>
            <div className='logo'>
              <Link to="/" className='text-decoration-none btn_color_yellow'><h2>Ecommerce</h2></Link>
            </div>
            <div className='right_content d-flex align-items-center gap'>
              <Badge badgeContent={4} color="primary" style={{color: "white"}}>
                <ShoppingCartIcon />
              </Badge>
            
                <Stack direction="row" spacing={1} >
                <Button className='btn_color_yellow' onClick={goSignUpPage}>SignUp</Button>
                <Button className='btn_color_yellow' onClick={goSignInPage}>Login</Button>
                </Stack>
            

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbaar
