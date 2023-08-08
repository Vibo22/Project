import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import "../stylesheets/WishList.css";

const WishList = () => {
    const [data, setData] = useState([]);
    const [Product, setProduct] = useState({});

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/wishlist/get");
        setData(response.data);
    };

    useEffect(()=> {
        loadData();
    }, []);

  

    const history = useNavigate();
    
    //add to shopping cart
    
    const addCart = (id, name) => {
    
          axios.post(`http://localhost:5000/cart/insert/${id}`);
          axios.put(`http://localhost:5000/productQuantity/update/${name}`);
        history('/Scart');
      };

    return (
        <div style={{marginTop: "50px"}}>
             <h1 style={{ color: "#00458b" }}>My Wish List</h1>
             <br></br>
            <table className="cart">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        
                        <th style={{textAlign: "center"}}>Item Name</th>
                        <th style={{textAlign: "center"}}>Price</th>
                        <th style={{textAlign: "center"}}>Add to Shopping Cart</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.WID}>
                                <th scope="row">{index+1}</th>
                            
                                <td>{item.WitemName}</td>
                                <td>{item.WitemPrice}</td>
                                <td>
                                <Link to = "/Scart">
                                <button type="button" class="btn-add" onClick={()=>addCart(item.WID, item.WitemName)} >Add to Cart</button>
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

export default WishList;