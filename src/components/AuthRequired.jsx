import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

const AuthRequired = () => {
    const location = useLocation()
    const auth = getAuth()
    const user = auth.currentUser

    if (user) {
        return (<Outlet />)
    } else {
        return (
            <Navigate 
                to="/login"
                state={{message: "You must log in first", from: location.pathname}}
                replace>
            </Navigate>
        )
    }
}

export default AuthRequired