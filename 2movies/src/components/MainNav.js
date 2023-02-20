import * as React from 'react';
import {useEffect} from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()

useEffect(()=>{
if(value===0 ) navigate('/')
else if(value===1 ) navigate('/movies')
else if(value===2 ) navigate('/series')
else if(value===3 ) navigate('/search')

},[value])



  return (
    <Box sx={{ width: '100%',position:"fixed" ,bottom:'0px',left:0,right:'0px',zIndex:100, background:'#f0ffb5' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<MovieIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV series" icon={<TvIcon />} />
        <BottomNavigationAction label="search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}