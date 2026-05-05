import Header from './Header'
import Child from "./Child"
import Footer from './Footer'
import { useState } from 'react'

function Parent(){

    // till now we did parent to child component using props now we are doing child to parent component using events

    let name = "AKK Groups"
    let [data,setData] = useState("")

    let res=(y)=>{
        setData(y.name)
    }

  {/*  const subjects=[
        {
            name : "Angular",
            fee : 15000
        },
        {
            name : "React",
            fee : 12000
        },
        {
            name : "Angular",
            fee : 15000
        },
        {
            name : "React",
            fee : 12000
        },
        {
            name : "Angular",
            fee : 15000
        },
        {
            name : "React",
            fee : 12000
        },
        {
            name : "Angular",
            fee : 15000
        },
        {
            name : "React",
            fee : 12000
        }
    ]

    let obj = {name:"angular",fee:15000}  */}
    return(
        <>
           {/* <div className="container">
                <Header />
                <h1>Welcome to Parent Components</h1>
                <Child subject={obj} />

                <Footer />
            </div> */}

            {/* till now we did parent to child component using props now we are doing child to parent component using events */}

            <h1>Welcome to Parent Component</h1>
            <h1>Data Coming From Child : {data}</h1>
            <Child name1 = {name} fun={res} />
        </>
    )
}

export default Parent