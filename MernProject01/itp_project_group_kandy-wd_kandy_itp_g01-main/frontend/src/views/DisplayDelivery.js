import React,{useState, useEffect} from "react";
import {toast} from "react-toastify";
import Axios from "axios";
import '../stylesheets/enterdelivery.css';
import '../stylesheets/Button.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DisplayDelivery = () => {

    

    const [DeliveryDetailList, setDeliveryDetailList] = useState([]);

    const data = async() => {
        const response = await Axios.get("http://localhost:5000/order/getdeliverydetails");
        setDeliveryDetailList(response.data);
    };

    useEffect(() => {
        data();
    }, [])

    const deleteOrder = (id) => {
        if(window.confirm("Are you sure you want to cancel the order?")
        ){
            Axios.delete(`http://localhost:5000/order/delete/${id}`);
            toast.success("Order deleted");
            setTimeout(() => data(), 500);
        }

    };

    const confirmOrder = () => {
        if(window.confirm("Are you sure you want to confirm the order?")
        ){
            Axios.delete(`http://localhost:5000/scart/delete`)
            
            alert("Your Order has been placed successfully");
            
            
        }
    };

    return(
        <div style = {{marginTop: "60px"}}>
            
            {DeliveryDetailList.map( (del) => {
                return(
                    <div>
                        <div className ="myDiv"><br/>
                            <h5 style = {{textAlign: "center", color : "#00458b"}}>Order and Delivery Details</h5><br/>
                            <label className="fw-bolder">Order ID : {del.OrderId}</label><br/><br/>
                            <label className="fw-bolder">Order Date and Time : {del.OrderDate}</label><br/><br/>
                            <label className="fw-bolder">Total Amount : {del.Total}</label><br/><br/>
                            <label className="fw-bolder">Payment Method : {del.PaymentMethod}</label><br/><br/>
                            <label className="fw-bolder">Payment Status : {del.BankTransStatus}</label><br/><br/>
                            <label className="fw-bolder">Delivery Status : {del.DeliveryStatus} </label><br/><br/>
                            <label className="fw-bolder">Special note for delivery : {del.SpecialNote} </label><br/><br/>
                        </div> <br/><br/>
                        <div className ="myDiv"><br/>
                            <h5 style = {{textAlign: "center", color : "#00458b"}}>Reciever's Details</h5>
                            <label className="fw-bolder">First Name : {del.firstName} </label><br/><br/>
                            <label className="fw-bolder">Last Name : {del.lastName} </label><br/><br/>
                            <label className="fw-bolder">Contact Number : {del.phone} </label><br/><br/>
                            <label className="fw-bolder">Email : {del.email} </label><br/><br/>
                            <label className="fw-bolder">Optional Email : {del.OptionalEmail} </label><br/><br/>
                            <label className="fw-bolder">Address : {del.Address} </label><br/><br/>
                            <label className="fw-bolder">Postal Code : {del.PostalCode} </label><br/><br/>
                            <label className="fw-bolder">Area : {del.Area} </label><br/><br/>
                        </div><br/><br/>
                        <div>
                            <Link to = "/DisplayCustomer">
                            <button className = "btn-delete" style = {{padding: "14px 40px"}} onClick = {() => deleteOrder(del.OrderId)}>CANCEL ORDER</button> 
                            </Link>

                            &nbsp;&nbsp;&nbsp;&nbsp;
                            
                                <button className = "btn-send" style = {{padding: "14px 40px"}} onClick = {() => confirmOrder()}>CONFIRM ORDER</button>
                            
                        </div><br/><br/>

                    </div>
                    
                )
            })}
        </div>
    )

}

export default DisplayDelivery;