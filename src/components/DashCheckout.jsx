import { Link } from "react-router-dom"

function DashCheckout(){
    return(
        <>
            <div className="text-success text-center my-5">
                <h1>Thank You! Welcome To AKK Groups Family<i class="fa-regular fa-face-smile"></i></h1>
                <Link className="btn btn-danger my-3" to={'/dashboard/dhome'}>Back to Home Page</Link>
            </div>
        </>
    )
}

export default DashCheckout