import { Link } from "react-router-dom"

function CheckedOut(){
    return(
        <>
            <div className="text-success text-center my-5">
                <h1>Thank You! Your Order Placed Successfully<i class="fa-regular fa-face-smile"></i></h1>
                <Link className="btn btn-primary my-3 m-2" to={'/Courses'}>Continue Shopping</Link>
                <Link className="btn btn-danger my-3" to={'/Cart'}>Back to Orders</Link>
            </div>
        </>
    )
}

export default CheckedOut