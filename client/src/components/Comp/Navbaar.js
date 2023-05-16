import React from 'react'
import {Link} from "react-router-dom"
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbaar = () => {
  return (
    <div>
     <div className='container'>
     <div className='row'>
     <div className=' mt-3 navbaar_handle d-flex justify-content-between align-items-center'>
     <div className='logo'>
     <Link><h3>Ecommerce</h3></Link>
     </div>
     <div className='right_content'>
     <Badge badgeContent={4} color="primary">
     <ShoppingCartIcon/>
   </Badge>
     </div>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Navbaar
