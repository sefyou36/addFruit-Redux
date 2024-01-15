import { ADD_FRUIT, CLEAR_FRUIT, DECREMENT_FRUIT, DELETE_FRUIT, INCREMENT_QUANTITY, UPDATE_QUANTITY } from "./actionType";


export const addFruit = (id,fruit,quantity) => {
        return {
                type: ADD_FRUIT,
                payload : {id:id,fruit:fruit,quantity:quantity}
        }
}

export const deleteFruit = (id) => {
        return {
                type: DELETE_FRUIT,
                payload: id
        }
}

export const incrementFruit = (id) => {
        return {
                type: INCREMENT_QUANTITY,
                payload: id
        }
}
export const decrementFruit = (id) => {
        return {
                type: DECREMENT_FRUIT,
                payload: id
        }
}
export const clearFruit = (id) => {
                return {
                        type:CLEAR_FRUIT,
                        payload: id
                }
}
export const updateFruit = (id,quantity) => {
                return {
                        type: UPDATE_QUANTITY,
                        payload: {id:id,quantity:quantity}
                }
}