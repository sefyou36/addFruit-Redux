import { ADD_FRUIT, CLEAR_FRUIT, DECREMENT_FRUIT, DELETE_FRUIT, INCREMENT_QUANTITY, UPDATE_QUANTITY } from "./actionType";

const  initialeState = {card:[{id:1,fruit:'🍒',quantity:2}],user : {}}


export const fruitReducer = (state=initialeState,action) => {
        switch (action.type) {
            case ADD_FRUIT:
                return {...state,card:[...state.card,action.payload]}
                case DELETE_FRUIT:
                    return {...state,card:[...state.card.filter(item => item.id !== action.payload)]}
                    case INCREMENT_QUANTITY:
                        return {...state,card:state.card.map((item)=>item.id == action.payload ?{...item,quantity:item.quantity + 1}:item)}
                        case DECREMENT_FRUIT:
                            return {...state,card:state.card.map((item)=>item.id == action.payload ?{...item,quantity:item.quantity - 1}:item)}
                            case CLEAR_FRUIT:
                                return {...state,card:[]}
                                case UPDATE_QUANTITY:
                                    return {...state,card:state.card.map((item)=>item.id === action.payload.id ?{...item,quantity:action.payload.quantity}:item)}
            default:
               return state;  
        }
}

   
