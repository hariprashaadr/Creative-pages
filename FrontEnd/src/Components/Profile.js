import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const auth=useAuth()
    const navigate = useNavigate()
    const handlelogout=()=>{
        auth.logout()
        // navigate('/Login')
    }
  return (
    <div className='h'>
        Profile page
        {/* <h1>Welcome{auth.user}</h1> */}
        <button onClick={handlelogout}>Logout</button>

    </div>
  )
}
