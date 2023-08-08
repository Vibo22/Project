import React,{useState, useEffect} from "react";
import {toast} from "react-toastify";
import Axios from "axios";
import '../stylesheets/enterdelivery.css';
import '../stylesheets/Button.css';
import { Link, useNavigate } from "react-router-dom";

const DeliveryDetails = () => {

    const[OrderId, setOrderId] = useState(0);
    const[FirstName, setFirstName] = useState("");
    const[LastName, setLastName] = useState("");
    const[Email, setEmail] = useState("");
    const[OptionalEmail, setOptionalEmail] = useState("");
    const[MobileNo, setMobileNo] = useState("");
    const[Address, setAddress] = useState("");
    const[PostalCode, setPostalCode] = useState("");
    const[Area, setArea] = useState("");
    const[SpecialNote, setSpecialNote] = useState("");
    const[PaymentMethod, setPaymentMethod] = useState("");


    const submitDeliveryDetails = async(e) => {
        e.preventDefault();

        await Axios.post("http://localhost:5000/order/insert",{
            OrderId : OrderId,
            OptionalEmail : OptionalEmail,
            Address : Address,
            PostalCode : PostalCode,
            Area : Area,
            SpecialNote : SpecialNote,
            PaymentMethod : PaymentMethod,
        })
        .then(() => {
            alert("Save Delivery Details successfully")
            window.location = 'DisplayDelivery'
        });
    }

    /*const history = useNavigate();
    
    const submitDeliveryDetails =async (e) =>{

        //e.preventDefault();
        
        //validation
        if(!OrderId || !Address|| !PostalCode|| !Area|| !PaymentMethod){
      
          // console.log("not inserted");
            alert("Please fill required fields");
        }else{
      
           await Axios.post("http://localhost:5000/api/insert",{
            OrderId : OrderId,
            OptionalEmail : OptionalEmail,
            Address : Address,
            PostalCode : PostalCode,
            Area : Area,
            SpecialNote : SpecialNote,
            PaymentMethod : PaymentMethod,
        })
            .then(() =>{
            alert("successfully inserted");
            history("/DisplayDelivery");
            });
      
          }
      
      };
      */

   /* const submitDeliveryDetails = () => {

        Axios.post("http://localhost:5000/order/insert", {
            OrderId : OrderId,
            OptionalEmail : OptionalEmail,
            Address : Address,
            PostalCode : PostalCode,
            Area : Area,
            SpecialNote : SpecialNote,
            PaymentMethod : PaymentMethod,
        }).then( () => {
            alert("successful insert");
        });
    };*/

    const[OrderList, setOrderList] = useState([]);

    //get last record of the order table
    const data = async() => {
        const response = await Axios.get("http://localhost:5000/order/getorderid");
        setOrderList(response.data);
    };

    useEffect(() => {
        data();
    }, [])

    return(
        <div className="container">
            <div className = "split left">
                {OrderList.map((ol) => {
                    return(
                        <div className ="centered" style = {{textAlign : "left"}}>
                        <div class="p-3 mb-2 bg-light text-dark">
                        <h5 className = "title" style = {{textAlign : "center"}}>Order Details</h5><br/>
                        <label className="fw-bolder">Order ID : {ol.OrderId}</label><br/><br/>
                        <label className="fw-bolder">Total Amount : {ol.Total}</label><br/><br/>
                        <label className="fw-bolder">Order Date and Time : {ol.OrderDate}</label></div><br/><br/>

                        <div className = "p-3 mb-2 bg-light text-dark">
                        <h5 className = "title" style = {{textAlign : "center"}} >Recipient Details</h5><br/>
                        <label className="fw-bolder">First Name : {ol.firstName}</label><br/><br/>
                        <label className="fw-bolder">Last Name : {ol.lastName}</label><br/><br/>
                        <label className="fw-bolder">Contact Number : {ol.phone}</label><br/><br/>
                        <label className="fw-bolder">Email : {ol.email}</label></div><br/>
                </div>
                    )
                })}
                
            </div>
            <div className ="split right">
                <div className ="centered">
                <h5 className = "title">Delivery Details</h5><br/>
                <form
                    className="border border-light rounded borderstyles"
                    onSubmit={submitDeliveryDetails}
                    method="POST" 
                    encType="multipart/form-data"
                    style = {{
                        margin:"auto",
                        padding: "35px",
                        maxWidth: "400px",
                        alignContent: "center",
                        background: "#99ddff",
                        border: "#99ddff",
                        color: "#00458b"
                }}>

                    <div className="form-group">
                        <label>Order ID</label>
                        <input type="number"
                                id = "OrderId"
                                name="OrderId"
                                value={OrderId}
                                onChange = {(e) => setOrderId(e.target.value)}
                                class = "form-control border border-primary"
                                required/>
                    </div>
                    <div className="form-group">
                        <label>Optional Email</label>
                        <input type="text"
                                id = "OptionalEmail"
                                name="OptionalEmail"
                                value={OptionalEmail}
                                onChange = {(e) => setOptionalEmail(e.target.value)}
                                class = "form-control border border-primary"
                                pattern="[a-z0-9._%+-]+@+[a-z0-9]+\.[a-z0-9]{2,3}" 
                                required/>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text"
                                id = "Address"
                                name="Address"
                                value={Address}
                                onChange = {(e) => setAddress(e.target.value)}
                                class = "form-control border border-primary"
                                required/>
                    </div>
                    <div className="form-group">
                        <label>Area</label>
                        <select
                            className="form-control border border-primary"
                            id = "Area"
                            name="Area"
                            value={Area}
                            onChange = {(e) => setArea(e.target.value)}>
                            <option>select...</option>
                            <option>Kandy</option>
                            <option>Peradeniya</option>
                            <option>Pilimathalawa</option>
                            <option>Kadugannawa</option>
                            <option>Gampola</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Postal Code</label>
                        <input type="text"
                                id = "PostalCode"
                                name="PostalCode"
                                value={PostalCode}
                                onChange = {(e) => setPostalCode(e.target.value)}
                                class = "form-control border border-primary"
                                required/>
                    </div>
                    <div className="form-group">
                        <label>Special Notes</label>
                        <input type="text"
                                id = "SpecialNote"
                                name="SpecialNote"
                                value={SpecialNote}
                                onChange = {(e) => setSpecialNote(e.target.value)}
                                class = "form-control border border-primary"/>
                    </div>
                    <div className="form-group">
                        <label>Payment Method</label><br/> 
                        <div className="form-check form-check-inline">
                            <input type= "radio"
                                    name = "PaymentMethod"
                                    id = "PaymentMethod"
                                    value = "Cash on Delivery"
                                    onChange={(e) => setPaymentMethod(e.target.value)}/>
                            <label 
                                className="form-check-label" 
                                for="Cod"> Cash On Delivery 
                            </label>
                        </div> 
                        <div className="form-check form-check-inline">
                            <input type= "radio"
                                    name = "PaymentMethod"
                                    id = "PaymentMethod"
                                    value = "Bank Transfer"
                                    onChange={(e) => setPaymentMethod(e.target.value)}/>
                            <label 
                                className="form-check-label" 
                                for="Cod"> Direct Bank Transfer
                            </label>
                        </div>    
                    </div>
                    
                    <div id="emailHelp" 
                        class="form-text" 
                        style= {{textAlign : "left"}}>
                        <b>Direct Bank Transfer</b> : Make your Payment directly into our bank account.
                        <a href = "/TermsAndConditions" target="_blank">Click here to view Account details and more</a>
                    </div>
                        
                        
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label class="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div class="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <input type="submit" value = "Next" className="btn btn-primary"/>
                </form>
                
                </div>
            </div>    
        </div>    
    )
}

export default DeliveryDetails;