
import "./SingleContent.css"


const SingleContent=({title,poster})=>{

    return(
        <div className="media">
        
         <img className="poster" src={`https://image.tmdb.org/t/p/w300/${poster}`}  alt="" />
         <div className="title">{title}</div>
         
        </div>
    
    
    )
    
    }
    
    export default SingleContent;