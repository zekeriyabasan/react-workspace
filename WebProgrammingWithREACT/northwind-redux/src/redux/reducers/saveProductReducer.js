import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

//returned current state
function saveProductReducer(state = initialState.savedProduct, action) {
    switch (action.type) {
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload;
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload;
        default:
            return state; // if no action return state
    }
}

export default saveProductReducer;