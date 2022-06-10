import React,{ useState } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import  './Login.css';
import { blueGrey } from '@mui/material/colors';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';


export default function Registration() {
  const color = blueGrey[300];

  const [input, setInput] = useState({})
  const dispatch = useDispatch();
  const addInput = (e) => {
  setInput(prev => ({...prev, [e.target.name]: e.target.value}));
  }

const addUser = (input) => {
axios.post('http://localhost:3001/users/login',{login: input.login, password: input.password})
.then((response) => {
  dispatch({type:'LOGIN',payload:{...response.data, isAuth:true}})
})
}

  return (
    <div className="login">
      <TextField
  helperText="Введите ваш логин"
  id=""
  label="Логин"
  name="login"
  margin="normal"
  onChange={addInput}
/>
<TextField
  type="password"
  id="standard-password-input"
  label="Пароль"
  name="password"
  autoComplete="current-password"
  margin="normal"
  helperText="Установите пароль"
  onChange={addInput}
/>

<Button variant="contained" onClick={() => addUser(input)} style={{backgroundColor:color}} endIcon={<SendIcon />}>
  Авторизация
</Button>
    </div>
  )
}

