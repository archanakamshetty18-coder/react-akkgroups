import Footer from "./Footer"
import Header from "./Header"

const Table=()=>{
    let courses = [
        {
            id : 1,
            name : "ThermoDynamic",
            img : "https://study.madeeasy.in/wp-content/uploads/2025/08/what-is-thermodynamics.jpg",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
            duration : "60Hrs",
            fee : 15000
        },
        {
            id : 2,
            name : "Fluid Mechanics",
            img : "https://www.discoverengineering.org/wp-content/uploads/2023/12/mj_11466_3-800x450.jpg",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
            duration : "50Hrs",
            fee : 18000
        },
        {
            id : 3,
            name : "Machine Design",
            img : "https://media.istockphoto.com/id/1135159626/photo/female-mechanical-engineer-designs-3d-engine-on-her-personal-computer-while-male-automation.jpg?s=612x612&w=0&k=20&c=U2Eu-LvJ-xunl2VDIBzYlRJDwC1sLA3HgrWG5Oxw_TY=",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
            duration : "60Hrs",
            fee : 12000
        },
        {
            id : 4,
            name : "Mechatronics & Robotic",
            img : "https://media.gettyimages.com/id/2176081897/photo/woman-engineer-developer-in-robotics-arm-prototype-demonstrating-a-practical-robotics-in.jpg?s=612x612&w=gi&k=20&c=-W25zHTY3B9T-FrB-ilbb-HZUkvx0Xzt0c3DLPGu6Io=",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
            duration : "70Hrs",
            fee : 20000
        },
        {
            id : 5,
            name : "Automotive/Hybrid Electric",
            img : "https://static.vecteezy.com/system/resources/thumbnails/070/575/925/small/electric-car-internal-components-blueprint-visualization-future-automotive-engineering-and-sustainable-technology-design-photo.jpeg",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
            duration : "60Hrs",
            fee : 22000
        },
        {
            id : 6,
            name : "CAD/CAM/FEA/CFD",
            img : "https://img.freepik.com/premium-photo/background-industrial-design-cad-interface-computer-screen-displaying-3d-model-mechanical-part_1162141-62199.jpg?semt=ais_hybrid&w=740&q=80",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore at suscipit iste architecto tenetur exercitationem cumque, quas omnis praesentium, harum tempore, minus quis eos aperiam esse in libero unde.",
            duration : "60Hrs",
            fee : 13000
        },
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
        },

    ]

    return(
        <>
            <div className="container">
                <Header />
                <table className="table table-bordered table-secondary table-striped text-center my-4">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Content</th>
                            <th>Duration</th>
                            <th>Fee</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((forma,index)=>{
                            return(
                                <tr key={forma.id}>
                                    <td>{index+1}</td>
                                    <td>{forma.name}</td>
                                    <td>
                                        <img src={forma.img} alt="" width={"100%"} height={"50px"} />
                                    </td>
                                    <td>{forma.content}</td>
                                    <td>{forma.duration}</td>
                                    <td>{forma.fee}</td>
                                    <td>
                                        <button className="btn btn-primary">Read More</button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>

                <Footer />
            </div>

            
        </>
    )
}

export default Table