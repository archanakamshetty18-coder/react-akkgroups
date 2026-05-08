import { useNavigate } from "react-router-dom"
import Footer from "./Footer"

function DashCadCam(){

    let nav=useNavigate()

    const join=()=>{
        nav('/dashpayment')
    }
    return(
        <>
            <div className="container">
                <h1 className="text-center border p-2 m-5">CAD/CAM/FEA/CFD</h1>
                <p className="p-2px my-3"><b>UNIT – <br /> I
                Introduction:</b> Computers in Industrial Manufacturing, Product cycle, CAD / CAM Hardware,
                Basic structure, CPU, Memory types, input devices, display devices, hard copy devices, storage
                devices. <br /> <b>Computer Graphics:</b> Raster scan graphics coordinate system, database structure for
                graphics modeling, transformation of geometry, 3D transformations, mathematics of
                projections, clipping, hidden surface removal. <br />
                <b>UNIT–II <br />
                Geometric modeling:</b> Requirements, geometric models, geometric construction models, curve
                representation methods, surface representation methods, modeling facilities desired. <br />
                <b>UNIT–III <br />
                Drafting and Modeling systems: </b> Basic geometric commands, layers, display control
                commands, editing, dimensioning, solid modeling. <br />
                <b>Numerical control:</b> NC, NC modes, NC elements, NC machine tools, structure of CNC machine
                tools, features of Machining center, turning center, CNC Part Programming fundamentals,
                manual part programming methods, Computer Aided Part Programming. <br />
                <b>UNIT–IV <br />
                Group Technology:</b>  Part family, coding and classification, production flow analysis, advantages
                and limitations, Computer Aided Processes Planning, Retrieval type and Generative type. <br />
                <b>UNIT–V <br />
                Computer Aided Quality Control:</b> Terminology in quality control, the computer in QC, contact
                inspection methods, noncontact inspection methods-optical, noncontact inspection methodsnonoptical, computer aided testing, integration of CAQC with CAD/CAM. <br />
                <b>Computer integrated manufacturing systems:</b> Types of Manufacturing systems, Machine tools
                and related equipment, material handling systems, computer control systems, human labor in
                the manufacturing systems, CIMS benefits. </p>
                <button className="btn btn-warning m-2" on onClick={join}>Join Now</button>
                <Footer />
            </div>
        </>
    )
}

export default DashCadCam