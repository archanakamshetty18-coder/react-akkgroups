import React, {useState} from "react";

function Password(){

    const [show,setShow] = useState("password")
    
    return(
        <>
            <div className="row">
                <div className="col-md-6 my-3 mx-auto">
                    <div className="card text-center">
                        <div className="card-header bg-danger">
                            <h3 className="text-white">Show / Hide Password</h3>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="input-group">
                                    <input type={show} placeholder="Enter Password" className="form-control"/>

                                    <button className="btn btn-primary" type="button" onClick={()=>setShow("text")}><i class="fa-solid fa-eye"></i></button>
                                    
                                    <button className="btn btn-danger" type="button" onClick={()=>setShow("password")}><i class="fa-solid fa-eye-slash"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Password