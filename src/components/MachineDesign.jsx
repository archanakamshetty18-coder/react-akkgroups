import { useNavigate } from "react-router-dom"
import Footer from "./Footer"

function MachineDesign(){

    let nav=useNavigate()

    let regis=()=>{
        nav('/register')
    }
    return(
        <>
            <div className="container">
                <h1 className="text-center border p-2 m-5">Machine Design</h1>
                <p className="p-2px my-3"><b>UNIT – I <br />
                INTRODUCTION:</b> General considerations in the design of Engineering Materials and their
                properties – selection – Manufacturing consideration in design.BIS codes of steels. <br />
                <b>DESIGN FOR STATIC STRENGTH:</b> Simple stresses – Combined stresses – Torsional and Bending
                stresses – Impact stresses – Stress strain relation – Various theories of failure – Factor of
                safety – Design for strength and rigidity – preferred numbers. The concept of stiffness in
                tension, bending, torsion and combined situations. <br />
                <b>UNIT – II <br />
                DESIGN FOR FATIGUE STRENGTH :</b> Stress concentration – Theoretical stress Concentration
                factor – Fatigue stress concentration factor- Notch Sensitivity – Design for fluctuating stresses
                – Endurance limit – Estimation of Endurance strength – Gerber’s curve, Goodman’s line –
                Modified Goodman’s line – Soderberg’s line. <br />
                <b>UNIT – III <br />
                RIVETED, WELDED AND BOLTED JOINTS: <br />
                Riveted joints-</b> Methods of failure of riveted joints-strength equations-efficiency of riveted
                joints-eccentrically loaded riveted joints. <br />
                <b>Welded joints -</b>Design of fillet welds-axial loads-circular fillet welds under bending, torsion.
                Welded joints under eccentric loading. <br />
                <b>Bolted joints –</b> Design of bolts with pre-stresses – Design of joints under eccentric loading –
                locking devices – bolts of uniform strength. <br />
                <b>UNIT – IV <br />
                KEYS, COTTERS AND KNUCKLE JOINTS : </b>Design of keys-stresses in keys - cottered joints-spigot
                and socket, sleeve and cotter, jib and cotter joints-Knuckle joints.
                iii <br />
                <b>UNIT – V <br />
                SHAFTS :</b> Design of solid and hollow shafts for strength and rigidity – Design of shafts for
                combined bending and axial loads – Shaft sizes – BIS code. Use of internal and external
                circlips, Gaskets and seals (stationary&rotary). <br />
                <b>SHAFT COUPLINGS :</b> Rigid couplings – Muff, Split muff and Flange couplings. Flexible
                couplings – Flange coupling (Modified).</p>
                <button className="btn btn-warning m-2" on onClick={regis}>Join Now</button>
                <Footer />
            </div>
        </>
    )
}

export default MachineDesign