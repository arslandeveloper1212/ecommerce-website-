import {getProductreducer} from './Productreducer';
import {combineReducers} from 'redux';
import  cartreducer  from './cartreducer';
const rootreducers = combineReducers({
    getProductdata:getProductreducer,
    cartdata:cartreducer,
})

export default rootreducers;