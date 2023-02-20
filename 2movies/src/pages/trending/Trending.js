import { useEffect, useState } from "react"
import axios from "axios"
import SingleContent from "../../components/singlecontent/SingleContent"
import CustomPagination from "../../components/pagination/CustomPagination"
import './trending.css'

const Trending=()=>{

    const [content,setContent]=useState([])
    const [page,setPage]=useState(1)
    const [numOfPages,setNumOfPages]=useState()

    const fetchTrending=()=>{ 
        
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=1bc9be7faf4d563afc21c1dfd313291b&page=${page}`).then((response)=>{
            console.log(response)
            setContent(response.data.results)
            setNumOfPages(response.data.total_pages)
         }
        
         )
        
        
        }

useEffect(()=>{
    fetchTrending()
},[page])



    return(
        <>
         <span >Trending</span>
         <div className="trending">
            {content && content.map(c=>{
               return <SingleContent key={c.id} id={c.id}
                poster={c.backdrop_path} title={c.title || c.name}  
                data={c.first_air_date || c.release_date }
                media_type={c.media_type}
                
                 />
            })}
         </div>

         <CustomPagination setPage={setPage}  numOfPages={numOfPages} />
         
        </>
    
    
    )
    
    }
    
    export default Trending;