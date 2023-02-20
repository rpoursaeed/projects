import { useState } from "react";
import TextField from '@mui/material/TextField';


const Searchitems=({onsearchHandle}) => {

  const[itemquery,setitemquery]=useState("")


  const onsearchsubmit=(e)=>{
  
    setitemquery(e.target.value)
    onsearchHandle(e.target.value)
  
    }
  




  return (

    <div className="ui container">

    
    <TextField id="standard-basic" label="Search" variant="standard"  onChange={onsearchsubmit} value={itemquery} />


    </div>
    
     

  
  );
};

export default Searchitems;