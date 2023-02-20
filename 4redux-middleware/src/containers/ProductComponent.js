
import { useSelector } from "react-redux"
import {Link}  from "react-router-dom";



const ProductComponent=()=>{

    const products = useSelector((state)=>{
        console.log(state)
        return state.allProducts.products  
    })
    console.log(products)
    const renderList= products.map((product)=>{

   return  (
       
       <div className="four wide column" key={product.id} >
        <Link to={`/product/${product.id}`} >
           <div className="ui link cards" >
            <div className="card">
                <div className="image" style={{background: 'rgb(0 0 0 / 0%)'}}><img src ={product.image} alt="product.title" style={{height:'330px',objectFit:'contain'  }}/></div>
                <div className="content" style={{height:'210px'}}>
                    <div className="header">
                      {product.title}
                    </div>
                    <div className="meta price">{product.price}</div>
                    <div className="meta">{product.category}</div>
                </div>

            </div>
           </div>
           </Link>
        </div>
        
   )

    })

   
   

    return <> {renderList}  </>
    
    
    }
    export default ProductComponent