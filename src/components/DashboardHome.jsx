import React from "react";
import Course from "./Course";

function DashboardHome(){
    return(
        <>
            <div className="container text-center ">
                <h1>Welcome to Home Page</h1> 
            </div>
            <Course />
        </>
    )
}

export default DashboardHome