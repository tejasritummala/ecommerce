import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        width: { xs: '100%', md: '35%' },
        margin: 'auto',
      }}
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
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  )
}

export default LoginForm
