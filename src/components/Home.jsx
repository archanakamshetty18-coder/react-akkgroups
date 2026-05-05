import Header from './Header'
import Course from './Course'
import Footer from './Footer'

function Home(){
    return(
        <>
            <div className="container ">

                <Header />

                {/* Banner Section*/}
                {/* Carousel */}
                
                    <div className="carousel slide" id="demo" data-bs-ride="carousel">
                        {/* Indicators/dots */}
                        <div className="carousel-indicators">
                            <button className="active" type="button" data-bs-target="#demo" data-bs-slide-to="0"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        </div>
                        {/* The Slideshow/carousel */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./assets/images/img5.webp" alt="open car" className="d-block w-100"/>
                            </div>
                            <div className="carousel-item">
                                <img src="./assets/images/img13.jpg" alt="flying car" className="d-block w-100"/>
                            </div>
                        </div>
                        {/* Left and Righht controls/icons */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>


                    
                        <div className="site-section bg-white py-4 px-5">
                            <div className="row">
                                <div className="col">
                                    <div className="heading mb-2">
                                        <h2 className="caption text-center">Choose Course</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-stretch">
                                <div className="col-md-2 col-sm-4 col-12">
                                    <a href="/" routerlink='./courses/html' className='crse'>
                                        <i className="fa-brands fa-html5" style={{color:"orange",fontSize:"25px",margin:"5px"}}></i>
                                        <h5>HTML</h5>
                                    </a>
                                </div>
                                <div className="col-md-2 col-sm-4 col-12">
                                    <a href="/" routerlink='./courses/angular' className='crse'>
                                        <i className="fa-brands fa-css" style={{color:"orange",fontSize:"25px",margin:"5px"}}></i>
                                        <h5>CSS</h5>
                                    </a>
                                </div>
                                <div className="col-md-2 col-sm-4 col-12">
                                    <a href="/" routerlink='./courses/angular' className='crse'>
                                        <i className="fa-brands fa-js" style={{color:"orange",fontSize:"25px",margin:"5px"}}></i>
                                        <h5>Java Script</h5>
                                    </a>
                                </div>
                                <div className="col-md-2 col-sm-4 col-12">
                                    <a href="/" routerlink='./courses/angular' className='crse'>
                                        <i className="fa-brands fa-angular" style={{color:"orange",fontSize:"25px",margin:"5px"}}></i>
                                        <h5>Angular</h5>
                                    </a>
                                </div>
                                <div className="col-md-2 col-sm-4 col-12">
                                    <a href="/" routerlink='./courses/angular' className='crse'>
                                        <i className="fa-brands fa-react" style={{color:"orange",fontSize:"25px",margin:"5px"}}></i>
                                        <h5>React</h5>
                                    </a>
                                </div>
                                <div className="col-md-2 col-sm-4 col-12">
                                    <a href="/" routerlink='./courses/angular' className='crse'>
                                        <i className="fa-brands fa-python" style={{color:"orange",fontSize:"25px",margin:"5px"}}></i>
                                        <h5>Python</h5>
                                    </a>
                                </div>
                                <div className="col-md-2 col-sm-4 col-12">
                                    <a href="/" routerlink='./courses/angular' className='crse'>
                                        <i className="fa-solid fa-gears" style={{color:"orange",fontSize:"25px",margin:"5px"}}></i>
                                        <h5>Fluid Mechanics</h5>
                                    </a>
                                </div>
                                <div className="col-md-2 col-sm-4 col-12">
                                    <a href="/" routerlink='./courses/angular' className='crse'>
                                        <i className="fa-solid fa-robot" style={{color:"orange",fontSize:"25px",margin:"5px"}}></i>
                                        <h5>Robots</h5>
                                    </a>
                                </div>
                                <div className="col-md-2 col-sm-4 col-12">
                                    <a href="/" routerlink='./courses/angular' className='crse'>
                                        <i className="fa-solid fa-charging-station" style={{color:"orange",fontSize:"25px",margin:"5px"}}></i>
                                        <h5>EV Cars</h5>
                                    </a>
                                </div>
                                <div className="col-md-2 col-sm-4 col-12">
                                    <a href="/" routerlink='./courses/angular' className='crse'>
                                        <i className="fa-brands fa-node-js" style={{color:"orange",fontSize:"25px",margin:"5px"}}></i>
                                        <h5>Node Js</h5>
                                    </a>
                                </div>
                                
                            
                                
                                
                                
                                
                            
                            </div>
                        </div>
                    

                    

                <Course />

                <Footer />

            </div>        
        </>
    )
}

export default Home