import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import { Container } from 'react-bootstrap'
import axios from 'axios';
import "../stylesheets/Button.css";

const  DisplayExpences = () => {

    const [Expences, setExpences] = useState([]);
    

    
    //read stock Product list
    const data = async () => {
      const response = await axios.get("http://localhost:5000/extra_expences/get");
      setExpences(response.data);
    };  

    useEffect(() => {
      data();
  }, [])

    //delete
    const deleteExpences = (id) => {
      if(window.confirm("The record will delete permenantly")
      ){
        axios.delete(`http://localhost:5000/extra_expences/delete/${id}`);
        
        //toast.success("Product Deleted Successfully");
        setTimeout(() => data(), 500);
      }
    };


    return (
        <div style = {{marginTop: "80px"}}>

        <Container>

            <h1> Extra Expences</h1>
            <table className="table">
              <thead className="table-light">
              <tr className = "table-info">
                <th scope="col">ID</th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>
              </tr>
              </thead>
              {Expences.map((ex) =>{
                return(
                  <tbody>
                  <tr key = {ex.ExID}>
                    <td>{ex.ExID}</td>
                    <td>{ex.EDate}</td>
                    <td>{ex.ECategory}</td>
                    <td>{ex.EAmount}/=</td>
                    <td>

                      <Link to = {`/EditExpences/${ex.ExID}`}>
                            <button className="btn-update">
                                <i className="fas fa-edit"></i>&nbsp;Edit
                            </button>
                      </Link>
                        
                      &nbsp;
                      <button className="btn-delete" onClick = {() => deleteExpences(ex.ExID)}>
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

export default DisplayExpences;