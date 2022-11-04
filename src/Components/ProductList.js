import Product from "./Product";
import React from "react";
import { useEffect,useState } from "react";
export default function ProductList() {
    const API = "https://fakestoreapi.com/products";
    const [Products , setProducts]  = useState([]);

    useEffect(()=>{
        fetch(API)
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    },[]);
  return (
    <>
      <h2 className="text-center p-5">Our Products</h2>
      <div className="container">

      <div className="row">
      {
        Products.map((product)=>{
            return(
                <div className="col"  key={product.id}>
                <Product product={product} showButton={true}/>
                  </div>
            )
        })
      }
        

          
          </div>
      </div>
    </>
  );
}
