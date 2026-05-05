import { Link } from "react-router-dom"

function Header(){
    return(
        <>
        {/* Navbar Styles*/}
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark mt-1">
                <div className="container">
                    <Link to="/" className="navbar-brand"><img src="./assets/images/img1.jpg" alt="" /><span className="fw-bold"> AKK Groups</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target= "#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/courses" className="nav-link">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/table" className="nav-link">Table</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                          {/* <li className="nav-item">
                                <Link to="/parent" className="nav-link">Parent</Link>
                            </li> */}  
                          {/* <li className="nav-item">
                                <Link to="/cart" className="nav-link">Cart</Link> 
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header