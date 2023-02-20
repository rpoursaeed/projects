import { useEffect, useState } from "react"
import axios from "axios"
import { Chip } from "@mui/material"



const Genres=({  
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage
 })=>{


    const fetchTrending=()=>{ 
        
        axios.get
        (`https://api.themoviedb.org/3/genre/${type}/list?api_key=1bc9be7faf4d563afc21c1dfd313291b&language=en-US`)
        .then((response)=>{
            setGenres(response.data.genres)
         
         }
        
         )
         
        
        }

useEffect(()=>{
    fetchTrending()

    return()=>{
        setGenres([])
    }
},[])



const handleAdd=(genre)=>{
    setSelectedGenres([...selectedGenres,genre])  
    setGenres(genres.filter((g)=> g.id !== genre.id)) 
    setPage(1)
}

const handleRemove=(genre)=>{
   
    setGenres([...genres,genre]) 
    setSelectedGenres(selectedGenres.filter((g)=> g.id !== genre.id)) 
    setPage(1)

}



return(
  <div>
  {selectedGenres && selectedGenres.map((genre)=>{

return <Chip color="primary"  style={{marginTop: '20px'}}  label={genre.name} clickable onClick={()=>handleRemove(genre)} /> 
  
})}  
  {genres && genres.map((genre)=>{

  return <Chip  style={{marginTop: '20px'}} label={genre.name} clickable onClick={()=>handleAdd(genre)} /> 
    
  })}
  
  
  </div>
    
  
)

}

export default Genres;