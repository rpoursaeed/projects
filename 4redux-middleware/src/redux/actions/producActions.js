import {Actiontypes} from '../contants/action-types'
import axios from 'axios'


export const fetchProducts =()=>{

    return async function(dispatch,getState){
        const response= await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("something is error")
        })

        dispatch({type:Actiontypes.FETCH_PRODUCTS,payload:response.data})

    }

    }


    export const fetchProduct =(id)=>{

        return async function(dispatch,getState){
            const response= await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=>{
                console.log("something is error")
            })
    
            dispatch({type:Actiontypes.SELECTED_PRODUCT,payload:response.data})
    
        }
    
        }







export const setProducts =(products)=>{

return{

type:Actiontypes.SET_PRODUCTS,
payload:products

}

}

export const selectedProducts =(product)=>{

    return{
    
    type:Actiontypes.SELECTED_PRODUCT,
    payload:product
    
    }
    
    }



    export const removeSelectedProducts =()=>{

        return{
        
        type:Actiontypes.REMOVE_SELECTED_PRODUCT,
        
        
        }
        
        }

