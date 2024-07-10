import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        const loggedin = verifytoken()
        if(loggedin){
            navigate('/private/addteammember')
        }else{
            navigate('/login')
        }
    },[])

    const verifytoken = () =>{
        const token = localStorage.getItem('token')
        return token && isvalidtoken(token)
    }

    const isvalidtoken = (token) =>{
        return !! token
    }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ProtectedRoutes
