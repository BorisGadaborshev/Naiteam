import React from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import  './Registration.css';

export default function Registration() {
  return (
    <div className="register">
      <TextField
  helperText="Please enter your name"
  id=""
  label="Name"
  margin="normal"
/>
<TextField
  type="password"
  id="standard-password-input"
  label="Password"
  autoComplete="current-password"
  margin="normal"
  helperText="Please enter your password"
/>
<TextField
type="email"
  helperText="Please enter your email address"
  id="demo-helper-text-aligned-no-helper"
  label="email"
  margin="normal"
/>
<Button variant="contained" endIcon={<SendIcon />}>
  Регистрация
</Button>
    </div>
  )
}

