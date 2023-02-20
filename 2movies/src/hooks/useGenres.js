
const useGeneres=(selectedGenres)=>{

    if(selectedGenres.length < 1) return "";

    const GenereIds= selectedGenres.map((g)=>g.id)
   
    //[28,12,16]
    const a= GenereIds.reduce((acc,curr)=> acc + ',' + curr)
 
    //28,12,16
     return a


}

export default useGeneres