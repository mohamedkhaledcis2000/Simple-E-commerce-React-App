import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Product from './Product';
export default function ProductDetails() {
    const [product , setProduct] = useState({});
    const API = "https://fakestoreapi.com/products";
    const params =useParams();
    useEffect(() => {
       fetch(`${API}/${params.productId}`)
       .then((res)=>res.json()).then((product)=>{setProduct(product)})
    }, []);
  return (
    <Product product={product} showButton={false}/>
  )
}
