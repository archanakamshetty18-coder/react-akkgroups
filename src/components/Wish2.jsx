// import Header from "./Header"
// import Footer from "./Footer"
import { useState } from "react"

function Wish2(){
    //message function with parameter

    const [message,setMessage] = useState(" ")
    const [style,setStyle] = useState({})

    // writing in a single code

    let xyz=(abc,clr,bgd)=>{
        setMessage(abc)
        setStyle({
            color:clr,
            background:bgd
        })
    }

    return(
        <>
            
                {/* Now we are doing wish message. Here we are writing in a single text and also trying to change the text color of good morning,afternoon and all...*/}

                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card mt-3">
                            <div className="card-header bg-success text-center text-white">
                                <h3>Wish2 Message - function with parameter</h3>
                            </div>
                            <div className="card-body text-center">
                                <h4>Hello! <span style={style}>{message}</span></h4>

                                <div className="mt-3">
                                    <button className="btn btn-primary " onClick={()=>xyz("Good Morning","green","pink")}>Good Morning</button>
                                    <button className="btn btn-success mx-2" onClick={()=>xyz("Good Afternoon","red","green")}>Good Afternooon</button>
                                    <button className="btn btn-secondary " onClick={()=>xyz("Good Evening","pink","blue")}>Good Evening</button>
                                    <button className="btn btn-warning mx-2" onClick={()=>xyz("Good Night","orange","black")}>Good Night</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                
            
        </>
    )
}

export default Wish2