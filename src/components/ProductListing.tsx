import React, { useState, useEffect } from 'react'
import { Product } from '../types.d'
import '../App.css'
import axios from 'axios'

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/products')
      .then((response) => {
        console.log(response)
        setProducts(response.data)
      })
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <div className="product-listing">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.productId} className="product-card">
            <img src={product.image[0]} alt={product.productId} />
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductListing
