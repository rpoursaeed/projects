import { useState,useEffect } from "react";
import Additems from "./Additems";
import Edititem from "./Edititem"
import axios from "axios";
import ShowUsers from "./ShowUsers";
import uuid from 'react-uuid';
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";
import Details from "./Details";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

 const App = () => {
const [values,setValues]=useState([])

const [resultSerach,setResultSerach]=useState([])

const [searchterm,setSearchterm]=useState("")

const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};


  const fetchProducts=async()=>{
    const response= await axios.get("https://jsonplaceholder.typicode.com/users").catch((err)=>{
           console.log("something is error")
    })
       console.log(response.data)
     setValues(response.data)

}

useEffect(()=>{
 
fetchProducts()

},[])


const onaddHandle =(itemvalue)=>{

  setValues([...values,{id:uuid(),username:itemvalue}])

  }




const onsearchHandle=(query)=>{
  setSearchterm(query)

if(values !== ""){

  const queries=values.filter((item) =>typeof item.username === 'string' ? item.username.includes(query) : false
  

  
  )
  
  setResultSerach(queries)

}

}

//------------Delelet-----------------

const deleteContactHandler=(id)=>{

  const newcontacts= values.filter((value)=>{
    return value.id !== id

    })

    setValues(newcontacts)

}

//-------------Edit----------------------

const editContactHandler=(updatevalue)=>{

  setValues(values.map((value)=>{
  
    
   
   
     return value.id === updatevalue.id ? {...updatevalue} : value
   
   }))


}

//----------------------------------



  return (
  
    <div className="ui container">
     <Router >
     

    


     <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Divider light />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to={"/"}>Home</Link></MenuItem>
        <MenuItem onClick={handleClose} ><Link to={"/add"}>Add Contact</Link></MenuItem>
        
      </Menu>
    </div>








  
       <Routes>


          <Route path="/"  />
          <Route path="/add" element={<Additems  onaddHandle={onaddHandle}  />} />
          <Route path="/edit/:id" element={<Edititem  editContactHandler={editContactHandler}/>} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/showall" element={<ShowUsers  users={searchterm.length < 1 ? values : resultSerach   } 
          deleteContactHandler={deleteContactHandler}
          onsearchHandle={onsearchHandle}     />} />
         

       </Routes>
     


       </Router>

    </div>
 

  
  );
};

export default App;