import { Routes,Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Courses from './Courses'
import Contact from './Contact'
import Register from './Register'
import Login from './Login'
import Admin from './Admin'
import PageNotFound from './PageNotFound'
// import Table from "./Table"
// import Parent from "./Parent"

// for dashboard lazy loading instead of below format we use another format 
import Dashboard from './Dashboard'
import DashboardHome from './DashboardHome'
import DashboardUsers from './DashboardUsers'
import React from "react"
import ThermoDynamics from "./ThermoDynamics"
import FluidMechanic from "./FluidMechanic"
import MachineDesign from "./MachineDesign"
import MechatronicsRobot from "./MechatronicsRobot"
import AutomotiveHybrid from "./AutomotiveHybrid"
import CadCam from "./CadCam"
import DashThermo from "./DashThermo"



// import Cart from "./Cart"
// import CheckedOut from "./CheckedOut"
// import { Payment } from "./Payment"
import DashCheckout from "./DashCheckout"
import { DashPayment } from "./DashPayment"
import DashFluid from "./DashFluid"
import DashMachine from "./DashMachine"
import DashMechatronics from "./DashMechatronics"
import DashAutomotive from "./DashAutomotive"
import DashCadCam from "./DashCadCam"

// for dashboard lazy loading
// let Dashboard = React.lazy(()=> import('./Dashboard'))  // with this format dashboard will open lately


function App(){
    return(
        <>
            {/* from here we will navigate to particular component for which we need to write routing, when we clicked which components needs to open.
            to install router dom we write it as npm install react-router-dom */}

            <Routes>
                <Route path="" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />}/>
                <Route path="courses" element={<Courses />}/>
                <Route path="contact" element={<Contact />}/>
                <Route path="register" element={<Register />}/>
                <Route path="login" element={<Login />}/>
                <Route path="admin" element={<Admin />} />
               {/* <Route path="table" element={<Table />} />
                <Route path="parent" element={<Parent />} />  */}  

                {/* Here we are writing child routing to re-direct it into required page */}
                <Route path="dashboard" element={<Dashboard />} >
                    <Route path="" element={<DashboardHome />} />
                    <Route path="dhome" element={<DashboardHome />} />
                    <Route path="dusers" element={<DashboardUsers />} />
                </Route>
                <Route path="dashthermo" element={<DashThermo />} />
                <Route path="dashfluid" element={<DashFluid />} />
                <Route path="dashmachine" element={<DashMachine />} />
                <Route path="dashmechatronics" element={<DashMechatronics />} />
                <Route path="dashautomotive" element={<DashAutomotive />} />
                <Route path="dashcadcam" element={<DashCadCam />} />

                <Route path="dashpayment" element={<DashPayment />} />
                <Route path="dashcheckout" element={<DashCheckout />} />


                <Route path="thermodynamic" element={<ThermoDynamics />} />
                <Route path="fluidmechanic" element={<FluidMechanic />} />
                <Route path="machinedesign" element={<MachineDesign />} />
                <Route path="mechatronicsrobot" element={<MechatronicsRobot />} />
                <Route path="automotivehybrid" element= {<AutomotiveHybrid />} />
                <Route path="cadcam" element={<CadCam />} />


                {/* <Route path="cart" element={<Cart />} /> 
                <Route path="checkedout" element={<CheckedOut />} />
                <Route path="payment" element={<Payment />} />  */}
                
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            
        </>
    )
}

export default App