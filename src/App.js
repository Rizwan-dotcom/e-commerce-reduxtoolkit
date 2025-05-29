
import './App.css';
import { CardComponent } from './page/card/card';

import Cart from './page/cart/cart';
import Navbar from './page/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './page/card-detail';
import Footer from './page/footer';

function App() {
  
  return (
    <div className='background'>  
        <Router>
      <Navbar/>
          <Routes>
            <Route path='/' element={<CardComponent/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="/product-detail/:id" element={<ProductDetail/>}/>
          </Routes>
         <Footer/>
        </Router>
    </div>
  );
}

export default App;
