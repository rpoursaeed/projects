import React from "react";
import Header from "./components/header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Trending from "./pages/trending/Trending";
import Search from "./pages/search/Search";
import Series from "./pages/series/Series";
import Movies from "./pages/movies/Movies";
import './app.css'


const App=()=>{

return(
 
    <BrowserRouter >
      <Header />
      <div className="App">
          
        <container>
          <Routes>
            <Route       path="/"          element={<Trending />} />
            <Route       path="/movies"    element={<Movies />} />
            <Route       path="/series"    element={<Series />}/>
            <Route       path="/search"    element={<Search />} />
          </Routes>

        </container>
        </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
    
  
)

}

export default App;