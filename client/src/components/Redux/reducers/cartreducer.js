const INIT_STATE = {
    carts: []
}

const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.carts[itemIndex].quantity += 1
            } else {
                const temp = { ...action.payload, quantity: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }


        case "RMV_CART":

            const data = state.carts.filter((elem) => elem.id !== action.payload)
            return {
                ...state,
                carts: data
            }

        case "RMV_ONE":
            const itemIndex_desc = state.carts.findIndex((iteam) => iteam.id === action.payload.id)
            if (state.carts[itemIndex_desc].quantity >= 1) {
                const deleteitem = state.carts[itemIndex_desc].quantity -= 1
                console.log([...state.carts, deleteitem]);
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[itemIndex_desc].quantity === 1) {
                const data = state.carts.filter((elem) => elem.id !== action.payload)
                return {
                    ...state,
                    carts: data
                }
            }


        default:
            return state;
    }
}

export default cartreducer