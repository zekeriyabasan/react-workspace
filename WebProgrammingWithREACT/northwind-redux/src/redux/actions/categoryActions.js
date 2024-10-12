import * as actionTypes from './actionTypes'

// Event'll work when click to a category
export function changeCategory(category){
    return {type: actionTypes.CHANGE_CATEGORY, payload: category}

}

// return categories as redux {}
export function getCategoriesSuccess(categories){
    return {type:actionTypes.GET_CATEGORIES_SUCCESS, payload: categories}
}
// return a function for getCategoriesSuccess can prepare for redux {}
export function getCategories(){
    return function(dispatch) {
        const url = "http://localhost:3000/categories";
        
        return fetch(url).then(response=>response.json()).
        then(result=>dispatch(getCategoriesSuccess(result)))



    }
}