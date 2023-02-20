import { useEffect, useState } from "react"
import axios from "axios"
import SingleContent from "../../components/singlecontent/SingleContent"
import CustomPagination from "../../components/pagination/CustomPagination"
import Genres from "../../components/Genres"
import useGeneres from "../../hooks/useGenres"

const Series=()=>{



    const [content,setContent]=useState([])
    const [page,setPage]=useState(1)
    const [numOfPages,setNumOfPages]=useState()
    const [selectedGenres,setSelectedGenres]=useState([])
    const [genres,setGenres]=useState([])


    //custom hook
    const genereForUrl = useGeneres(selectedGenres)




    const fetchTrending=()=>{ 
        
        axios.get
        (`https://api.themoviedb.org/3/discover/tv?api_key=1bc9be7faf4d563afc21c1dfd313291b&language=en-US&sort_by=popularity.desc&page=
        ${page}&with_genres=${genereForUrl}`)
        .then((response)=>{

            console.log(response.data.total_pages)
        
            setContent(response.data.results)
            setNumOfPages(response.data.total_pages)
         }
        
         )
        
        
        }

useEffect(()=>{
    fetchTrending()
},[page,genereForUrl])




    return(
        <>
         <span >TV Series</span>
          
        <Genres
          
           selectedGenres={selectedGenres} 
           setSelectedGenres={setSelectedGenres} 
           genres={genres}
           setGenres={setGenres} 
           setPage={setPage} 
           type="movie"      
         />



         <div className="trending">
            {content && content.map(c=>{
               return <SingleContent key={c.id} id={c.id}
                poster={c.backdrop_path} title={c.title || c.name}  
                data={c.first_air_date || c.release_date }
                media_type="movie"
                
                 />
            })}
         </div>

         <CustomPagination setPage={setPage} numOfPages={numOfPages} />
         
        </>
    
    
    )
    
    }
    
    export default Series;