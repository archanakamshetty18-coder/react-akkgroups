import { useNavigate } from "react-router-dom"
import Footer from "./Footer"

function MechatronicsRobot(){

    let nav=useNavigate()

    let regis=()=>{
        nav('/register')
    }
    return(
        <>
            <div className="container">
                <h1 className="text-center border p-2 m-5">Mechatronics & Robotic</h1>
                <p className="p-2px my-3"><b>UNIT -I</b> <br />
                Introduction to Embedded System Design, Categories of ES, Overview of Embedded System Architecture, Recent
                Trends in Embedded Systems, Hardware Architecture of Embedded System, Real-time Embedded Systems,
                Robots and Robotics, Microprocessors and Microcontrollers, Microcontroller or Embedded Controller <br />
                <b>UNIT - II <br />
                Robotics:</b> Classification of Robots, Links and Joint, Degree of freedom, Motors-DC motors, Stepper Motors, Servo
                Motors; Power Transmission-Type of Gears, Robotic Sensors, Applications of Robot, S/w used for Robot programming. <br />
                <b>UNIT- III <br />
                The AVR RISC microcontroller architecture:</b> Introduction, AVR family architecture, register file, Pin
                diagram of AVR, memory organization, I/O ports, timers, USART, Interrupt structure. <br />
                <b>UNIT-IV <br />
                ARM Processor:</b> Fundamentals, Registers, current program status register, pipeline concept, Interrupt and the
                vector table. <br />
                <b>UNIT V <br />
                AI IN ROBOTICS:</b> Robotic perception, localization, mapping- configuring space, planning uncertainmovements,
                dynamics and control of movement, Ethics and risks of artificial intelligence in robotics.
                </p>
                <button className="btn btn-warning m-2" on onClick={regis}>Join Now</button>
                <Footer />
            </div>
        </>
    )
}

export default MechatronicsRobot