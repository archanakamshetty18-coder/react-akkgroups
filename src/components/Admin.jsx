//here i am using local and global components. wherein if we use local variable it we can use inside the function if we use global we can use in entire program
//either it may be local or global we can add string, images and soon by binding.
// we can add it directly as string or through let, var, const components
//if we would like to do any full or hald data dynamically we use intrapolation as well as we use intrapolation to do attribute(class,alt,src any value it may be) value dyanamically

//global
let name="AKK Groups"


function Admin(){

    {/*local variables for single values*/}
    let fact = "AKK"
    let img = "html.jpg"
    let img1 = "./assets/images/angular.webp"

    {/*local variables for arrays*/}
    let arr=["AKKGroups","html.jpg","./assets/images/angular.webp"]


    return(
        <>
            {/* It is only for admin/owner to change the website details, these we will not give in nav bar or any other places just we will do router and import there */}
            <h1>Welcome to Admin Components of {name} actually we call {fact}</h1>      {/*like this we can use*/}

            <img src={"./assets/images/"+img} alt="" />
            <h1>Helloooooooooooooo</h1>
            <img src={img1} alt="" />

            <h4>Array Values</h4>
            <h4>{arr[0]}</h4>
            <img src={"./assets/images/"+arr[1]} alt="" />
            <img src={arr[2]} alt="" />
        </>
    )
}

export default Admin