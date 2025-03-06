import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './Auth'

export default function ReqAuth(props) {
    const auth=useAuth
    if(!auth.user){
        return<Navigate to='Login'/>
    }
  return props.children
}
