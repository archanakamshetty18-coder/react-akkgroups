import React, {useState} from "react";

function Wish(){

    //message function without parameter

    const [message,setMessage] = useState(" ")

    function mrng(){
        setMessage("Good Morning")

    }

    function aftn(){
        setMessage("Good Afternoon")
    }

    let evng=()=>{
        setMessage("Good Evening")
    }

    let nyt=()=>{
        setMessage("Good Night")
    }

    return(
        <>
            {/* Now we are doing wish message */}

                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-header bg-secondary text-center text-white">
                                <h3>Wish Message - function without parameter</h3>
                            </div>
                            <div className="card-body text-center">
                                <h4>Hello! {message}</h4>

                                <div className="mt-3">
                                    <button className="btn btn-primary " onClick={mrng}>Good Morning</button>
                                    <button className="btn btn-success mx-2" onClick={aftn}>Good Afternooon</button>
                                    <button className="btn btn-secondary " onClick={evng}>Good Evening</button>
                                    <button className="btn btn-warning mx-2" onClick={nyt}>Good Night</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Wish