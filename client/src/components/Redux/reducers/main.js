import {getProductreducer} from './Productreducer';
import {combineReducers} from 'redux';

const rootreducers = combineReducers({
    getProductdata:getProductreducer,
})

export default rootreducers;