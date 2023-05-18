const INIT_STATE ={
    carts: []
}

 const cartreducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            return{
                ...state,
                    carts:[...state.carts,action.payload]
            }
        case "RMV_CART":

        const data = state.carts.filter((elem)=>elem.id !== action.payload)
        return{
            ...state,
            carts: data
        }

            default:
                return state
    }
}

export default cartreducer