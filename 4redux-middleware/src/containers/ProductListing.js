import ProductComponent from "./ProductComponent"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {fetchProducts} from "../redux/actions/producActions"



const ProductListing=()=>{


    const dispatch = useDispatch()
    
    useEffect(()=>{
     
    dispatch(fetchProducts())

   },[])




    return <div className="ui grid container" style={{marginTop:'30px'}}>
        <ProductComponent />
    
    </div>
    
    
    
    }
    export default ProductListing