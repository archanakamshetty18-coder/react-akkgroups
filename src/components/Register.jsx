import Footer from "./Footer";
import Header from "./Header";
// import InputValMul from "./InputValMul";
// import InputValMul2 from "./InputValMul2";
import InputValMul3 from "./InputValMul3";

function Register(){
    return(
        <>
            <div className="container">
                <Header />

                {/* <InputValMul />
                <InputValMul2 /> */} 
                <InputValMul3 />

                <Footer />
            </div>
        </>
    )
}

export default Register