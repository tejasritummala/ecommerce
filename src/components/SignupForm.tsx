import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

const SignupForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignup = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Confirm Password:', confirmPassword)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSignup}
      sx={{ width: { xs: '100%', md: '35%' }, margin: 'auto' }}
    >
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        fullWidth
        label="Confirm Password"
        type="password"
        margin="normal"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
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
        Sign Up
      </Button>
    </Box>
  )
}

export default SignupForm
