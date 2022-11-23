import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box,Grid,GridItems } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { setProductsCart } from '../Reddux/action';


export default function Products() {

    const [products,setProducts]=useState([]);
    const dispatch=useDispatch();

    const getData=async()=>{
      let res1= await  fetch('http://localhost:3002/products');
      let res2=await res1.json();
      // console.log(res2);
      setProducts(res2);
    }

    const addToCart=async(elem)=>{
        dispatch(setProductsCart(elem));
         fetch('http://localhost:3002/cart',{
         method:'POST',
         body:JSON.stringify(elem),
         headers:{
            'content-type':'application/json'
        }
      })
    }
    
    useEffect(()=>{
        getData()
    },[])

  return (
    <>
    <Box>Products</Box>
    <div style={{ display:'grid' , gridTemplateColumns:'repeat(3,1fr)' }} >
        { products.map((elem)=>(
            <div key={elem.id} >
                <img src={elem.image} />
                <button onClick={()=>addToCart(elem)} >Add to cart</button>
            </div>
        )) }
    </div>
    </>
  )
}
