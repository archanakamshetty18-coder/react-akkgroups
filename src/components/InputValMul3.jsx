import axios from "axios";
import React, {useState} from "react";
// import { reg } from "../services/api";

let InputValMul3=()=>{

    // for a single line code we are changing the code

    let [data,setData] = useState({
        fname : "",
        lname : "",
        email : "",
        phone : "",
        password : "",
        // check : false
    })

    // [] means property binding to change the inpt value

    function inputChange(x){
        setData({
            ...data,
            [x.target.name] : x.target.value
        })
    }
    
    

    let [formErrors, setFormErrors] = useState({})
    let [msg,setMsg] = useState('')
    const [clr,setClr] = useState({})

    let validateForm = () => {

        const errors = {}

        // Fname validate
        if(!data.fname.trim()){  //trim is nothing but it will calculate the unwanted data / spaces
            errors.fname = "Fname is required"
        }

        // Lname validate
        if(!data.lname.trim()){
            errors.lname = "Lname is required"
        }

        // Email Validate
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if(!data.email){
            errors.email = "Email is required";
        } else if(!emailRegex.test(data.email)){  // Regex : Regular Expression
            errors.email = "Email is not Valid";
        }

        //Phone Validate
        if(!data.phone.trim()){
            errors.phone = "Phone Number is required"
        }

        // Password Validate
        if(!data.password){
            errors.password = "Password is required"
        }else if(data.password.length < 8){
            errors.password = "Password should be more than 8 characters"
        }

        //checkbox Validate
        /* if(!data.check){
            errors.check = "accept the terms and conditions"
        } */

        // return true if there are errors
        setFormErrors(errors)
        return Object.keys(errors).length === 0

    }

    function register(e){
        e.preventDefault()

        // After clicking the button the form should get validate for which we are writing below code. 

        if (validateForm()){
            // console.log("Valid Data")

            // here we write API Integration Post method, we are installing(npm install axios) and using Axios then we will import it
            // API Sheet link : http://ilandertech.com/api/index.php/Welcome/

            // here we are first sending data to the server and the data we have names(instead of that we write destructuring)

            let {fname,lname,email,phone,password} = data

            let userData = new FormData()
            userData.append("fname",fname)
            userData.append("lname",lname)
            userData.append("email",email)
            userData.append("ph",phone)
            userData.append("pwd",password)
            axios.post("http://ilandertech.com/api/index.php/Welcome/AddStuRegister",userData).then((res)=>{
                console.log(res.data)  //if stmnt is true answer will display, with the data from the output like already exists or register successfully, here whatever the output we get it should print @ bottom of the form.
                // if status value 0 : data already exists, 1 : register successfully this outputs will come

                setMsg(res.data.message)
                if(res.data.status===1){
                    setClr({color: "green"})  // before using color we have to bind it
                }else{
                    setClr({color:"red"})
                }
            }).catch((errors)=>{
                console.log(errors)  //if stmnt is false or any errors answer will display
            })

        }

        
    }






    return(
        <>
        <div className="card mx-auto my-3 w-50">
            <div className="card-header text-center bg-danger text-white">
                <h3>Register Form 3</h3>
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

                    {/* Let's check the output for our understanding like how it is working */}

                    {/*<p>{JSON.stringify(data)}</p>*/}

                    <div className="mb-3 mt-3">
                        <label htmlFor="fname">First Name<span className="text-danger">*</span></label>
                        <input type="text" placeholder="Enter Your Name" className="form-control" id="fname" name="fname" onChange={inputChange}/>
                        {/* <!--If input value is empty then system will throw an error message--> */}

                        {/* if any errors/ if we didnt enter any data in fname below statement will reflect */}

                        {formErrors.fname && <p className="fw-bold text-danger">{formErrors.fname}</p> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname">Last Name<span className="text-danger">*</span></label>
                        <input type="text" placeholder="Enter Your Last Name" className="form-control" id="lname" name="lname" onChange={inputChange}/>
                        {/* <!--If input value is empty then system will throw an error message--> */}
                        
                        {/* if any errors/ if we didnt enter any data  in lname below statement will reflect */}

                        {formErrors.lname && <p className="fw-bold text-danger">{formErrors.lname}</p> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email Id<span className="text-danger">*</span></label>
                        <input type="email" placeholder="Enter Your Email Id" className="form-control" id="email" name="email" onChange={inputChange}/>
                        {/* <!--If input value is empty then system will throw an error message--> */}

                        {/* if any errors/ if we didnt enter any data  in email below statement will reflect */}
                        {formErrors.email && <p className="fw-bold text-danger">{formErrors.email}</p> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Phone Number<span className="text-danger">*</span></label>
                        <input type="number" placeholder="Enter Phone Number" className="form-control" id="phone" name="phone" onChange={inputChange}/>
                        {/* <!--If input value is empty then system will throw an error message--> */}

                        {/* if any errors/ if we didnt enter any data  in phone below statement will reflect */}
                        {formErrors.phone && <p className="fw-bold text-danger">{formErrors.phone}</p> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd">Password<span className="text-danger">*</span></label>
                        <input type="password" placeholder="Enter Password" id="pwd" name="password" className="form-control" onChange={inputChange}/>
                        {/* <!--If input value is empty then system will throw an error message--> */}
                        
                        {/* if any errors/ if we didnt enter any data  in password below statement will reflect */}
                        {formErrors.password && <p className="fw-bold text-danger">{formErrors.password}</p> }
                    </div>
                    <div className="form-check mb-3">
                        <label className="form-check-label">
                            <input type="checkbox" id="check" name="check" className="form-check-input" /> I accept, above given details are True
                        </label>
                        {/* <!--If input value is empty then system will throw an error message--> */}

                        {/* if any errors/ if we didnt enter any data  in password below statement will reflect */}
                        {/* {formErrors.check && <p className="fw-bold text-danger">{formErrors.check}</p>} */}
                    </div>
                    <button className="btn btn-primary mb-3" onClick={register}>Register</button>
                    <p className="fw-bold" style={clr}>{msg}</p>
                    <p className="fw-light" id="err"></p>
                    <p>I Already Have an Account <a href="login">Login</a></p>
                    <p className="fw-light" id="err"></p>

                   
                </form>
                
            </div>
        </div>
        </>
    )
}

export default InputValMul3