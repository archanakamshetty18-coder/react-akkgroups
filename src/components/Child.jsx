import React from 'react'

function Child({x}){
   // console.log(props) // here the output wil come as objects. props is nothing but whatever we given in parent example (name = "of AKK Groups") it will reflect in child as object when we do binding only at the required place. and the output will be props={name = "of AKK Groups"}
  //  console.log(props)  //here the output will be in {subject:{name:"angular",fee:15000}}

  // in the place of props we can use any keyword, its totally depends in us

    //here now we are doing destructuring
    //here we are alloting subject to props and to avoid multiple writes of names and fee we are assining to subject object and then we directly use subject in the place of props in console.log(props)

   // let {subject}=props
   // let {name,fee}=subject
    //now directly to get the answer we will write like this => props.subject.name or props.subject.fee  // destructuring with props
   // console.log(subject)

   // till now we did parent to child component using props now we are doing child to parent component using events

   console.log(x)  // output will be x={name:"AKK Groups"}
   let d={name:"child"}

   let send=()=>{
    x.fun(d)
   }
    return(
        <>
          {/*  <div className="container">
                <h1>Welcome to Child Components </h1> {/* we should write as binding */}

                {/*    <h1>Name : {props.subject[0].name}</h1>
                <h1>Fee : {props.subject[0].fee}</h1>
                <h1>==========================</h1>*/}

                {/*next will do binding process*/}

                {/*    {
                    props.subject.map((chk)=>{
                        return(
                            <>
                                <h1>Name : {chk.name}</h1>
                                <h3>Fee : {chk.fee}</h3>
                            </>
                        )
                    })
                }*/}

           {/*  <h1>Name : {name}</h1>
            <h3>Fee : {fee}</h3>
            </div>  */}

            {/* till now we did parent to child component using props now we are doing child to parent component using events */}

            <div>
                <h1>Child Component : {x.name1}</h1>
                <button className="btn btn-danger" onClick={send}>Send to Parent</button>
            </div>
        </>
    )
}

export default Child