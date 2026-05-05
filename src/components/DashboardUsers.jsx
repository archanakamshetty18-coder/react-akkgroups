// import React, { useEffect, useState } from "react";
// import { getApi } from '../services/api'

function DashboardUsers(){

  {/*  Get Method or Get API Integration
    
    
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    let [error,setError] = useState(null)

    // Get Method or Get API Integration : which means we get the details of the users who all registered, first we check the details and then we write for the code for the same format in the table format. [] is nothing but dependency value. useeffect hook will open when the page open then immediately this fetchdata gets call

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch('http://ilandertech.com/api/index.php/Welcome/getStuUsers')        // here no need of fetch method directly we can use getApi here instead

                // instead we can write like this
                const response = await getApi()

                if(!response.ok){
                    throw new Error(`Error: ${response.status}`)
                }
                const result = await response.json()
                console.log(result.data)

                // to get the data recently who have registered we sort the data from descending to ascending

                let sortData = result.data.sort((a,b)=>{
                    return b.user_id-a.user_id
                })

                setData(sortData)  // Update state with fetched data

            }catch(err){
                setError(err.message) // Set error if request fails
            } finally {
                setLoading(false)  // Stop loading after request completes
            }

        }

        fetchData()

    },[])

    if(loading) return <h1 className="text-center">Loading...</h1>
    if (error) return <p>Error : {error}</p> */}
        
    


    return(
        <>
            <div className="container text-center">
                <h1 className="text-center my-3 text-danger">Welcome to Dashboard Users</h1>

                {/* to get the data in table format we write 

                <div className="table-responsive">
                    <table className="table table-border table-light table-striped">
                        <thead>
                            <tr>
                                <th>S.NO</th>
                                <th>Fname</th>
                                <th>Lname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((x,index)=>{
                                    return(
                                        <tr key={x.user_id}>
                                            <td>{index+1}</td>
                                            <td>{x.user_fname}</td>
                                            <td>{x.user_lname}</td>
                                            <td>{x.user_email}</td>
                                            <td>{x.user_phone}</td>
                                            <td>{x.user_password}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div> */}

            </div>
        </>
    )
}

export default DashboardUsers