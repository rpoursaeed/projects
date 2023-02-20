import { Pagination } from "@mui/material";

const CustomPagination=({setPage,numOfPages})=>{

const handlePageChange=(page)=>{
setPage(page)
window.scroll(0,0)

}

console.log(numOfPages)
    return(
        <>
         <span >
         
         <Pagination count={numOfPages}  onChange={(e)=>handlePageChange(e.target.textContent)} style={{height: '150px'}}/>

         </span>
         
        </>
    
    
    )
    
    }
    
    export default CustomPagination;