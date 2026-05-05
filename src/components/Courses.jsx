import Course from "./Course";
import Footer from "./Footer";
import Header from "./Header";

function Courses(){
    return(
        <>
            <div className="container">
                <Header />
                <Course />
                <Footer />
            </div>        
        </>
    )
}

export default Courses