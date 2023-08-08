import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import { Container } from 'react-bootstrap'
import axios from 'axios';
import "../stylesheets/Button.css";

const DisplaySupplier = () => {

  const [SupplierList, setSupplierList] = useState([]);
    
    const data = async () => {
      const response = await axios.get("http://localhost:5000/supplier/get");
      setSupplierList(response.data);
    };

    useEffect(() => {
        data();
    }, [])

    const deleteProduct = (id) => {
      if(window.confirm("The record will delete permenantly")
      ){
        axios.delete(`http://localhost:5000/supplier/delete/${id}`);
        
        setTimeout(() => data(), 500);
      }
    };

    return (
      
        <div style={{marginTop:"80px"}}>

            <Container>
              
                
              
            <h2> <u> <center> SUPPLIER DETAILS </center> </u></h2><br></br>


            <table className='table'>
              <thead className="table-light">
              <tr className='table-info'> 
                <th scope='col'>Supplier ID</th>
                <th scope='col'>Supplier name</th>
                <th scope="col">Company name</th>
                <th scope="col">Item name</th>
                <th scope="col">Number of items</th>
                <th scope="col">Email</th>
                <th scope="col">Contact number</th>
              </tr>
              </thead>
              
              {SupplierList.map((sup) =>{

                return(

                <tbody>

                <tr>

                    <td>{sup.SupplierID}</td>

                    <td>{sup.SupplierName}</td>

                    <td>{sup.CompanyName}</td>

                    <td>{sup.ItemName}</td>

                    <td>{sup.NumberOfItem }</td>

                    <td>{sup.Email}</td>

                    <td>{sup.ContactNumber}</td>

                    <td>  
                    
            <Link to = {`/updates/${sup.SupplierID}`}>
                <button className="btn btn-update">
                    <i className="fas fa-edit"></i>&nbsp;Edit
                    </button>
                        </Link>
                        &nbsp;
                        <button className="btn btn-delete" onClick = {() => deleteProduct(sup.SupplierID)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                            </button>
                                </td>
                                </tr>
                                </tbody>)
                                })}


                    
                  
               
              
            </table>
          </Container>
        </div>
    )
}

export default DisplaySupplier;