import { useNavigate } from "react-router-dom"
import Footer from "./Footer"

function AutomotiveHybrid(){

    let nav=useNavigate()

    const regis=()=>{
        nav('/register')
    }
    return(
        <>
            <div className="container">
                <h1 className="text-center border p-2 m-5">Automotive/Hybrid Electric</h1>
                <p className="p-2px my-3"><b>UNIT 1: <br />
                INTRODUCTION TO EV:</b> History of hybrid and electric vehicles, social and environmental importance of
                hybrid and electric vehicles, Classification of EV. <br />
                <b>ARCHITECTURE OF HEV:</b> Series HEV, Parallel HEV and Series-Parallel HEV, Power flow control inhybrid
                drive train topologies: Series hybrid drive train, Parallel hybrid drive train and Series-Parallel hybrid
                drive train <br />
                <b>UNIT 2: <br />
                FUNDAMENTALS OF ELECTRIC VEHICLES:</b> General description of vehicle movement, Vehicle resistance:
                Rolling Resistance, Aerodynamic drag, Grading résistance, Dynamic Equation, Vehicle Transmission
                Characteristics: Manual gear transmission and Hydro dynamic transmission, Vehicle performance: Maximum
                Cruising Speed, Gradeability, Acceleration performance. <br />
                <b>UNIT 3: <br />
                PLUG-IN HYBRID ELECTRIC VEHICLES:</b> Introduction, Functions and Benefits of PHEV, Operating Principles of
                Plug- in Hybrid Vehicle: Charge-Depleting Mode, Charge-Sustaining Mode, AER Mode, Engine-Maintenance
                Mode, Control Strategy of PHEV, PHEV-Related Technologies and Challenges <br />
                <b>FUNDAMENTALS OF CHARGERS:</b> Charger Classification and Standards, Charger Requirements,Topology
                Selectionfor Level 1 and 2 AC Chargers: Front-End AC–DC Converter Topologies, Isolated DC–DC Converter
                Topologies, Wireless Chargers. <br />
                <b>UNIT 4: <br />
                ELECTRIC PROPULSION SYSTEMS:</b> Introduction to electric components used in HEV’s, DC Motor drives:
                Combined armature and Field Control method, Chopper control DC drives, Multi quadrant control of Chopper
                fedDC drive. <br />
                <b>PERMANENT MAGNET BLDC & SRM MOTOR DRIVES:</b> Closed loop Torque control of BLDC motor drive and
                Sensorless Control of BLDC Motor drive using Back EMF method, Switch Reluctance Motor drives: Basic
                Magneticstructure, Modes of operation, different Inverter topologies of SRM drives. <br />
                <b>UNIT 5: <br />
                ENERGY STORAGE:</b> Introduction to Energy Storage Requirements in Electric Vehicles, Battery Parameters,
                Battery based energy storage: Lead acid battery, Lithium Ion Battery and Metal Air batteries, Super Capacitor
                based energy storage, Fuel Cell based energy storage, Hybridization of different energy storage device.</p>
                <button className="btn btn-warning m-2" on onClick={regis}>Join Now</button>
                <Footer />
            </div>
        </>
    )
}

export default AutomotiveHybrid