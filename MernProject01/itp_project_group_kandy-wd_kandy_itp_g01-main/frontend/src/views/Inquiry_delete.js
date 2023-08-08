import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
//import './Display.css';
import "../stylesheets/Button.css";
import "../stylesheets/footer.css";
import "../stylesheets/navbar.css";
import {toast} from "react-toastify";
import { Container } from 'react-bootstrap'
import Axios from 'axios';

const Inquiry_delete = () => {

  const [data,setData]=useState([]);

  const loadData=async() =>{
    const response=await Axios.get("http://localhost:5000/inquiry/delete/get");
    setData(response.data);
  };

  useEffect(() =>{
    loadData();
  },  []);

  //get total inquiry count 
  const[Tot, setTot] = useState([]);

  const TotalOr = async() => {
      const response = await Axios.get("http://localhost:5000/deleted_inquiry/gettotal",{
         
      });
      setTot(response.data);
  };

  useEffect(() => {
      TotalOr();
  }, [])



    return (
        

        <div style = {{marginTop: "80px" ,fontFamily:"Times New Roman", alignItems:"center",alignContent:"center"}}>

<div className='container'>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link" href="/Report">Stock Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/ExpencesReport">Extra Expences</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/OrderReport">Order Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/Inquiry_Delete">Inquiry Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#">Supplier Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#">Special Package Report</a>
                    </li>
                </ul>
            </div><br/>
          
        <div className="title">Replied Inquiry Report</div><br/>

        <div>
                <h3>Total Replied Inquiries {Tot.map( (tor) =>{
                    return(<h3><b>{tor.deleted_inquiry}</b></h3>)   
                })}</h3>
            </div><br/>
      
      
        <br/> <br/>
             
         <table className="table">
           <thead className="table-light">
             
           <tr className="table-info" >
                  <th scope="col">Inquiry ID</th>
                  <th  scope="col">Date</th>
                  <th  scope="col">Name</th>
                  <th  scope="col">Email</th>
                  <th  scope="col"> Order ID</th>
                  <th  scope="col">Item Name</th>
                  <th  scope="col">Type of Inquiry</th>
                  <th  scope="col">Inquiry</th>
                  <th  scope="col">Status</th>
                  
              </tr>
            
            </thead>
      
             {data.map((item) =>{
                return (
                  <tbody>
                <tr>
                 
                
                  <td>{item.InquiryID}</td>
                  <td>{item.Date}</td>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.orderID}</td>
                  <td>{item.ItemName}</td>
                  <td style={{width:"8%"}} >{item.TypeOfInquiry}</td>
                  <td style={{width:"18%"}} >{item.Inquiry}</td>
                  <td>{item.Status}</td>
                 
                </tr>
                </tbody>
                );
             })}
            
          </table>

          <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
          
        </div>
    );
};

export default Inquiry_delete;