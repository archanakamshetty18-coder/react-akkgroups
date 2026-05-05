import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

function DashboardNav(){

    let [email,setEmail] = useState("Admin")  // here we are writing the logged in email id @admin place

    let nav=useNavigate()

    // for which we use saparate hook which is useEffect

    useEffect(()=>{
        if(!localStorage.getItem('email')){  // here after logout it should not go to the dashboard
            nav('/login')
        }
        let userEmail = localStorage.getItem("email")
        setEmail(userEmail)
    },[nav])

    
    const logout=()=>{
        localStorage.clear()  // it clears the login data
        nav('/login')
    }
    return(
        <>
             {/* Navbar Styles*/}
                <nav className="navbar navbar-expand-sm bg-secondary navbar-dark mt-2">
                    <div className="container">
                        <Link to="/dashboard/dhome" className="navbar-brand"><h1>{email}</h1></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target= "#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to="/dashboard/dhome" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dashboard/dusers" className="nav-link">Users</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={logout}>Logout</button>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
        </>
    )
}

export default DashboardNav