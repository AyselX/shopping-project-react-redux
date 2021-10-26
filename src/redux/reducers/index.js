import { combineReducers } from "redux";
import {productReducer, selectedProductsReducer} from '../reducers/productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    selectedProduct: selectedProductsReducer,
});

export default reducers;