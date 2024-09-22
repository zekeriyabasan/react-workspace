import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

//returned current state
export function changeCategoryReducer(state=initialState.currentCategory,action){
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload;  
        default:
            state; // if no action return state
    }
}