import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'


function cartReducer(state=initialState.cart,action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var existItem = state.find(p => p.product.id === action.payload.product.id);
            if(existItem){
                const newState = state.map(
                    cartItem => {
                        if(cartItem.product.id === action.payload.product.id){
                            cartItem = Object.assign({},existItem,{quantity:existItem.quantity + 1})
                        }
                        return cartItem;
                    }   
                )
                return newState;
            }
            else{
                return [...state,{...action.payload}]
            }

        case actionTypes.REMOVE_FROM_CART:
            var editedCart = state.filter(i => i.product.id !== action.payload.id)
            return editedCart;

        default:
            return state; // if no action return state
    }
}

export default cartReducer;