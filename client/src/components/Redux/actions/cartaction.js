//ADD TO CART 
export const ADD = (item)=>{
    return{
        type: "ADD_CART",
        payload: item
    }
}

//Remove Cart
export const DLT = (id)=>{
    return{
        type: "RMV_CART",
        payload: id
    }
}