import React, { useState, useEffect } from 'react'
import { Product } from '../types.d'
import { Products } from '../products'
import '../App.css'

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts(Products)
  }, [])

  return (
    <div className="product-listing">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.id} />
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductListing
