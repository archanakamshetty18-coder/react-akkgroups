import React, {useState} from "react";

let InputValMul=()=>{

    let [fname,setFname] = useState("")
    let [lname,setLname] = useState("")
    let [email,setEmail] = useState("")
    let [phone,setPhone] = useState("")
    let [password,setPassword] = useState("")

    let inputFname=(x)=>{
        setFname(x.target.value)
    }
    let inputLname=(x)=>{
        setLname(x.target.value)
    }
    let inputEmail=(x)=>{
        setEmail(x.target.value)
    }
    let inputPhone=(x)=>{
        setPhone(x.target.value)
    }
    function inputPassword(x){
        setPassword(x.target.value)
    }
    
    function register(e){
        e.preventDefault()
        console.log(`fname:${fname},lname:${lname},email:${email},phone:${phone},password:${password}`)
    }
    return(
        <>
        <div className="card mx-auto my-3 w-50">
            <div className="card-header text-center bg-danger text-white">
                <h3>Register Form</h3>
            </div>
            <div className="card-body">
                <form action="">

                    {/* here we did how the process will change when the data is changed and what happened when we  click the button and how to submit the data without reloading/refreshing the data. now lets see for multiple input values */}

                    {/* onChange is nothing but it will change the data which we entered inside the input at the given place, wherever we want it to be change we have to enter the detail there */}

                    {/* when in form tag type submit is there means the data will get refresh(means page will get reload) to avoid such scenario we write some variable at onclick function value and will add preventdefault thn it will not load 
                        => here e is the varaible 
                            example : let getData=(e)=>{
                                        e.preventDefault()
                                        }*/}

                    <div className="mb-3 mt-3">
                        <label for="fname">First Name<span className="text-danger">*</span></label>
                        <input type="text" placeholder="Enter Your Name" className="form-control" id="fname" name="fname" onChange={inputFname}/>
                        {/* <!--If input value is empty then system will throw an error message--> */}
                        <p className="fw-light" id="err-fname"></p>
                    </div>
                    <div className="mb-3">
                        <label for="lname">Last Name<span className="text-danger">*</span></label>
                        <input type="text" placeholder="Enter Your Last Name" className="form-control" id="lname" name="lname" onChange={inputLname}/>
                        {/* <!--If input value is empty then system will throw an error message--> */}
                        <p className="fw-light" id="err-lname"></p>
                    </div>
                    <div className="mb-3">
                        <label for="email">Email Id<span className="text-danger">*</span></label>
                        <input type="email" placeholder="Enter Your Email Id" className="form-control" id="email" name="email" onChange={inputEmail}/>
                        {/* <!--If input value is empty then system will throw an error message--> */}
                        <p className="fw-light" id="err-email"></p>
                    </div>
                    <div className="mb-3">
                        <label for="phone">Phone Number<span className="text-danger">*</span></label>
                        <input type="number" placeholder="Enter Phone Number" className="form-control" id="phone" name="phone" onChange={inputPhone}/>
                        {/* <!--If input value is empty then system will throw an error message--> */}
                        <p className="fw-light" id="err-phone"></p>
                    </div>
                    <div className="mb-3">
                        <label for="pwd">Password<span className="text-danger">*</span></label>
                        <input type="password" placeholder="Enter Password" id="pwd" name="password" className="form-control" onChange={inputPassword}/>
                        {/* <!--If input value is empty then system will throw an error message--> */}
                        <p className="fw-light" id="err-pwd"></p>
                    </div>
                    <div className="form-check mb-3">
                        <label className="form-check-label">
                            <input type="checkbox" id="check" name="check" className="form-check-input" /> I accept, above given details are True
                        </label>
                        {/* <!--If input value is empty then system will throw an error message--> */}
                        <p className="fw-light" id="err-check"></p>
                    </div>
                    <button className="btn btn-primary mb-3" onClick={register}>Register</button>
                    <p className="fw-light" id="err"></p>
                    <p>I Already Have an Account <a href="login">Login</a></p>
                    <p className="fw-light" id="err"></p>

                   
                </form>
            </div>
        </div>
        </>
    )
}

export default InputValMul