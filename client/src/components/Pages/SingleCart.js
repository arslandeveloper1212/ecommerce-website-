import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleCart = () => {
  const { id } = useParams("");
  // console.log(id)

  const [intdata, SetIntdata] = useState([]);
  console.log(intdata);

  const getdata = async () => {
    const result = await fetch(`http://localhost:8202/cart/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await result.json();
    // console.log(data);
    if (result.status !== 201) {
      console.log("data not available");
    } else {
      console.log("data available...");
      SetIntdata(data);
    }

  }


  useEffect(() => {
    getdata();
  }, [id])


  return (
    <div>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-6 col-lg-5 col-12'>
            <img src={intdata.image} width="500px" height="500px" alt='title' />
          </div>
          <div className='col-md-6 col-lg-7 col-12'>
            <h3>{intdata.title && intdata.title.longTitle}</h3>
            <p>{intdata.description}</p>
            <div className='rating'>
              <Rating /> ({intdata.rating})
            </div>
            <div className='price_singlecart mt-2'>
              <h3><span >Price:</span> ${intdata.price}</h3>
            </div>
            <div className='description_singlecart'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='quantity_singlecart d-flex gap_10 mt-3 mb-3 '>
                  <button className='btn border'> + </button>
                  <h3> 0 </h3>
                  <button className='btn border'> - </button>
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
