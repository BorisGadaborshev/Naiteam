import React,{ useState } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import  './Registration.css';
import { blueGrey } from '@mui/material/colors';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Registration() {
  const color = blueGrey[300];
  // const isAuth = useSelector((state) => state.isAuth)
  const [input, setInput] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addInput = (e) => {
  setInput(prev => ({...prev, [e.target.name]: e.target.value}));
  }

const addUser = (input) => {
axios.post('http://localhost:3001/users/registration',{login: input.login, password: input.password, email: input.email})
.then((response) => {
  console.log(response.data);
  dispatch({type:'REGISTRATION',payload:{user:response.data, isAuth:true}})
  navigate('/');
})
}

  return (
    <div className="register">
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
<TextField
type="email"
  helperText="Введите ваш электронный адрес"
  id="demo-helper-text-aligned-no-helper"
  label="Электронный адрес"
  name="email"
  margin="normal"
  onChange={addInput}
/>
<Button variant="contained" onClick={() => addUser(input)} style={{backgroundColor:color}} endIcon={<SendIcon />}>
  Регистрация
</Button>
    </div>
  )
}

