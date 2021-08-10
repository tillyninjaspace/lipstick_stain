import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const initialState = {};


const store = createStore(
    rootReducer, 
    initialState, 
    composedEnhancer
);

export default store;