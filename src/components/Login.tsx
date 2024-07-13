import React, { useState } from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Login = () => {
  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="Login/Signup" centered>
            <Tab label="Sign In" value="1" />
            <Tab label="Create Account" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <LoginForm />
        </TabPanel>
        <TabPanel value="2">
          <SignupForm />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default Login
