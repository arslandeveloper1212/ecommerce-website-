
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ADD, DLT, REMOVESIGN } from '../Redux/actions/cartaction';

const ShoppingCart = () => {


  const getdata = useSelector((state) => state.cartdata.carts)
  console.log(getdata);

  const dispatch = useDispatch();


  const addcart = (e) => {
    dispatch(ADD(e))
  }

const deletebutton =(e)=>{
  dispatch(DLT(e))
}

  const decrement = (item) => {

    dispatch(REMOVESIGN(item))
  }

  return (
    <div>
      <div className='container-fluid'>
        <div className='row mt-5 d-flex px-2'>
          {
            getdata && getdata.map((item, i) => {
              return (
                <div>
               
                  <div className=' col-lg-6 shadow'>
                    <div className='shoppingcart_handle d-flex my-5'>
                      <img src="https://m.media-amazon.com/images/I/6104RMv3lML._AC_UL320_.jpg" width="200px" height="200px" alt='title' />
                      <div className='shoppingcart_controls d-flex flex-column'>
                        <h4>${item.price}</h4>

                        <h3>${item.title && item.title.shortTitle}</h3>
                        <div className='quantity_shoppingcart d-flex gap_10 mt-3 mb-3'>
                          <button className='btn border' onClick={() => addcart(item)}> + </button>
                          <h3>{item.quantity} </h3>
                          
                          <button className='btn border' onClick={item.quantity <= 1 ? deletebutton (item) : ()=>decrement(item) }> - </button>
                        </div>
                        <div className='btn_shoppingcart mb-3 d-flex justify-content-between'>
                          <button className='btn btn-danger' onClick={() => deletebutton (item.id) }>Remove</button>
                          <h4>Total: ${item.price * item.quantity}</h4>
                        </div>

                        
                      </div>
                    </div>


              
                  
                  
                  </div> 
                  
                  
               
                
                  

                  





                </div>
              )
            })
          }

          <div className=' col-lg-6'>
          <div className='summary_total_controls_shoppingcart shadow mt-sm-5 px-3'>
            <h4>Your Order</h4>
            <br></br>
            <div className='shoppingcart_detail d-flex justify-content-between'>
              <h5> <strong>Sub Total:</strong> </h5>
              <h5><strong>$ 300</strong>  </h5>
            </div>
            <div className='shoppingcart_detail d-flex justify-content-between mt-2 text-secondary'>
              <p>Estimated Shipping</p>
              <p>FREE</p>

            </div>
            <div className='shoppingcart_detail d-flex justify-content-between  text-secondary'>
              <p>Sales Tax<span> (determind in later step) </span></p>
              <p>---</p>
            </div>

            <div className='shoppingcart_detail d-flex justify-content-between mt-4'>
              <h3> <strong>Total:</strong> </h3>
              <h3><strong>$ 300</strong>  </h3>
            </div>

          </div>
        </div>
        

        </div>
      </div>

    </div>
  )
}

export default ShoppingCart
