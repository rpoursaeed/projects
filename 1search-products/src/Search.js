import React,{useState,useRef,useCallback} from "react";
import './Search.css'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Search({searchvalue,categories}){
   
  const catRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();
  

  const [userInfo1,setUserInfo1]=useState([])
  const [userInfo2,setUserInfo2]=useState([])
  const [userInfo3,setUserInfo3]=useState([])


  const [state, setState] = useState({
    products: searchvalue,
    filters: new Set(),
  })


// const onclearvalue0=()=>{
//   setQuery1("")
//     }

// const onclearvalue1=()=>{
//    setMin("")
//   }

// const onclearvalue2=()=>{
//    setMax()
// }







const onHandelFilter =(e)=>{

  e.preventDefault();
  const cityvalue =catRef.current.value
  const minvalue =minRef.current.value
  const maxvalue =maxRef.current.value
  setUserInfo1(cityvalue)
  setUserInfo2(minvalue)
  setUserInfo3(maxvalue)
  showresult()



}

const showresult=()=>{

  return state.products
 .filter((item) => {

              if( !item.title.toLowerCase().includes(userInfo1)) {
              
              return false
              }

              if(item.price < userInfo2){
                return false
              }

              if(item.price > parseInt(userInfo3)  ){
                //if up condition is true the valuse that are in these condition does not return
                return false

              }

              return true
              //or return true ---> means return all values
}
)


.map((infos) => {
   

  return (
    <li
      key={infos.id}
      className="product">
      <img src={infos.image} />
      <div className="product-details">
        <header>{infos.title}</header>
        <div className="category">{infos.category}</div>
        <div className="price">{infos.price}</div>
      </div>
    </li>
  )
    
})



}





// const handleToggle=(catname)=>{

//   const currentIndex = checked.indexOf(catname)
//   const newChecked = [...checked]

 

//   if(currentIndex === -1){
//     newChecked.push(catname)
//   }else{
//     newChecked.splice(currentIndex,1)
//   }

//   setChecked(newChecked)


// }




     const onFilterChange = useCallback(event => {
     setState(previousState => {
      let filters = new Set(previousState.filters)
      let products = searchvalue
      
      if (event.target.checked) {
        filters.add(event.target.value)
        console.log(filters)
      } else {
        filters.delete(event.target.value)
      }

      if (filters.size) {
        products = products.filter(product => {
          return filters.has(product.category)
        })
      }
      
      return {
        filters,
        products,
      }
    })
  }, [setState])



const onHandelCancel=()=>{
  catRef.current.value=""
 minRef.current.value=""
 maxRef.current.value=""
  setUserInfo1("")
  setUserInfo2("")
  setUserInfo3("")


}








return (
      <Container maxWidth="md">   

       <Box sx={{ bgcolor: '#f9f9f9',padding:"20px 10px" }} >
          <form>
          <Stack spacing={3} direction="row" >
          <FormControl>
          <InputLabel htmlFor="component-outlined">Category</InputLabel>
          <OutlinedInput
          inputRef={catRef}
          id="component-outlined"
         
          label="Name"
          />
          </FormControl>


          <FormControl>
          <InputLabel htmlFor="component-outlined"  >Min price</InputLabel>
          <OutlinedInput
          inputRef={minRef}
          id="component-outlined"
        
          label="Name"
        />
          </FormControl>



          <FormControl>
          <InputLabel htmlFor="component-outlined"  >Max price</InputLabel>
          <OutlinedInput
           inputRef={maxRef}
          id="component-outlined"
         
          label="Name"
          />
          </FormControl>
          </Stack>

          <Stack spacing={2} direction="row" sx={{margin:'10px'}}>
          <Button variant="contained" onClick={onHandelFilter}>Filter</Button>
          <Button variant="outlined"  onClick={onHandelCancel} >Cancel</Button>
          </Stack>

         
          <h2>Search Based on Category</h2>

          <FormGroup>
          {categories.map((cat) => (
            <FormControlLabel control={<Checkbox />}
            key={cat}
            onChange={onFilterChange}
            value={cat} label= {cat} />
            ))}
          </FormGroup>

    

   
      

      
           
        </form>
        

        <ul className="products"> {showresult()}  </ul>

        </Box>
    </Container>
    

)


}
