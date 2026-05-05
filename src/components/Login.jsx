import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { log } from "../services/api";

function Login(){

    let [free,setFree] = useState({
        email : "",
        password : ""
    })

    function inputChange(x){
        setFree({
            ...free,
            [x.target.name] : x.target.value
        })
    }

    let [freeError,setFreeError] = useState({})
    const [msg,setMsg] = useState('')
    let [clr,setClr] = useState({})
 //   const [show,setShow] = useState("password")
    let nav = useNavigate()    // use navigate it will navigate from one component to another component, after login we are trying to navigate to dashboard not immediately after some time like after some milliseconds and also here we are importing the usenavigate from react-router-dom and linking it in app.jsx also

    let validateForm=()=>{
        const errors={}

        // Email Validate
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if(!free.email){
            errors.email="Email is Required"
        }else if(!emailRegex.test(free.email)){
            errors.email="Email is not Valid"
        }

        // Password Validate
        if(!free.password){
            errors.password= "Password is Required"
        }else if(free.password.length < 8){
            errors.password="Password should be more than 8 characters"
        }

        setFreeError(errors)
        return Object.keys(errors).length === 0
    }

    let login=(e)=>{
        e.preventDefault()
        
        if(validateForm()){
            const{email,password} = free
            let userData = new FormData()
            userData.append("userEmail",email)
            userData.append("userPassword",password)
            axios.post("http://ilandertech.com/api/index.php/Welcome/StuLogin",userData).then((res)=>{
                console.log(res.data)

                setMsg(res.data.message)
                if(res.data.status===1){
                    setClr({color:"green"})
                    
                    localStorage.setItem("email",email)  // it is nothing but whoever logins there email should reflect @ admin place. for which we write in localstorage. "email" double quotes email is our own defined name

                    setTimeout(() => {
                        nav('/dashboard')
                    }, 3000);
                }else{
                    setClr({color:"red"})
                }
            }).catch((errors)=>{
                console.log(errors)

                
            })

            console.log(email, password)
        }
    }
    
    return(
        <>
            <div className="container">
                <Header />

                    <div className="card my-3 mx-auto w-50">
                        <div className="card-header text-center bg-danger text-white">
                            <h3>Login Form</h3>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="email">
                                        Email Id
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input 
                                        type="email"
                                        placeholder="Enter Your Email Id" 
                                        className="form-control"
                                        name="email"
                                        onChange={inputChange}
                                    />

                                    {freeError.email && <p className="fw-bold text-danger">{freeError.email}</p> }

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password">
                                        Password
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input 
                                        type="password"
                                        placeholder="Enter Password"
                                        className="form-control"
                                        name="password"
                                        onChange={inputChange}
                                    />

                                  {/*  <div className="input-group">
                                        <input type={show} placeholder="Enter Password" className="form-control"/>
                                    
                                        <button className="btn btn-primary" type="button" onClick={()=>setShow("text")}><i class="fa-solid fa-eye"></i></button>
                                            
                                        <button className="btn btn-danger" type="button" onClick={()=>setShow("password")}><i class="fa-solid fa-eye-slash"></i></button>
                                    </div> */}

                                    {freeError.password && <p className="fw-bold text-danger">{freeError.password}</p> }

                                </div>

                                <div className="form-check mt-3">
                                    <label htmlFor="" className="form-check-label">
                                        <input 
                                            type="checkbox"
                                            name="check"
                                            className="form-check-input"
                                        /> I Accept, above given details are True to my knowledge
                                    </label>
                                </div>
                                <button className="btn btn-primary mt-2" onClick={login}>
                                    Login
                                </button>

                                <p className="fw-bold" style={clr}>{msg}</p>
                                <p className="mt-3">
                                    I Dont have an Account <a href="Register">Register</a>
                                </p>



                            </form>
                        </div>
                    </div>
                <Footer />
            </div>
        </>
    )
}

export default Login