import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, CircularProgress, Box, Alert } from '@mui/material'
import axios from 'axios'
import { Product } from '../types.d'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((response) => {
        console.log(response)
        setTimeout(() => {
          setProduct(response.data)
          setLoading(false)
        }, 2000)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" marginTop={5}>
        <Alert severity="error">{error}</Alert>
      </Box>
    )
  }

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <img src={product.image[0]} alt={product.productId} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
      >
        Add to Bag
      </Button>
    </div>
  )
}

export default ProductDetail
