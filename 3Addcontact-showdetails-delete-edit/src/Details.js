
import { useLocation,useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Details= () => {

const { state } = useLocation()
const navigate = useNavigate();



const onBackContact=()=>{

    navigate("/showall")


}

function createData(id, name) {
    return { id, name };
  }

const rows = [
    createData(state.state.id, state.state.username),
 
   
  ];


return(
<div>
    
     <TableContainer component={Paper} style={{marginBottom:"20px"}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
             
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
        <Button variant="contained" size="medium" onClick={(e)=>onBackContact(e)}  >
          Back
        </Button>
</div>
)


}


export default Details