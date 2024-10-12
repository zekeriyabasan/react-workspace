import * as actionTypes from './actionTypes'

// return products as redux {}
export function getProductsSuccess(products){
    return {type:actionTypes.GET_PRODUCTS_SUCCESS, payload: products}
}
// return a function for getProductsSuccess can prepare for redux {}
export function getProducts(){
    return function(dispatch) {
        const url = "http://localhost:3000/products";
        
        return fetch(url).then(response=>response.json()).
        then(result=>dispatch(getProductsSuccess(result)))



    }
}