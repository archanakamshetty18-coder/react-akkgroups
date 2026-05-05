import { Link } from "react-router-dom"

function PageNotFound(){
    return(
        <>
            <div className="text-center text-danger my-5">
                <img src="./assets/images/img15.jpg" alt="" />
                <br />
                <Link to='/' className="btn btn-danger m-3">Go to Home Page</Link>
            </div>
        </>
    )
}

export default PageNotFound