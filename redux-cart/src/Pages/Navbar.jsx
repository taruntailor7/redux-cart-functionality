import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { JsonToRedux } from '../Reddux/action';
import { JSON_REDUX } from '../Reddux/actonTypes';

export default function Navbar() {

    const dispatch=useDispatch();
    const { cartItems,cart }=useSelector((state)=>state)
    console.log(cart,"from redux cart array")
    useEffect(()=>{
        getData();
    },[])

    const getData=async()=>{
       let res1= await fetch(' http://localhost:3002/cart');
       let res2=await res1.json();
       dispatch(JsonToRedux(res2));
    }


  return (
    <div style={{ display:'flex' , justifyContent:'space-evenly' ,backgroundColor:'teal' }} >
        <NavLink to='/' >Home</NavLink>
        {/* <NavLink to='/cart' >Cart</NavLink> */}
        <h1>cart: {cartItems}</h1>
    </div>
  )
}
