import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
export default function Product(props) {
    const {product ,showButton} = props
    console.log(props)
  return (
    <>
      <div className="card">
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
               {product.category}
              </p>
              <p>Prise : {product.price}</p>
              {showButton &&
              <Link to={`/product/${product.id}`} className="btn btn-primary">
                Details
              </Link>
}
            </div>
          </div>
    </>
  )
}
