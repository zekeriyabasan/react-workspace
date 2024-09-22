import * as actionTypes from './actionTypes'

// Event'll work when click to a category
export function changeCategory(category){
    return {type: actionTypes.CHANGE_CATEGORY, payload: category}

}