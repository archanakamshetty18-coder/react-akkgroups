import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"
import Wish2 from "./Wish2"
import Watch from "./Watch"
import Password from "./Password"
import Counter from "./Counter"
import Wish from "./Wish"
import InputVal from "./InputVal"

function About(){

    return(
        <>
            <div className="container">
                <Header />
                <div id="about">
                    <h2 className="text-center bg-secondary text-white mt-2">About Us</h2>
                    <div className="row mt-2">
                        <div className="col-md-6 col-sm-12 col-12">
                            <p>AKK training and consultancy services is trusted and a Leading Training and consultancy Company in Telangana, India. Specializing in empowering individuals and organizations to reach their maximum potential. With a team of high skilled professionals, we offer comprehensive training programs and expert consultancy services to help our clients thrive in today’s dynamic and competitive business and technological landscape.</p>
                            <p>For the skilled manpower in high-end technology courses like Thermo Dynamics,Fluid Mechanics, Machine Design, Mechatronics & Robotics, Automotive/Hybrid Electric, CAD/CAM/FEA/CFD, UI Design and Development, PHP, Angular, React JS, JAVA, SQL, Photoshop, web designing and digital marketing courses that are ideal for both learners and professionals in the workforce. AKK mainly focuses on imparting quality training in marketing. Our goal is to provide high-quality, practical oriented education with on-the-job training. With our industry focused training programs , we empower individual and organizations to develop their technical skills in the rapidly evolving world of software engineering.</p>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <img src="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg" alt="" />
                        </div>
                    </div>
                </div>

              {/*  <Counter />
                <Wish />
                <Wish2 />
                <Watch />
                <Password />
                <InputVal /> */}
                
                <Footer />
            </div>
        </>
    )
}

export default About