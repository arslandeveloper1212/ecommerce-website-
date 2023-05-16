
import React from 'react'

import Divider from '@mui/material/Divider';


const ShoppingCart = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row mt-5 px-2'>
          <div className='col-lg-7 col-md-8 col-12 shadow'>
            <div className='shoppingcart_handle d-flex my-5'>
              <img src="https://m.media-amazon.com/images/I/6104RMv3lML._AC_UL320_.jpg" width="200px" height="200px" alt='title' />
              <div className='shoppingcart_controls d-flex flex-column'>
                <h4>$ 300</h4>

                <h3>HP 67 Black/Tri-color Ink Cartridges (2 Count - Pack of 1) | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Serie</h3>
                <div className='quantity_shoppingcart d-flex gap_10 mt-3 mb-3'>
                  <button className='btn border'> + </button>
                  <h3> 0 </h3>
                  <button className='btn border'> - </button>
                </div>
                <div className='btn_shoppingcart mb-3'>
                  <button className='btn btn-danger'>Remove</button>
                </div>

              </div>
            </div>


          </div>

          <div className='col-lg-5 col-md-4 col-12'>
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
