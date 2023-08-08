import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import "../stylesheets/OrderHistory.css";
import { Button } from "react-bootstrap";

const OrderHistory = () => {
    const [his, setHis] = useState([]);
    //const [Product, setProduct] = useState({});

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/orderHis/get");
        setHis(response.data);
    };

    useEffect(()=> {
        loadData();
    }, []);

  

    const history = useNavigate();
    
    //add to shopping cart
    /*
    const addCart = (id) => {
    
          axios.post(`http://localhost:5000/cart/insert/${id}`);
        history('/Scart');
      };*/

    return (
        <div style={{marginTop: "50px"}}>
             <h1 style={{ color: "#00458b" }}>Order History</h1>
             <br></br>
            <table className="orderHis">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>Name</th>
                        <th style={{textAlign: "center"}}>Order ID</th>
                        <th style={{textAlign: "center"}}>Date</th>
                        <th style={{textAlign: "center"}}>Subtotal</th>
                        <th style={{textAlign: "center"}}>Inquiry</th>
                    </tr>
                </thead>
                <tbody>
                    {his.map((history) => {
                        return (
                            <tr >
                                <td>{history.firstName}</td> 
                                <td>{history.OrderId}</td>
                                <td>{history.OrderDate}</td>
                                <td>{history.Total}</td>
                                <td>
                                <Link to = {`/addInquiry/${history.OrderId}`}>
                                    <button  className = "btn btn-primary">Inquiry</button>
                                </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    );
};

export default OrderHistory;