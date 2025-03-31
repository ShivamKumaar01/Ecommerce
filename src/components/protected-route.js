import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"

const ProtectedRoute = (props) => {
    const{Component,role}=props
    const navigate=useNavigate();
    useEffect(() => {
        let login = localStorage.getItem(role === "vendor" ? "vendorLogin" : "userLogin");
        if (!login) {
            navigate('/login');
        }
    }, [navigate, role]);
  return (
    <div>
        <Component></Component>
    </div>
  )
}

export default ProtectedRoute;