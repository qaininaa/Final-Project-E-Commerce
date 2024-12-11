import {createStore, combineReducers, applyMiddleware} from "redux"
import { thunk } from "redux-thunk";

import productsReducer from "./reducers/products-reducer";
import cartReducer from "./reducers/carts-reducer";

const rootReducer = combineReducers({
    products: productsReducer,
    carts: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;