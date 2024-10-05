// import logo from './logo.svg';
// import Button from 'react-bootstrap/Button';
// import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNavbar from './components/Navbar';
import ProductsGallery from './Pages/ProductsGallery';
import { Route, Routes } from 'react-router-dom';
import CartPage from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Container from 'react-bootstrap/esm/Container';
import ShoppingCartProvider from './context/ShoppingCartContext';


function App() {
  // const [user,setuser] = useState("");

  return (
  <ShoppingCartProvider>
    <div className="App">
      <NewNavbar />
      <Routes>
       <Route path="/" element={<ProductsGallery />}/>
       <Route path='Cart' element={<CartPage/>} />
       <Route path='Wishlist' element={<Wishlist/>} />
        {/* {!user &&  <Route path='Login' element={<Login/>} />} */}
       <Route path='Login' element={<Login/>} />
       <Route path='*' element={<Container>Not Found!</Container>} />
      </Routes>
    </div>
  </ShoppingCartProvider>
  );
}

export default App;
