import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './Components/Layouts'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import ProductDetails from './pages/Productdetails'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Show from './context/Show'
import CartItem from './redux/CartItem'






const MyRoute = () => {
  return (
    <Router>
      <Routes>C:\Users\ACER\Desktop\React\demo-app
        <Route path='/' element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path='product' element={<Product />} />
          <Route path='productdetails/:productId' element={<ProductDetails />} />
          <Route path='cart' element={<Cart/>}/>
          <Route path='register' element={<Register/>}/>

          <Route path='context' element={<Show/>}/>

          <Route path='redux/cart' element={<CartItem/>}/>



        </Route>
        </Routes>
    </Router>
  )
}

export default MyRoute