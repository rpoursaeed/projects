import React from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";




function App(){


return  <div><Header />

    <Router>
      <Routes>
 
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          
        
      </Routes>
    </Router>



</div>




}
export default App;