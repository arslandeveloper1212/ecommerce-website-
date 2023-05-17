import React, { useEffect } from 'react'
import { getProducts } from '../Redux/actions/action'
import { ADD } from '../Redux/actions/cartaction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./Home.css"


const Home = () => {
    const dispatch = useDispatch();
    const { productdata } = useSelector((state) => state.getProductdata.products)
   
    // console.log(productdata);
   
   
   
    useEffect(() => {
        dispatch(getProducts());
       
    }, [dispatch])


   

const addcart = (e)=>{
    dispatch(ADD(e));
    console.log(e);
}
    




    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card_handle d-flex justify-content-center align-items-center flex-wrap gap'>
                            {
                                productdata && productdata.map((item, i) => {
                                    return (

                                        <div key={i}>
                                           
                                                <div className="card" style={{ width: "22rem" }}>

                                                    <div className="card-body">

                                                        <h5 className="card-title mb-4">{item.title.shortTitle}</h5>
                                                        <Link to={`/cart/${item.id}`}>
                                                        <h4><img src={item.image} alt='title'
                                                            style={{ height: "300px", objectFit: "contain", backgroundPosition: "center", margin: "auto", display: "flex", justifyContent:"center" }}


                                                        /></h4></Link>
                                                        <p className="card-text mt-4">{item.description}</p>
                                                        <h4 className='price text-secondary mb-3'>${item.price} </h4>
                                                        <button className='col-12 btn_cart' onClick={()=>addcart(item)}>Add to Cart</button>

                                                    </div>

                                                </div>
                                                
                                        </div>
                                          
                        )
                                            
                                        })         
                        }




                    </div>
                </div>
            </div>

        </div>
            </div >
            )
}

export default Home
