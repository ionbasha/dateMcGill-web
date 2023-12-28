import React from 'react'
import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../stylesheets/LandingPage.css'
import '../stylesheets/CreateAccount.css'
import axios from 'axios'

function CreateAccount() {

  let navigate = useNavigate();

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#ffe6fe"
  });

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    major: '',
    aboutMe: '',
    genderAm: '',
    genderShow: '',
    pfp: ''
  })

  const handleChange = e => {

    const name = e.target.name;
    const val = e.target.value;
    
    setUserInfo((prevInfo) => ({
      ...prevInfo, [name]: val
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if(
        userInfo.firstName === '' ||
        userInfo.lastName === '' ||
        userInfo.email === '' ||
        userInfo.password === '' ||
        userInfo.confirmPassword === '' ||
        userInfo.major === '' ||
        userInfo.aboutMe === '' ||
        userInfo.genderAm === '' ||
        userInfo.genderShow === '' ||
        userInfo.pfp === ''
      ) {
        alert("Please fill out each field.")
        return
      }
      else if(userInfo.confirmPassword !== userInfo.password) {
        alert("Passwords do not match.")
        return
      }
      else {
        const firstName = userInfo.firstName
        const lastName = userInfo.lastName
        const email = userInfo.email
        const password = userInfo.password
        const major = userInfo.major
        const aboutMe = userInfo.aboutMe
        const genderAm = userInfo.genderAm
        const genderShow = userInfo.genderShow
        const pfp = userInfo.pfp

        const response = await axios.post('http://localhost:8000/createaccount', {
          firstName,
          lastName,
          email,
          password,
          major,
          aboutMe,
          genderAm,
          genderShow,
          pfp
        });
        
        if(response.status == 200 || response.status === 201) {
          navigate('/dashboard')
        }

      }
      
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <p className='background'>
          <span className='landingPageTxtB'>date</span>
          <span className='landingPageTxtR'>McGill</span>
      </p>
      <div className='signup'>
        <form onSubmit={handleSubmit}>
          <input 
          name='firstName'
          placeholder='First name'
          value={userInfo.firstName}
          onChange={handleChange}>
          </input>

          <input 
          name='lastName'
          placeholder='Last name'
          value={userInfo.lastName}
          onChange={handleChange}>
          </input>

          <input 
          name='email'
          placeholder='Email' 
          type={'email'}
          value={userInfo.email}
          onChange={handleChange}>
          </input>

          <input 
          name='password'
          placeholder='Password' 
          type={'password'}
          value={userInfo.password}
          onChange={handleChange}> 
          </input>

          <input 
          name='confirmPassword'
          placeholder='Confirm password' 
          type={'password'}
          value={userInfo.confirmPassword}
          onChange={handleChange}>
          </input>
          

          <input 
          name='major'
          placeholder='Major/program'
          value={userInfo.major}
          onChange={handleChange}>
          </input>

          <input 
          name='aboutMe'
          value={userInfo.aboutMe}
          placeholder='Something to know about me is that...'
          onChange={handleChange}>
          </input>

          <p style={{textAlign: 'center'}}>I am a...</p>
          <select name='genderAm' onChange={handleChange}>
            <option value = ''>None selected...</option>
            <option value = 'M'>Male</option>
            <option value = 'F'>Female</option>
            <option value = 'O'>Other</option>
          </select>

          <p style={{textAlign: 'center'}}>Show me...</p>
          <select name='genderShow' onChange={handleChange}>
            <option value = ''>None selected...</option>
            <option value = 'M'>Males</option>
            <option value = 'F'>Females</option>
            <option value = 'O'>Other</option>
          </select>

          <div className='pfp'>
          <p style={{textAlign: 'center', marginTop: 30}}>Set a profile picture</p>
            <input 
            name='pfp'
            value={userInfo.pfp}
            type={'file'} 
            style={{margin: 0}}
            accept='image/*'
            onChange={handleChange}>
            </input>
          </div>

          <input type={'submit'} value='Create Account'></input>

        </form>
      </div>
    </div>
  )
}

export default CreateAccount;
