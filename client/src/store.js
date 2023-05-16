import {legacy_createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootreducers from '../src/components/Redux/reducers/main';


const middleware = [thunk];

const store = legacy_createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;