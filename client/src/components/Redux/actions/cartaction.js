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

//remove items -sign
export const REMOVE = (iteam)=>{
    return{
        type: "RMV_ONE",
        payload: iteam,
    }
}
