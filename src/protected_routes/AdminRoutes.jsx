import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const AdminRoutes = () => {
    // get user information 
    const user = JSON.parse(localStorage.getItem('userData'))
    // check user
    //check is admin == true
    // if true : allow access to all the routes to admin (Outlet)
    //if false : navigate to login screen
    return user != null && user.isAdmin ? <Outlet /> : <Navigate to='/login' />


}

export default AdminRoutes
