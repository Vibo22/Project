import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import { Container } from 'react-bootstrap'
import axios from 'axios';
import "../stylesheets/Button.css";

const DisplayAdmin = () => {

    const [ProductList, setProductList] = useState([]);
    //search
    const [filteredData, setFilteredData] = useState([]);

    
    //read stock Product list
    const data = async () => {
      const response = await axios.get("http://localhost:5000/stock/get");
      setProductList(response.data);
    };  

    useEffect(() => {
      data();
  }, [])

    //delete
    const deleteProduct = (id) => {
      if(window.confirm("The record will delete permenantly")
      ){
        axios.delete(`http://localhost:5000/stock/delete/${id}`);
        axios.post(`http://localhost:5000/stock_deleted/insert/${id}`);
        //toast.success("Product Deleted Successfully");
        setTimeout(() => data(), 500);
      }
    };

    const dailySalesInsert = (id) => {
      axios.post(`http://localhost:5000/dailysales/insert/${id}`);
    }
    
    
    




    return (
        <div style = {{marginTop: "80px"}}>

        <Container>
          <div className="form-inline">
    
            <input 
                className="form-control mr-sm-2 border border-primary" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
              />
              <button className='btnsearch'><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
    
            <div align = "right">
            <Link to = "/addProduct">
                <button className='btn btn-contact btn btn-info' > Add Products </button>
            </Link>
            </div>

            <h1> Product List</h1>
            <table className="table">
              <thead className="table-light">
              <tr className = "table-info">
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Status</th>
              </tr>
              </thead>
              {ProductList.map((pro) =>{
                return(
                  <tbody>
                  <tr key = {pro.PID}>
                    <td>{pro.PID}</td>
                    <td align = "left">{pro.ProductName}</td>
                    <td>{pro.Category}</td>
                    <td>{parseFloat(pro.Price).toFixed(2)}</td>
                    <td>{pro.Quantity}</td>
                    <td>{pro.Status}</td>
                    <td>

                      <Link to = {`/update/${pro.PID}`}>
                            <button className="btn btn-update">
                                <i className="fas fa-edit"></i>&nbsp;Edit
                            </button>
                      </Link>
                        
                      &nbsp;
                      <button className="btn btn-delete" onClick = {() => deleteProduct(pro.PID)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </button>
                    </td>
                    <td>
                      <Link to = {`/DailySale/${pro.PID}`}>
                            <button className="btn btn-submit" onClick={() => dailySalesInsert(pro.PID)}>
                              <i class="fa-solid fa-plus"></i>
                            </button>
                      </Link>
                    </td>
                  </tr>
              </tbody>)
              })}
            </table>
          </Container>
        </div>
    )
}

export default DisplayAdmin;