import './App.css';
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Cart from "./Cart";
import Add_product_screen from "./Add_product_screen";
import Demo from "./Demo";
const App = () => {
  return (
    <div>
      <BrowserRouter>
       <nav className="nev_area">
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/cart" className="cart">
            Cart
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/add-product-screen" element={<Add_product_screen/>} />
          <Route path="/demo" element={<Demo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;