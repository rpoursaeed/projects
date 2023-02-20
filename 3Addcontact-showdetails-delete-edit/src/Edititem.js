import { useState } from "react";
import { useLocation,useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const Edititem= ({editContactHandler}) => {

const { state } = useLocation()
const navigate = useNavigate();
const[username,setusername]=useState(state.state.username)
const id= state.state.id



const onchangeHandle=(e)=>{

    setusername(e.target.value)

}

const oneditHandleclick=()=>{

    editContactHandler({id,username})
    navigate("/showall")

}


const onBackContact=()=>{

    navigate("/showall")


}



return(
<div>
 



    <Stack spacing={3} direction="row" sx={{margin:'10px'}}>
    <TextField id="standard-basic" 
    variant="standard"  onChange={onchangeHandle} value={username} />
   
     <Button onClick={oneditHandleclick}  variant="contained" disableElevation>
      Edit
     </Button>
     <Button variant="contained" size="medium" onClick={(e)=>onBackContact(e)}  >
          Back
        </Button>
     </Stack>

</div>
)


}


export default Edititem