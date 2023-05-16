import React, { useEffect } from 'react'
import { getProducts } from '../Redux/actions/action'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
    const dispatch = useDispatch();
    const { productdata } = useSelector((state) => state.getProductdata.products)
    console.log(productdata);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])




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
                                                    <h4><img src={item.image} alt='title'
                                                        style={{ height: "200px", objectFit: "contain", backgroundPosition: "center", margin: "auto", display: "flex" }}
                                                      

                                                    /></h4>
                                                    <p className="card-text mt-4">{item.description}</p>
                                                    <h4 className='price text-center text-secondary'>$ {item.price} </h4>
                                                    <button className='col-12 btn_cart'>Add to Cart</button>

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
