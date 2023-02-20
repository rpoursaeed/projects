import Searchitems from "./Searchitems";
import { Link, useNavigate } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const ShowUsers= ({users,onsearchHandle,deleteContactHandler}) => {
  const navigate = useNavigate();
 



    const onBackContact =()=>{
     navigate("/add") 

    }


  





    
      return (
    
        <div className="ui container">
    
         <Searchitems  onsearchHandle={onsearchHandle} /> 
         <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    > 
         
   {users.map(user=>{
     
     return <div>
      
      <ListItem>
      <ListItemText primary={user.username}  />
      <div >
      <i className="trash alternate outline icon" onClick={()=>deleteContactHandler(user.id)}  ></i>
       <Link to={`/edit/${user.id}` }  state={{ state: user }} ><i className="edit icon"   ></i></Link>
       <Link to={`/detail/${user.id}` }  state={{ state: user }} >Details</Link>

      </div>
      
        
      </ListItem>
      <Divider variant="inset" component="li" style={{marginLeft: '0px'}} />
  
     
     </div>
 })}
    </List>


        

        <Button variant="contained" size="medium" onClick={(e)=>onBackContact(e)} >
          Back
        </Button>
    
        </div>
        
         
    
      
      );
    };
    
    export default ShowUsers;