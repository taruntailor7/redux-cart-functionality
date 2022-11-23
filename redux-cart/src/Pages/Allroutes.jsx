import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Cart from './Cart'
import Products from './Products'
export default function Allroutes() {
  return (
    <Routes>
        <Route path='/' element={<Products/>}  />
        <Route path='/cart' element={<Cart/>} />
    </Routes>
  )
}
