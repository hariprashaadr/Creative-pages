import axios from 'axios'
// import { Phone } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate=useNavigate()
    const[message,setmessage]=useState('')
    const[formdata,setformdata]=useState({
        name:'',
        email:'',
        Phone:'',
        password:''
    })
    const handlechange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(formdata)
        axios.post("http://localhost:3002/Creative/signup",formdata )
        .then(res=>{
            setmessage('Signup successfull redirecting to login page...')
            setTimeout(() => {
                navigate('/login')
            }, 3000);
        })
        .catch(err=>{
            setmessage('Something went wrong')
            console.log(err)})
        
    
    }
  return (
    <div className='signup'>
    <div className='form'>
    <h1>𝓢𝓲𝓰𝓷𝓾𝓹</h1>
        <form onSubmit={handlesubmit}>
            
            <label>Username</label>
            <input type='text' name='name' value={formdata.name} onChange={handlechange}/>
           <label>Email</label>
            <input type='email' name='email' value={formdata.email} onChange={handlechange}/>
           <label>Phone</label>
            <input type='number' name='phone' value={formdata.phone} onChange={handlechange}/>
            <label>Password</label>
            <input type='password' name='password' value={formdata.password} onChange={handlechange}/>
            <button className='btn' type='submit'>Signup</button>   
        </form>
        {message}

    </div>
    </div>
  )
}
