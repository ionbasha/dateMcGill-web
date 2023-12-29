import React from 'react'
import { useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../stylesheets/Login.css'
import '../stylesheets/LandingPage.css'
import axios from 'axios'

function Login() {

  const navigate = useNavigate();

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#ffe6fe"
  });

  const [emailEntered, setEmailEntered] = useState('')
  const [passwordEntered, setPasswordEntered] = useState('')

  const handleSubmit = async e => {
    e.preventDefault();
    
    const response = await axios.post('http://localhost:8000/login', { emailEntered, passwordEntered });

    if(response.status === 201) { navigate('/dashboard'); }
    else { alert("User does not exist. Please ensure that your email and password are correct.") }

  }

  return (
    <div className='overlayLogin'>
      <p>
          <span className='landingPageTxtB'>date</span>
          <span className='landingPageTxtR'>McGill</span>
      </p>
      <form onSubmit={handleSubmit}>
        <input 
        placeholder='Email' 
        value={emailEntered} 
        onChange={ e => setEmailEntered(e.target.value) }>
        </input>
        <input 
        placeholder='Password' 
        type={'password'} 
        value = {passwordEntered} 
        onChange = {e => {setPasswordEntered(e.target.value)}}>
        </input>
        <input type={'submit'} value='Log In' onSubmit={handleSubmit}></input>
      </form>
    </div>
  )
}

export default Login;
