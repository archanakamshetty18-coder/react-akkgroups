import { useNavigate } from "react-router-dom"
import Footer from "./Footer"

function FluidMechanic(){

    let nav=useNavigate()

    let regis=()=>{
        nav('/register')
    }
    return(
        <>
            <div className="container">
                <h1 className="text-center border p-2 m-5">Fluid Mechanics</h1>
                <p className="p-2px my-3"><b>UNIT-I <br />
                Fluid Statics:</b> Dimensions and units: physical properties of fluids- specific gravity,
                viscosity surface tension- vapor pressure and their influence on fluid motion- atmospheric
                gauge and vacuum pressure – measurement of pressure- Piezometer, U-tube and
                differential manometers. <br />
                <b>UNIT-II <br />
                Fluid Kinematics:</b> Stream line, path line and streak lines and stream tube, classification
                of flows-steady & unsteady, uniform, non uniform, laminar, turbulent, rotational, and
                irrotational flows-equation of continuity for one dimensional flow. <br />
                <b>Fluid Dynamics:</b> Surface and body forces –Euler’s and Bernoulli’s equations for flow
                along a stream line, momentum equation and its application on force on pipe bend. <br />
                <b>UNIT-III <br />
                Boundary Layer Concept:</b> Definition, thickness, characteristics along thin plate, laminar
                and turbulent boundary layers (No derivation). <br />
                <b>Closed conduit flow:</b> Reynold’s experiment- Darcy Weisbach equation- Major and
                Minor losses - pipes in series and pipes in parallel- total energy line-hydraulic gradient
                line. Measurement of flow: pitot tube, venturimeter, and orifice meter. <br />
                <b>UNIT-IV <br />
                Basics of Turbo Machinery:</b> Hydrodynamic force of jets on stationary and moving flat,
                inclined, and curved vanes. <br />
                <b>Hydraulic Turbines:</b> Classification of turbines, impulse and reaction turbines, Pelton
                wheel turbine, Francis turbine and Kaplan turbine-working proportions, work done,
                efficiencies. Hydraulic design- draft tube theory- functions and efficiency. <br />
                <b>Performance of hydraulic turbines:</b> Geometric similarity, Unit and specific quantities,
                characteristic curves, cavitation, surge tank, water hammer. <br />
                <b>UNIT-V <br />
                Centrifugal Pumps:</b> Classification, working, work done – manomertic head and
                efficiencies specific speed- performance characteristic curves, NPSH. <br />
                <b>Reciprocating Pumps:</b> Working, Discharge, slip, indicator diagrams.</p>
                <button className="btn btn-warning m-2" on onClick={regis}>Join Now</button>
                <Footer />
            </div>
        </>
    )
}

export default FluidMechanic