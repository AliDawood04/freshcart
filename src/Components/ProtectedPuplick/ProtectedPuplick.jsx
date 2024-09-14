import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../Home/Home'

export default function ProtectedPuplick({children}) {

if(!localStorage.getItem('userToken')){
  return children
}else{
  return <Navigate to={'/home'}/>
}
}
