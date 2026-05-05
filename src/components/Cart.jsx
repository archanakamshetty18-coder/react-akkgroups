import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Cart(){
    let [products,setProducts]=useState([
        {
            id:1001,
            name:"Dell",
            img:"lap1.jpg",
            price:15000,
            qty:1
        },
        {
            id:1002,
            name:"HP",
            img:"lap2.jpg",
            price:18000,
            qty:1
        },
        {
            id:1003,
            name:"Lenovo",
            img:"lap3.jpg",
            price:16000,
            qty:1
        },
        {
            id:1004,
            name:"Acer",
            img:"lap4.webp",
            price:12000,
            qty:1
        },
        {
            id:1005,
            name:"Apple",
            img:"lap5.jpg",
            price:20000,
            qty:1
        }
    ])

    let inc=(productId)=>{
        let item = products.map(product=>{
            if(product.id === productId){
                return{
                    ...product,
                    qty:product.qty+1
                }
            }
            return product
        })
        setProducts([
            ...item
        ])

    }

    let dec=(productId)=>{
        let item = products.map(product=>{
            if(product.id===productId){
                return{
                    ...product,
                    qty:product.qty-1 > 0 ? product.qty-1 : 1
                }
            }
            return product
        })
        setProducts([
            ...item
        ])

    }

    let del=(productId)=>{
        let filterlap = products.filter((x)=>{
            return x.id !== productId
        })
        setProducts([
            ...filterlap
        ])
    }

    function totalPrice(){
        let total=0
        for(let product of products){
            total += product.price * product.qty
        }
        return total
    }
    
    return(
        <>
            <Header />
                <div className="container my-3">
                    <div className="table-responsive">
                        <table className="table table-bordered table-light table-hover table-striped text-center">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    products.map((laptops,index)=>{
                                        return(
                                            <tr key={laptops.id}>
                                                <td>{index+1}</td>
                                                <td>{laptops.name}</td>
                                                <td><img src={"assets/images/"+laptops.img} alt="" style={{width:"50px",height:"50px"}}/></td>
                                                <td>{laptops.price}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={()=>dec(laptops.id)}>-</button>
                                                    {laptops.qty}
                                                    <button className="btn btn-success" onClick={()=>inc(laptops.id)}>+</button>
                                                </td>
                                                <td>{laptops.price*laptops.qty}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={()=>del(laptops.id)}> Remove </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td colSpan={5}>Total Price</td>
                                    <td>{totalPrice()}</td>
                                    <td><Link className="btn btn-warning" to='/payment'>Check Out</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Cart