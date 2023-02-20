import { Tab, Tabs, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/singlecontent/SingleContent"
import CustomPagination from "../../components/pagination/CustomPagination"
const Search=()=>{

const [type,setType]=useState(0)
const [page,setPage]=useState(1)
const [searchText,setSearchText]=useState("")
const [content,setContent]=useState()

const [numOfPages,setNumOfPages]=useState("")


const fetchSearch=async()=>{

const {data}=await axios.get(`
https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}
?api_key=1bc9be7faf4d563afc21c1dfd313291b&language=en-US&sort_by=popularity.desc&query=${searchText}&page=
${page}

`)

setContent(data.results)
setNumOfPages(data.total_pages)


}


useEffect(()=>{
    window.scroll(0,0)
    fetchSearch()
},[type,page])





    return(
        <>
        <div style={{display:'flex'}}>
         <TextField 
         label="search" variant="filled" 
         onChange={(e)=>setSearchText(e.target.value)} />

         <button  onClick={fetchSearch}><SearchIcon/></button>

         </div>

       <Tabs value={type} indicatorColor="primary" onChange={(event,newValue)=>{
        setType(newValue)
        setPage (1)

       }}>
        <Tab label="Search Tv"></Tab>
        <Tab label="Search Movies"></Tab>

       </Tabs>




         <div className="trending">
            {content && content.map(c=>{
               return <SingleContent key={c.id} id={c.id}
                poster={c.backdrop_path} title={c.title || c.name}  
                data={c.first_air_date || c.release_date }
                media_type={type ? "tv" : "movie"}
                
                 />
            })}

             {searchText && !content && (type ? <h2>no series found </h2>: <h2>no Movies found</h2>)}


         </div>

         <CustomPagination setPage={setPage} numOfPages={numOfPages} />
     






       </>

       
    
    
    )
    
    }
    
    export default Search;