import { useNavigate } from "react-router-dom"
import Footer from "./Footer"

function DashThermo(){

    let nav=useNavigate()

    let join=()=>{
        nav('/dashpayment')
    }
    return(
        <>
            <div className="container">
                <h1 className="text-center border p-2 m-5">Thermo Dynamics</h1>
                <p className="p-2px my-3"><b>UNIT I BASICS, ZEROTH AND FIRST LAW</b> <br />Review of Basics - Thermodynamic systems, Properties and processes <br />ThermodynamicEquilibrium - Displacement work - P-V diagram. <br />Thermal equilibrium- Zeroth law – Concept of temperature and Temperature Scales. <br />First law – application to closed and open systems – steadyand unsteady flow processes. <br /> <br /> <b>UNIT II SECOND LAW AND ENTROPY 9</b> <br /> Heat Engine – Refrigerator - Heat pump. Statements of second law and their equivalence &corollaries.Carnot cycle - Reversed Carnot cycle - Performance - Clausius inequality.Concept ofentropy - T-s diagram - Tds Equations - Entropy change for a pure substance. <br /> <br /> <b>UNIT III AVAILABILITY AND APPLICATIONS OF II LAW 9</b> <br /> Ideal gases undergoingdifferent processes - principle of increase in entropy. Applications of IILaw. High and low grade energy. Availability and Irreversibility for open and closed system processes - I and II law Efficiency. <br /> <br /> <b>UNIT IV PROPERTIES OF PURE SUBSTANCES 9</b> <br /> Steam - formation and its thermodynamic properties - p-v, p-T, T-v, T-s, h-s diagrams.PVTsurface.Determination of dryness fraction.Calculation of work done and heat transfer in non-flow and flow processes using Steam Table and Mollier Chart. <br /> <br /> <b>UNIT V GAS MIXTURES AND THERMODYNAMIC RELATIONS</b> <br /> Properties of Ideal gas, real gas - comparison.Equations of state for ideal and real gases. Vander Waals relation - Reduced properties - Compressibility factor - Principle of Corresponding states -Generalized 3 Compressibility Chart. Maxwell relations - TdS Equations - heat capacities relations -Energy equation, Joule-Thomson experiment - Clausius-Clapeyron equation.</p>
                <button className="btn btn-warning m-2" on onClick={join}>Join Now</button>
                <Footer />
            </div>
        </>
    )
}

export default DashThermo