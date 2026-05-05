import React, {useState} from "react";

let InputVal=()=>{

    const [data,setData] = useState("Welcome")

    let inputData = (x) => {
        console.log(x.target.value)
        setData(x.target.value)
    }

    let getData = (e) => {
        e.preventDefault()
        console.log(data)
    }
    return(
        <>
        <div className="card mx-auto my-3 w-50">
            <div className="card-header text-center bg-danger">
                <h3>Get Input Value</h3>
            </div>
            <div className="card-body text-center">
                <h1>{data}</h1>
                <form action="">
                    <div className="input-group mb-3">

                        {/* here we did how the process will change when the data is changed and what happened when we  click the button and how to submit the data without reloading/refreshing the data. here it is all about single input value */}

                        {/* onChange is nothing but it will change the data which we entered inside the input at the given place, wherever we want it to be change we have to enter the detail there */}

                        <input 
                            type="text" 
                            placeholder="Enter Text" className="form-control" 
                            onChange={inputData}
                        />

                        {/* when in form tag type submit is there means the data will get refresh(means page will get reload) to avoid such scenario we write some variable at onclick function value and will add preventdefault thn it will not load 
                        => here e is the varaible 
                            example : let getData=(e)=>{
                                        e.preventDefault()
                                        }*/}

                        <button className="btn btn-primary" type="submit" onClick={getData}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default InputVal