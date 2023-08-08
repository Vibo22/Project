import React,{useState, useEffect} from "react";
import {toast} from "react-toastify";
import Axios from "axios";
import '../stylesheets/enterdelivery.css';
import '../stylesheets/Button.css';
import { Link, useNavigate } from "react-router-dom";

const OrderReport = () => {

    //display current year and month
    const monthNames = ["","January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    const current = new Date();
    const StartDate = `01-${monthNames[current.getMonth()+1]}-${current.getFullYear()}`;
    const EndDate = `${current.getDate()}-${monthNames[current.getMonth()+1]}-${current.getFullYear()}`;

    const[ReportDetailsList, setReportDetailsList] = useState([]);

    //order count - order by Delivery status
    const viewOrderReport = async() => {
        const response = await Axios.get("http://localhost:5000/order/getreport",{
           
        });
        setReportDetailsList(response.data);
    };

    useEffect(() => {
        viewOrderReport();
    }, [])

    //get total order count of the current month
    const[TotOrder, setTotOrder] = useState([]);

    const TotalOr = async() => {
        const response = await Axios.get("http://localhost:5000/order/gettotalorcount",{
           
        });
        setTotOrder(response.data);
    };

    useEffect(() => {
        TotalOr();
    }, [])


    return(
        <div style = {{marginTop: "60px"}}>
            <div>
                <h3 className="title">Order Report <br/> {StartDate} to {EndDate}</h3><br/><br/>

                <div className="box">
                    <h3>Total Orders {TotOrder.map( (tor) =>{
                        return(<h3><b>{tor.TotalCount}</b></h3>)   
                    })}</h3>
                </div>
            </div><br/>

            <div className="container" style = {{marginLeft: "150px", marginRight:"150px"}}>

            <table className="table">
                    <thead className="table-light">
                        <tr className="table-info">
                            <th scope="col">Delivery Status</th>
                            <th scope="col">No of orders</th> 
                        </tr>
                    </thead>
                    {ReportDetailsList.map( (rd) => { 
                        return(
                            <tbody>
                                <tr>
                                    <th scope="row">{rd.DeliveryStatus}</th>
                                    <td>{rd.OrStatusCount}</td>
                                </tr>
                                
                            </tbody>
                        )
                    })}
                    
                </table>

            </div><br/><br/>
        </div>
    )

}

export default OrderReport;