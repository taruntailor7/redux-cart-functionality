import { JSON_REDUX, SET_PRODUCTS } from "./actonTypes"

export const setProductsCart=(products)=>{
    return{
        type:SET_PRODUCTS,
        payload:products
    }
}

export const JsonToRedux=(cartArr)=>{
    return{
        type:JSON_REDUX,
        payload:cartArr
    }
}