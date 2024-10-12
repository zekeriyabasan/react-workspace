import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

//returned current state
function categoryListReducer(state=initialState.categories,action){
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload;  
        default:
            return state; // if no action return state
    }
}

export default categoryListReducer;