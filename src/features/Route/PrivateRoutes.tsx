import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const navigate = useNavigate()
  const authenticated = localStorage.getItem('authenticated')

  useEffect(() => {
    if (authenticated === 'false' || authenticated === null) {
      // commenting this line to prevent the login redirections
      // it is a lazy approach, if I llok for a permanent solution, I'll remove this PrivateRoutes and pass routes directly
      // return navigate(`${process.env.PUBLIC_URL}/login`)
    }
  })
  return <>{<Outlet />}</>
}

export default PrivateRoutes
