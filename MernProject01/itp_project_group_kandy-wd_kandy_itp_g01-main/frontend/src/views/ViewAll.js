import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import Axios from 'axios';
import {toast} from "react-toastify";
import '../stylesheets/viewall.css';

const ViewAll = () => {

    const [ViewList, setViewList] = useState([]);

    const {id} = useParams();

    /*useEffect( () => {
        Axios
            .get(`http://localhost:8070/api/viewalldata/${id}`)
            .then( (res) => setState ({...res.data[0]}));
    }, [id]);*/

    const data = async () => {
        const response = await Axios.get(`http://localhost:5000/order/viewalldata/${id}`);
        setViewList(response.data);
    };

    useEffect( () => {
        data();
    }, [id])

    return(
        <div className="container" style = {{marginTop: "60px"}}>
            {ViewList.map((all) => {
                return(
                    <div className="row">
                        <div className= "column">
                            <h5 style={{color: "#3fd2c7", textAlign: "center"}}> <b> Order and Delivery Details </b> </h5><br/>
                            <label>Order ID : {all.OrderId} </label><br/><br/>
                            <label>Order Date Time : {all.OrderDate} </label><br/><br/>
                            <label>Total Amount : {all.Total} </label><br/><br/>
                            <label>Delivery Status : {all.DeliveryStatus} </label><br/><br/>
                            <label>Special note for delivery : {all.SpecialNote} </label><br/><br/>
                        </div>
                        <div className="column" >
                            <h5 style={{color: "#3fd2c7" , textAlign: "center"}}> <b> Reciever's Details </b> </h5><br/>
                            <label>First Name : {all.firstName} </label><br/><br/>
                            <label>Last Name : {all.lastName} </label><br/><br/>
                            <label>Contact Number : {all.phone} </label><br/><br/>
                            <label>Email : {all.email} </label><br/><br/>
                            <label>Optional Email : {all.OptionalEmail} </label><br/><br/>
                            <label>Address : {all.Address} </label><br/><br/>
                            <label>Postal Code : {all.PostalCode} </label><br/><br/>
                            <label>Area : {all.Area} </label><br/><br/>
                        </div>
                        <div className ="column">
                            <h5 style={{color: "#3fd2c7" , textAlign: "center"}}> <b>Payment Dtails </b> </h5><br/>
                            <label>Total Amount : {all.Total} </label><br/><br/>
                            <label>Payment Method : {all.PaymentMethod} </label><br/><br/>
                            <label>Payment Status : {all.BankTransStatus} </label><br/><br/>
                        </div>
                    </div>
                )
            })}<br/><br/>
        </div>
    )
}

export default ViewAll ;