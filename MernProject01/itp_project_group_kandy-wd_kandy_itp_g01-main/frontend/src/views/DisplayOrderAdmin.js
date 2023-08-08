import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Axios from 'axios';
import '../stylesheets/Button.css';

const DisplayOrderAdmin = () => {

    const [DeliveryList, setDeliveryList] = useState([]);

    const data = async() => {
        const response = await Axios.get("http://localhost:5000/order/getalldelivery");
        setDeliveryList(response.data);
    };

    useEffect(() => {
        data();
    }, [])

    return(
        <div style = {{marginTop: "60px"}}>
            <div className='container'>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/DisplayOrderAdmin">All Orders</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/DisplayCompleteOrder">Completed Orders</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/DisplayCancelOrder">Canceled Orders</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/DisplayCancelOrder">Processing Orders</a>
                    </li>
                </ul>
            </div><br/>
            <div className = "title">
                <h4>Order List</h4>
            </div><br/><br/>
            <div style = {{marginLeft: "40px", marginRight:"40px"}}>
                <table className="table">
                    <thead className="table-light">
                        <tr className="table-info">
                            <th scope="col">Order ID</th>
                            <th scope="col">Delivery ID</th>
                            <th scope="col">Optional email</th>
                            <th scope="col">Address</th> 
                            <th scope="col">Postal Code</th>
                            <th scope="col">Area</th>
                            <th scope="col">Special Note</th>
                            <th scope="col">Delivery Status</th>
                            <th scope="col">Payment Method</th>
                            <th scope="col">Payment Status</th> 
                        </tr>
                    </thead>
                    {DeliveryList.map( (delnew) => { 
                        return(
                            <tbody>
                                <tr>
                                    <th scope="row">{delnew.OrderId}</th>
                                    <td>{delnew.DeliveryId}</td>
                                    <td>{delnew.OptionalEmail}</td>
                                    <td>{delnew.Address}</td>
                                    <td>{delnew.PostalCode}</td>
                                    <td>{delnew.Area}</td>
                                    <td>{delnew.SpecialNote}</td>
                                    <td>{delnew.DeliveryStatus}</td>
                                    <td>{delnew.PaymentMethod}</td>
                                    <td>{delnew.BankTransStatus}</td>
                                    <td>
                                        <Link to = {`/EditDeliveryAdmin/${delnew.OrderId}`}>
                                        <button className = "btn-update" style = {{padding: "5px 5px"}}><i class="fa-solid fa-pen-to-square"></i></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to = {`/ViewAll/${delnew.OrderId}`}>
                                        <button className="btn-delete"><i class="fa-solid fa-eye"></i></button>
                                        </Link>
                                    </td>
                                </tr>
                                
                            </tbody>
                        )
                    })}
                    
                </table>
            </div>
        </div>
    )
}

export default DisplayOrderAdmin;
