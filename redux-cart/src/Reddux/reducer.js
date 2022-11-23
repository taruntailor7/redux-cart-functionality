import { JSON_REDUX, SET_PRODUCTS } from "./actonTypes"

const InitState={
    cart:[],
    cartItems:0
}


export const reducer=( state=InitState,{type,payload} )=>{
    switch(type){
        case SET_PRODUCTS:
            return {
                cart:[...state.cart,payload],
                cartItems:state.cartItems+1
            }
         case JSON_REDUX:
            return{
                cart:payload,
                cartItems:payload.length
            }   
        default:
        return state
    }
    
}