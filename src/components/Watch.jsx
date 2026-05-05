import React, {useState} from "react";

let Watch=()=>{

    let [image,setImage] = useState("")

    const xyz=(abc)=>{
        setImage(abc)
    }
    return(
        <>

                        <div className="card mt-3 w-50 mx-auto text-center">
                            <div className="card-header bg-warning">
                                <h3>Watches</h3>
                            </div>
                            <div className="card-body">
                                <h3><img src={image} alt="" width={"200px"} height={"200px"}/></h3>

                                <div className="mt-3">
                                    <button className="btn" onClick={()=>xyz("https://i5.walmartimages.com/seo/Poedagar-Men-Watch-Luxury-Business-Quartz-Watches-Stainless-Stain-Strap-Sport-Chronograph-Men-39-s-Wristwatch-Waterproof-Luminous-Quartz-Wristwatches_7b31bf36-11cf-4c68-8dfd-e630bc9a93f6.284ee349d31df69a9da1c2d294e2aade.jpeg")}>
                                        <img src="https://i5.walmartimages.com/seo/Poedagar-Men-Watch-Luxury-Business-Quartz-Watches-Stainless-Stain-Strap-Sport-Chronograph-Men-39-s-Wristwatch-Waterproof-Luminous-Quartz-Wristwatches_7b31bf36-11cf-4c68-8dfd-e630bc9a93f6.284ee349d31df69a9da1c2d294e2aade.jpeg" alt="" width={"70px"} height={"70px"} />
                                    </button>
                                
                                    <button className="btn" onClick={()=>xyz("https://tyrhino.com/wp-content/uploads/2023/02/Black.jpg")}>
                                        <img src="https://tyrhino.com/wp-content/uploads/2023/02/Black.jpg" alt="" width={"70px"} height={"70px"} />
                                    </button>

                                    <button className="btn" onClick={()=>xyz("https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500")}>
                                        <img src="https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500" alt="" width={"70px"} height={"70px"} />
                                    </button>

                                    <button className="btn" onClick={()=>xyz("https://cdn.shopify.com/s/files/1/0560/1201/3615/files/Smartwatch_ee6a85f1-b7d9-487b-9564-45fbf5c59a0d.png?v=1770111956")}>
                                        <img src="https://cdn.shopify.com/s/files/1/0560/1201/3615/files/Smartwatch_ee6a85f1-b7d9-487b-9564-45fbf5c59a0d.png?v=1770111956" alt="" width={"70px"} height={"70px"} />
                                    </button>

                                    <button className="btn" onClick={()=>xyz("https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwbd8e8365/images/Titan/Catalog/90110WL04_1.jpg?sw=600&sh=600")}>
                                        <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwbd8e8365/images/Titan/Catalog/90110WL04_1.jpg?sw=600&sh=600" alt="" width={"70px"} height={"70px"} />
                                    </button>

                                    <button className="btn" onClick={()=>xyz("https://shop.timexindia.com/cdn/shop/articles/Blog_5_1e7ff35c-2d0e-4f01-b80e-1f4f35d62fda.jpg?v=1717140947")}>
                                        <img src="https://shop.timexindia.com/cdn/shop/articles/Blog_5_1e7ff35c-2d0e-4f01-b80e-1f4f35d62fda.jpg?v=1717140947" alt="" width={"70px"} height={"70px"} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    
                




                
           
        </>
    )
}

export default Watch