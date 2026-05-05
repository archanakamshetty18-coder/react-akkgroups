import Footer from "./Footer";
import Header from "./Header";

function Contact(){
    return(
        <>
            <div className="container">

                <Header />

                {/* Owner Details */}

                <div className="owner mt-2 text-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5X5Senwei_PrxqJNte0OfFUn0E3ymW2Xh8Q&s" alt="" />
                    <div className="detail mt-2 bg-primary text-black ">
                        <h1>Axxx Kxxxx Kxxxxxxxx</h1>
                        <h4>Founder, Managing Director & CEO</h4> 
                    </div>  
                </div>

                {/* Contact Details */}

                <div className="contact mt-3">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-12">
                            <h4>GET IN TOUCH FOR ANY KIND OF HELP AND INFORMATIONS</h4>
                            <h4><i class="fa-solid fa-location-dot"></i> Our Head Office Address :</h4>
                            <address>Hyderabad, Telangana-500088</address>

                            <h4><i class="fa-solid fa-phone"></i> Call for help :</h4>
                            <p>+91-76XXX-XXXX4</p>

                            <h4><i class="fa-regular fa-envelope"></i> Mail us for information :</h4>
                            <p>aXXXXXXXXXXt.XXd@gmail.com</p>

                        </div>

                        <div className="col-md-6 col-sm-12 col-12">
                            <h6>We’re glad to discuss your organisation’s situation. So please contact us via the details below, or enter your request.</h6>
                            <form action="">
                                <input type="text" placeholder="FirstName*" className="m-1"/> <br />
                                <input type="text" name="" id="" placeholder="LastName*" className="m-1"/> <br />
                                <input type="email" name="" id="" placeholder="Enter Your Email*" className="m-1"/> <br />
                                <input type="phone" name="" id="" placeholder="Enter Phone Number" className="m-1"/> <br />
                            </form>
                            <button className="btn btn-danger">Submit</button>
                        </div>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231591.78879057616!2d78.40804555!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e1!3m2!1sen!2sin!4v1777889072521!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <Footer />

            </div>
        </>
    )
}

export default Contact