import React, { useEffect, useState } from 'react'
import { Link, useNavigate, NavLink, useParams } from "react-router-dom"
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import "./Navbaar.css"
import { DLT } from '../Redux/actions/cartaction';

const Navbaar = () => {

  const dispatch = useDispatch();

  const [price, setPrice] = useState(0)
  console.log(price)

  const { carts} = useSelector((state) => state.cartdata)


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const navigate = useNavigate();

  const goSignUpPage = () => {
    navigate("/register")
  }

  const goSignInPage = () => {
    navigate("/login")
  }


  const removeCart = (id) => {
    dispatch(DLT(id))
  }

  const total = ()=>{
    let price = 0;
    carts.map((e,i)=>{
      price = e.price + price
    });
    setPrice(price);
  }

  useEffect(()=>{
    total();
  },[total])

  return (
    <div className='bg_navbaar bg-dark pb-2'>
      <div className='container'>
        <div className='row'>
          <div className=' mt-3 navbaar_handle d-flex justify-content-between align-items-center'>
            <div className='logo'>
              <Link to="/" className='text-decoration-none btn_color_yellow'><h2>Ecommerce</h2></Link>
            </div>
            <div className='right_content d-flex align-items-center gap'>
              <Badge badgeContent={carts.length} color="primary" style={{ color: "white", fontSize: "25px" }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

              >
                <ShoppingCartIcon />
              </Badge>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                // style= {{width: "55rem"}}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >

                {carts.length ?

                  <div style={{ padding: "10px", width: "24rem" }}>
                    <div className='badge_inside_card_showing text-center mt-3'>
                      <h5>Shopping Cart Page</h5>
                      <CloseIcon style={{ position: "absolute", right: "20", top: "20" }} onClick={handleClose} />
                    </div>
                    <div className='badge_content_controls mt-5 mb-5 px-2'>
                      {
                        carts.map((e, index) => {
                          return (
                            <div key={index} className='d-flex align-items-center'>
                              <Link to={`/cart/${e.id}`}>
                                <img src={e.image} alt='title' className='gap' style={{ width: "100px", paddingRight: "13px" }} onClick={handleClose} />
                              </Link>
                              <div className='d-flex flex-column'>
                                <h5 style={{ fontSize: "15px", marginTop: "20px" }}>{e.title.shortTitle}</h5>
                                <h5 style={{ fontSize: "20px" }} >{e.price}</h5>
                                <div className='btn_quantity d-flex'>
                                  <button className='btn '> + </button>
                                  <h5 className='mt-1'>{e.quantity}</h5>
                                  <button className='btn'> - </button>
                                  <button className='btn btn-danger large_trash_deleteicon' onClick={() => removeCart(e.id)} >Remove</button>
                                </div>
                                <DeleteIcon className='mb-3 small_trash_deleteicon' style={{ color: "red" }} onClick={() => removeCart(e.id)}  />



                              </div>

                             
                            </div>

                          )
                        })
                      }
                      <div className='total d-flex justify-content-evenly mt-5 '>
                      <h4>Total:</h4>
                      <h4>$ 300</h4>
                      </div>
                     
                    </div>


                  </div>


                  :

                  <div>
                    <div className='cart_details_click' style={{ position: "relative", padding: "20px" }}>
                      <CloseIcon style={{ position: "absolute", right: "10", top: "6" }} onClick={handleClose} />
                      <p style={{ fontSize: "22px", textAlign: "center" }} >Your cart is empty</p>
                      <img src='https://bakestudio.in/assets/images/cart/empty-cart.gif' width="300px" alt="image" />
                    </div>
                  </div>}





              </Menu>


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
