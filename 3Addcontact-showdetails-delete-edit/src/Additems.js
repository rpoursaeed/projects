import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
 const Additems= ({onaddHandle}) => {
 const[itemvalue,setitemvalue]=useState("")
 const navigate = useNavigate();

  const onchangeHandle=(e)=>{
  
  setitemvalue(e.target.value)

  }



const onaddHandleclick =()=>{

if(itemvalue !== ""){  
onaddHandle(itemvalue)
setitemvalue("")
navigate("/showall")
  }
}


  return (
    <div className="ui container">


     <Stack spacing={2} direction="row" sx={{margin:'10px'}}>
    <TextField id="standard-basic" label="Your Name" variant="standard"  onChange={onchangeHandle} value={itemvalue} />
   
     <Button onClick={onaddHandleclick}  variant="contained" disableElevation>
      Add
     </Button>
     </Stack>
    </div>
    
     

  
  );
};

export default Additems;