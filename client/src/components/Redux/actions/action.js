export const getProducts = () => async(dispatch) => {
    try {
        const data = await fetch("http://localhost:8202/getproducts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
        const res = await data.json();
        console.log(res);
        dispatch({type:"SUCCESS_GET_PRODUCTS", payload:res})
    } catch (err) {
            dispatch({type:"FAILED_GET_PRODUCTS",payload: err.response})
    }   
}

