import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const[email,setusername]=useState('')
    const[password,setpassword]=useState('')
    const[message,setmessage]=useState('')
    const navigate=useNavigate()
    const auth=useAuth()
    const handlesubmit=(e)=>{
        console.log({email,password})
        e.preventDefault()
        axios.post('http://localhost:3002/creative/login',{email,password})
        .then(res=>{
          setmessage('login successfull redirecting to login page...')
          setTimeout(() => {
              navigate('/')
          }, 3000);
      })
      .catch(err=>{
          setmessage('Something went wrong')
          console.log(err)})
    }
  return (
    <div className='login'>
    <div className='a'>
    <h1>𝓛𝓸𝓰𝓲𝓷</h1>
      <form onSubmit={handlesubmit}>
        
        <label>Email</label>
        <input type='text'value={email}onChange={(e)=>setusername(e.target.value)}/>
        <label>Password</label>
        <input type='password'value={password}onChange={(e)=>setpassword(e.target.value)}/><br></br><br></br>
        <button className='btn' type='submit'>Login</button>
      </form>
      {message}
    </div>
    </div>
  )
}
