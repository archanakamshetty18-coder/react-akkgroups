import { useNavigate } from "react-router-dom"

let Course = () => {

    let nav = useNavigate()

    let ReadMore=(path)=>{
        nav(path)
    }

    const courses = [
        {
            id : 1,
            name : "ThermoDynamic",
            img : "https://study.madeeasy.in/wp-content/uploads/2025/08/what-is-thermodynamics.jpg",
            path : '/thermodynamic',
            content : "Thermodynamics in mechanical engineering is the study of energy, heat, work, and the properties of systems, focusing on converting energy into power and usable work. It applies principles like the laws of thermodynamics to analyze and design systems like engines, refrigerators, and power plants, ensuring energy efficiency and effective heat transfer.",
            duration : "60Hrs",
            fee : 15000
            
        },
        {
            id : 2,
            name : "Fluid Mechanics",
            img : "https://www.discoverengineering.org/wp-content/uploads/2023/12/mj_11466_3-800x450.jpg",
            path : '/fluidmechanic',
            content : "Fluid mechanics in mechanical engineering studies how liquids and gases behave at rest (fluid statics) and in motion (fluid dynamics), focusing on forces, energy, and flow patterns. Key applications include designing turbines, pumps, HVAC systems, and aerodynamic components for vehicles and aircraft to optimize performance.",
            duration : "50Hrs",
            fee : 18000
            
        },
        {
            id : 3,
            name : "Machine Design",
            img : "https://media.istockphoto.com/id/1135159626/photo/female-mechanical-engineer-designs-3d-engine-on-her-personal-computer-while-male-automation.jpg?s=612x612&w=0&k=20&c=U2Eu-LvJ-xunl2VDIBzYlRJDwC1sLA3HgrWG5Oxw_TY=",
            path : '/machinedesign',
            content : "Machine Design in mechanical engineering is the systematic process of creating, analyzing, and developing mechanical components, systems, and machines. It merges principles of physics, material science, and mathematics to produce functional, safe, and cost-effective machinery.Effective machine design balances functionality",
            duration : "60Hrs",
            fee : 12000
        },
        {
            id : 4,
            name : "Mechatronics & Robotic",
            img : "https://media.gettyimages.com/id/2176081897/photo/woman-engineer-developer-in-robotics-arm-prototype-demonstrating-a-practical-robotics-in.jpg?s=612x612&w=gi&k=20&c=-W25zHTY3B9T-FrB-ilbb-HZUkvx0Xzt0c3DLPGu6Io=",
            path : '/mechatronicsrobot',
            content : "Mechatronics and Robotics merge mechanical engineering with electronics, computer control, and software to design intelligent, automated systems. While mechatronics focuses on the broader synergy of these fields, robotics is a subset focusing on creating programmable, versatile machines. These fields are vital for Industry 5.0, automation.",
            duration : "70Hrs",
            fee : 20000
        },
        {
            id : 5,
            name : "Automotive/Hybrid Electric",
            img : "https://static.vecteezy.com/system/resources/thumbnails/070/575/925/small/electric-car-internal-components-blueprint-visualization-future-automotive-engineering-and-sustainable-technology-design-photo.jpeg",
            path : '/automotivehybrid',
            content : "Hybrid Electric Vehicles (HEVs) represent a critical intersection of mechanical engineering, electrical engineering, and power electronics, aiming to bridge the gap between traditional Internal Combustion Engine (ICE) vehicles and fully electric vehicles (BEVs) this field is moving beyond traditional grease and gears.",
            duration : "60Hrs",
            fee : 22000
        },
        {
            id : 6,
            name : "CAD/CAM/FEA/CFD",
            img : "https://img.freepik.com/premium-photo/background-industrial-design-cad-interface-computer-screen-displaying-3d-model-mechanical-part_1162141-62199.jpg?semt=ais_hybrid&w=740&q=80",
            path : '/cadcam',
            content : "CAD, CAM, FEA, and CFD are essential pillars of modern mechanical engineering, transforming how products are designed, analyzed, and manufactured. They turn digital precision into physical perfection, allowing engineers to simulate and optimize products before producing a single physical prototype.",
            duration : "60Hrs",
            fee : 13000
        },

        /*
        {
            id : 7,
            name : "Angular",
            img : "https://stream-blog-v2.imgix.net/blog/wp-content/uploads/f9547f9b9ba2dfa409118a00d2b7691d/Angular.png?auto=format&auto=compress",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
            duration : "60Hrs",
            fee : 15000
        },
        {
            id : 8,
            name : "React",
            img : "https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
            duration : "50Hrs",
            fee : 18000
        },
        {
            id : 9,
            name : "Node Js",
            img : "https://miro.medium.com/1*WDX58nzlaiClqTFT59v7RQ.jpeg",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
            duration : "60Hrs",
            fee : 12000
        },
        {
            id : 10,
            name : "Java Script",
            img : "https://img-c.udemycdn.com/course/750x422/3801980_2b83_3.jpg",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
            duration : "70Hrs",
            fee : 20000
        },
        {
            id : 11,
            name : "Python",
            img : "https://i.ytimg.com/vi/F146XXOGOOE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBBpwIee0wXfas14REwdByFyweG5w",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
            duration : "60Hrs",
            fee : 22000
        },
        {
            id : 12,
            name : "Data Science",
            img : "https://media.licdn.com/dms/image/v2/D5605AQFfKgDrvd6kKQ/videocover-low/B56ZdjqfGnG0B0-/0/1749723848877?e=2147483647&v=beta&t=zYSrYWgYBoisu88KqRnOsHO6hi_97o0yVUMItwClHK0",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
            duration : "60Hrs",
            fee : 13000
        },*/

    ]


    return(
        <>
            {/* Courses Start */}
            <div className="container bg-secondary"  id="course">
                <h2 className="text-center bg-secondary text-white mt-2">Courses Details</h2>
                <div className="row">
                
                {/* to get a loop, here we are writing map method for the courses in the below way. we can write abc or any other nap in map to get the data into it*. for uniqueness we need to mention the key which is unique id that is id..can also index by giving index option in map beside abc/name and it starts with 0, we can add index+1 while giving then it will starts from 1*/}

                {
                    courses.map((abc,index)=>{
                        /*courses{
                            id : 1,
                            name : "ThermoDynamic",
                            img : "https://study.madeeasy.in/wp-content/uploads/2025/08/what-is-thermodynamics.jpg",
                            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
                            duration : "60Hrs",
                            fee : 15000
                        } */

                        return(
                            <div className="col-md-4 col-sm-12 col-12 mb-2" key={abc.id}>
                                <div className="card">
                                    <img src={abc.img} alt="" />
                                    <div className="card-body">
                                        <h3 className="card-title">{index+1} {abc.name}</h3>
                                        <p>{abc.content}</p>
                                        <button className="btn btn-primary m-1"><i className="fa-regular fa-clock"></i> : {abc.duration}</button>
                                        <button className="btn btn-success m-1"><i className="fa-solid fa-indian-rupee-sign"></i> : {abc.fee}/- </button>
                                        <button className="btn btn-info m-1" onClick={()=>ReadMore(abc.path)}>Read More</button>
                                    </div> 
                                </div>
                            </div>
                        )
                    })
                }

                {/* this box i tried for when the card is hover text has to reflect
                    <div className="hov-container">
                        <div className="card">
                            <h3>React JS</h3>
                        </div>
                        <div className="overlay">
                            <p>Welcome to the course</p>
                        </div>
                    </div> */}
                  

                  {/*  <div className="col-md-4 col-sm-12 col-12 mb-2">
                        <div className="card">
                            <img src="https://www.discoverengineering.org/wp-content/uploads/2023/12/mj_11466_3-800x450.jpg" alt="" />
                            <div className="card-body">
                                <h3 className="card-title">Fluid Mechanics</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.</p>
                                <button className="btn btn-primary m-1"><i className="fa-regular fa-clock"></i> : 50Hrs</button>
                                <button className="btn btn-success m-1"><i className="fa-solid fa-indian-rupee-sign"></i> : 18,000/- </button>
                                <button className="btn btn-info m-1">Read More</button>
                            </div> 
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 col-12 mb-2">
                        <div className="card">
                            <img src="https://media.istockphoto.com/id/1135159626/photo/female-mechanical-engineer-designs-3d-engine-on-her-personal-computer-while-male-automation.jpg?s=612x612&w=0&k=20&c=U2Eu-LvJ-xunl2VDIBzYlRJDwC1sLA3HgrWG5Oxw_TY=" alt="" />
                            <div className="card-body">
                                <h3 className="card-title">Machine Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cupiditate? Labore soluta, adipisci in repellat nemo quas excepturi eligendi architecto nostrum temporibus, omnis optio? Soluta quos sint repellat veniam. Excepturi.</p>
                                <button className="btn btn-primary m-1"><i className="fa-regular fa-clock"></i> : 60Hrs</button>
                                <button className="btn btn-success m-1"><i className="fa-solid fa-indian-rupee-sign"></i> : 12,000/- </button>
                                <button className="btn btn-info m-1">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 col-12 mb-2">
                        <div className="card">
                            <img src="https://media.gettyimages.com/id/2176081897/photo/woman-engineer-developer-in-robotics-arm-prototype-demonstrating-a-practical-robotics-in.jpg?s=612x612&w=gi&k=20&c=-W25zHTY3B9T-FrB-ilbb-HZUkvx0Xzt0c3DLPGu6Io=" alt="" />
                            <div className="card-body">
                                <h3 className="card-title">Mechatronics & Robotics</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cupiditate? Labore soluta, adipisci in repellat nemo quas excepturi eligendi architecto nostrum temporibus, omnis optio? Soluta quos sint repellat veniam. Excepturi.</p>
                                <button className="btn btn-primary m-1"><i className="fa-regular fa-clock"></i> : 70Hrs</button>
                                <button className="btn btn-success m-1"><i className="fa-solid fa-indian-rupee-sign"></i> : 20,000/- </button>
                                <button className="btn btn-info m-1">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 col-12 mb-2">
                        <div className="card">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/070/575/925/small/electric-car-internal-components-blueprint-visualization-future-automotive-engineering-and-sustainable-technology-design-photo.jpeg" alt="" />
                            <div className="card-body">
                                <h3 className="card-title">Automotive/Hybrid Electric</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cupiditate? Labore soluta, adipisci in repellat nemo quas excepturi eligendi architecto nostrum temporibus, omnis optio? Soluta quos sint repellat veniam. Excepturi.</p>
                                <button className="btn btn-primary m-1"><i className="fa-regular fa-clock"></i> : 60Hrs</button>
                                <button className="btn btn-success m-1"><i className="fa-solid fa-indian-rupee-sign"></i> : 22,000/- </button>
                                <button className="btn btn-info m-1">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 col-12 mb-2">
                        <div className="card">
                            <img src="https://img.freepik.com/premium-photo/background-industrial-design-cad-interface-computer-screen-displaying-3d-model-mechanical-part_1162141-62199.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                            <div className="card-body">
                                <h3 className="card-title">CAD/CAM/FEA/CFD</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cupiditate? Labore soluta, adipisci in repellat nemo quas excepturi eligendi architecto nostrum temporibus, omnis optio? Soluta quos sint repellat veniam. Excepturi.</p>
                                <button className="btn btn-primary m-1"><i className="fa-regular fa-clock"></i> : 60Hrs</button>
                                <button className="btn btn-success m-1"><i className="fa-solid fa-indian-rupee-sign"></i> : 13,000/- </button>
                                <button className="btn btn-info m-1">Read More</button>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-4 col-sm-12 col-12 mb-2">
                            <div className="card">
                                <img src="https://stream-blog-v2.imgix.net/blog/wp-content/uploads/f9547f9b9ba2dfa409118a00d2b7691d/Angular.png?auto=format&auto=compress" alt="" />
                                <div className="card-body">
                                    <h3 className="card-title">Angular</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.</p>
                                    <button className="btn btn-primary m-1"><i className="fa-regular fa-clock"></i> : 60Hrs</button>
                                    <button className="btn btn-success m-1"><i className="fa-solid fa-indian-rupee-sign"></i> : 15,000/- </button>
                                    <button className="btn btn-info m-1">Read More</button>
                                </div> 
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 col-12 mb-2">
                            <div className="card">
                                <img src="https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png" alt="" />
                                <div className="card-body">
                                    <h3 className="card-title">React</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.</p>
                                    <button className="btn btn-primary m-1"><i className="fa-regular fa-clock"></i> : 50Hrs</button>
                                    <button className="btn btn-success m-1"><i className="fa-solid fa-indian-rupee-sign"></i> : 18,000/- </button>
                                    <button className="btn btn-info m-1">Read More</button>
                                </div> 
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 col-12 mb-2">
                            <div className="card">
                                <img src="https://miro.medium.com/1*WDX58nzlaiClqTFT59v7RQ.jpeg" alt="" />
                                <div className="card-body">
                                    <h3 className="card-title">Node JS</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cupiditate? Labore soluta, adipisci in repellat nemo quas excepturi eligendi architecto nostrum temporibus, omnis optio? Soluta quos sint repellat veniam. Excepturi.</p>
                                    <button className="btn btn-primary m-1"><i className="fa-regular fa-clock"></i> : 60Hrs</button>
                                    <button className="btn btn-success m-1"><i className="fa-solid fa-indian-rupee-sign"></i> : 12,000/- </button>
                                    <button className="btn btn-info m-1">Read More</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 col-12 mb-2">
                            <div className="card">
                                <img src="https://img-c.udemycdn.com/course/750x422/3801980_2b83_3.jpg" alt="" />
                                <div className="card-body">
                                    <h3 className="card-title">JavaScript</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cupiditate? Labore soluta, adipisci in repellat nemo quas excepturi eligendi architecto nostrum temporibus, omnis optio? Soluta quos sint repellat veniam. Excepturi.</p>
                                    <button className="btn btn-primary m-1"><i className="fa-regular fa-clock"></i> : 70Hrs</button>
                                    <button className="btn btn-success m-1"><i className="fa-solid fa-indian-rupee-sign"></i> : 20,000/- </button>
                                    <button className="btn btn-info m-1">Read More</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 col-12 mb-2">
                            <div className="card">
                                <img src="https://i.ytimg.com/vi/F146XXOGOOE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBBpwIee0wXfas14REwdByFyweG5w" alt="" />
                                <div className="card-body">
                                    <h3 className="card-title">Python</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cupiditate? Labore soluta, adipisci in repellat nemo quas excepturi eligendi architecto nostrum temporibus, omnis optio? Soluta quos sint repellat veniam. Excepturi.</p>
                                    <button className="btn btn-primary m-1"><i className="fa-regular fa-clock"></i> : 60Hrs</button>
                                    <button className="btn btn-success m-1"><i className="fa-solid fa-indian-rupee-sign"></i> : 22,000/- </button>
                                    <button className="btn btn-info m-1">Read More</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 col-12 mb-2">
                            <div className="card">
                                <img src="https://media.licdn.com/dms/image/v2/D5605AQFfKgDrvd6kKQ/videocover-low/B56ZdjqfGnG0B0-/0/1749723848877?e=2147483647&v=beta&t=zYSrYWgYBoisu88KqRnOsHO6hi_97o0yVUMItwClHK0" alt="" />
                                <div className="card-body">
                                    <h3 className="card-title">Data Science</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cupiditate? Labore soluta, adipisci in repellat nemo quas excepturi eligendi architecto nostrum temporibus, omnis optio? Soluta quos sint repellat veniam. Excepturi.</p>
                                    <button className="btn btn-primary m-1"><i className="fa-regular fa-clock"></i> : 60Hrs</button>
                                    <button className="btn btn-success m-1"><i className="fa-solid fa-indian-rupee-sign"></i> : 13,000/- </button>
                                    <button className="btn btn-info m-1">Read More</button>
                                </div>
                            </div>
                        </div> */}
                </div>
            </div>
        </>
    )
}

export default Course