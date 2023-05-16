import { Rating } from '@mui/material'
import React from 'react'

const SingleCart = () => {
  return (
    <div>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-6 col-lg-5 col-12'>
            <img src="https://m.media-amazon.com/images/I/6104RMv3lML._AC_UL320_.jpg" width="500px" height="500px" alt='title' />
          </div>
          <div className='col-md-6 col-lg-7 col-12'>
            <h3>HP 67 Black/Tri-color Ink Cartridges (2 Count - Pack of 1) | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Serie</h3>
            <p>Original HP Ink is engineered to work with HP printers <br></br> to provide consistent quality, reliability and value</p>
            <div className='rating'>
            <Rating/>
            </div> 
            <div className='price_singlecart mt-2'>
            <h3><span >Price:</span> $300</h3>
            </div>
            <div className='description_singlecart'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className=''>
            <button className='btn_single_cart'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCart
