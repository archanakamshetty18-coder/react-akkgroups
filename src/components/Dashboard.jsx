import React from "react"
import DashboardNav from "./DashboardNav"
import { Outlet } from "react-router-dom"
import Footer from './Footer'


let Dashboard=()=>{
    return(
        <>
            <DashboardNav />
            
            {/* Here we write outlet which means we are guiding the system to check @ app.jsx then it will go there and print dhome and dusers whichever client asks */}

            <Outlet />

            <Footer />
            
        </>
    )
}

export default Dashboard