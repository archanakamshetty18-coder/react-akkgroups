import React, {useState} from "react";

function Counter(){

    let [count,setCount]=useState(0)

    function inc(){

        setCount(count+1)

        //through this process we cannot update the value like increment / decrement at the given place. for which we use hooks concept to get the output at the given place
     //   count = count++
      //  console.log(count++)
    }

    let dec=()=>{

        // writing a condition when the value decrease below 0 it should not reflect -1,-2,.... it should stop at 0 only

        count > 0 ? setCount(count-1) : setCount(0)
        
     //   count = count--
     //   console.log(count--)
    }

    return(
        <>
            {/* Counter Column : which means increment or decrement basically which we see in online shopping site */}

                <div className="my-3">
                    <div className="row">
                        <div className="col-md-6  mx-auto">
                            <div className="card">
                                <div className="card-header text-center bg-secondary text-white">
                                    <h3>Counter</h3>
                                </div>
                                <div className="card-body text-center" >
                                    <div className="sym">
                                        <button className="m-2 p-2" onClick={dec}><i className="fa-solid fa-minus"></i></button>
                                            <span className="text-center text-black m-5">{count}</span>
                                        <button className="m-2 p-2" onClick={inc}><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Counter