

import { useEffect } from "react"
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import {fetchProduct,removeSelectedProducts} from '../redux/actions/producActions'

const ProductDetail=()=>{

    const{productId}=useParams()
    const dispatch = useDispatch()
    const product= useSelector(state=>{
       
        console.log(state)
        return   state.product
    } )



   useEffect(()=>{
     if(productId && productId !== ""){
        dispatch(fetchProduct(productId))
     }
     
   return()=>{
    dispatch(removeSelectedProducts((productId)))
   }

   },[productId])






    return (
    <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
            <div >...loading  </div>
        ) :(<div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid ">
            
             <div className="middle aligned row">
                <div className="column lp">
                    <img className="ui fluid image" src={product.image} alt=""  />
                </div>
                <div className="column rp">
                    <h1>{product.title}</h1>
                    <h2><a className="ui teal tag label">${product.price}</a></h2>
                    <h3 className="ui brown block header">{product.category}</h3>
                    <p>{product.description}</p>
                    <div className="ui vertical animated button" tabIndex="0" >
                         <div className="hidden content">
                      <i className="shop icon"></i>
                          </div>
                           <div className="visible content">add to cart</div>
                     </div>
                    </div>

            </div>
             </div>

        </div>
        )      
        }
    </div>
    )
    
 }
    
    export default ProductDetail