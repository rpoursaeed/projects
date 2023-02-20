import {Actiontypes} from '../contants/action-types'

const initialState={

products:[]

}

export const productReducer=(state=initialState,{type,payload})=>{

switch(type){
   case Actiontypes.FETCH_PRODUCTS:
      return {...state,products:payload}
   default :
    return state   

}


}


export const selectedProductReducer=(state={},{type,payload})=>{

   switch(type){
    case Actiontypes.SELECTED_PRODUCT:
       return {...state,...payload}
   case Actiontypes.REMOVE_SELECTED_PRODUCT:
         return {}
    default :
       return state   
   
   }
   
   
   }