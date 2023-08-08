import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import Axios from 'axios';
import '../stylesheets/Button.css';

const EditDeliveryAdmin = () => {

    const initialState = {
        OrderId: "",
        DeliveryId: "",
        OptionalEmail: "",
        Address: "",
        PostalCode: "",
        Area: "",
        SpecialNote: "",
        DeliveryStatus: "",
        PaymentMethod: "",
        BankTransStatus: "",
    }

    const [state, setState] = useState(initialState);

    const {OrderId, DeliveryId, OptionalEmail, Address, PostalCode, Area, SpecialNote, DeliveryStatus, PaymentMethod, BankTransStatus } = state;

    const history = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value});
    }

    //update
    const {id} = useParams();

    useEffect( () => {
        Axios
            .get(`http://localhost:5000/order/getdata/${id}`)
            .then( (res) => setState ({...res.data[0]}));
    }, [id]);

    const UpdateData = async (e) => {
        e.preventDefault();

        const data = {
            OrderId : OrderId,
            DeliveryId : DeliveryId,
            OptionalEmail : OptionalEmail,
            Address : Address,
            PostalCode : PostalCode,
            Area : Area,
            SpecialNote : SpecialNote,
            DeliveryStatus : DeliveryStatus,
            PaymentMethod : PaymentMethod,
            BankTransStatus : BankTransStatus,
        }

        await Axios.put(`http://localhost:5000/order/update/${id}`, data)
        
        alert("Successfully Updated");
        history("/DisplayOrderAdmin");
    }


    return(
        <div style = {{marginTop: "70px"}}>
            <container>
                <div className="title"><h3>Edit Details</h3></div><br/>
                <form className="border border-light rounded borderstyles"
                onSubmit={UpdateData}
                style = {{
                margin:"auto",
                padding: "15px",
                maxWidth: "500px",
                alignContent: "center",
                border: "#99ddff",
                background: "#99ddff",
                color: "#00458b"
            }}>
                <div className="form-group">
                    <label>Order ID</label>
                    <input  type="number" 
                            name="OrderId"  
                            className="form-control border border-primary" 
                            id="orderId"
                            value = {OrderId || ""}
                            onChange = {handleInputChange}
                            readOnly/>
                </div>
                <div className="form-group">
                    <label>Delivery ID</label>
                    <input  type="number" 
                            name="DeliveryId"  
                            className="form-control border border-primary" 
                            id="Delivery"
                            value = {DeliveryId || ""}
                            onChange = {handleInputChange}
                            readOnly/>
                </div>
                <div className="form-group">
                    <label>Optional Email</label>
                    <input  type="text" 
                            name="Email"  
                            className="form-control border border-primary"
                            id="optionalemail"
                            value = {OptionalEmail || ""}
                            onChange = {handleInputChange}
                            readOnly/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input  type="text" 
                            name="Address"  
                            className="form-control border border-primary" 
                            id="address"
                            value = {Address || ""}
                            onChange = {handleInputChange}
                            readOnly/>
                </div>
                <div className="form-group">
                    <label>Postal Code</label>
                    <input  type="text" 
                            name="PostalCode"  
                            className="form-control border border-primary"
                            id="pcode"
                            value = {PostalCode || ""}
                            onChange = {handleInputChange}
                            readOnly/>
                </div>
                <div className="form-group">
                    <label>Area</label>
                    <input  type="text" 
                            name="City"  
                            className="form-control border border-primary" 
                            id="area"
                            value = {Area || ""}
                            onChange = {handleInputChange}
                            readOnly/>
                </div>
                <div className="form-group">
                    <label>Special Note</label>
                    <input  type="text" 
                            name="SpecialNote"  
                            className="form-control border border-primary"
                            id="note"
                            value = {SpecialNote || ""}
                            onChange = {handleInputChange}
                            readOnly/>
                </div>
                <div className="form-group">
                    <label>Delivery Status</label>
                    <select 
                        className="form-control border border-primary" 
                        id="DeliveryStatus" 
                        name = "DeliveryStatus" 
                        value = {DeliveryStatus || ""} 
                        onChange = {handleInputChange}>
                        <option> Select..... </option>
                        <option> Processing </option>
                        <option> Complete </option>
                        <option> Cancel </option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Payment Method</label>
                    <input  type="text" 
                            name="Paymethod"  
                            className="form-control border border-primary" 
                            id="Paymethod"
                            value = {PaymentMethod || ""}
                            onChange = {handleInputChange}
                            readOnly/>
                </div>
                <div className="form-group">
                    <label>Payment Status</label>
                    <select 
                        className="form-control border border-primary" 
                        id="BankTransStatus" 
                        name = "BankTransStatus" 
                        value = {BankTransStatus || ""} 
                        onChange = {handleInputChange}>
                        <option> Select..... </option>
                        <option> Not Recieved </option>
                        <option> Recieved </option>
                    </select>
                </div>
                <br/>
                <input type = "submit" className="btn btn-primary" value = "Update"/>

                </form>
            </container><br/><br/>

        </div>
    )

}

export default EditDeliveryAdmin ;