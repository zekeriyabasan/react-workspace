import * as actionTypes from "./actionTypes"

// = () its mean a function ({}) take object parameter
export const increaseCounter = ()=> ({
    type: actionTypes.INCREASE_COUNTER,
    payload: 1

})
export const decreaseCounter = ()=> ({
    type: actionTypes.DECREASE_COUNTER,
    payload: 1

})
export const increaseByTwoCounter = ()=> ({
    type: actionTypes.INCREASE_BY_TWO_COUNTER,
    payload: 2

})