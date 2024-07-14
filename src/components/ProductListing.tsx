import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Product } from '../types.d'
import '../App.css'
import axios from 'axios'

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/products')
      .then((response) => {
        console.log(response)
        setProducts(response.data)
      })
      .catch((err) => console.log(err.message))
  }, [])

  const handleCardClick = (product: Product) => {
    navigate(`/products/${product.productId}`)
  }

  return (
    <div className="product-listing-grid">
      {products.map((product) => (
        <div
          key={product.productId}
          className="product-card"
          onClick={() => handleCardClick(product)}
        >
          <img src={product.image[0]} alt={product.productId} />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductListing
