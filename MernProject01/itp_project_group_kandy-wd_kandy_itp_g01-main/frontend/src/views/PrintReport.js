import Axios from "axios"
import React,{useState,useEffect}from "react";
import {Link, useParams} from "react-router-dom";
import "../stylesheets/Button.css";


function  PrintReport(){

    const[employeesList,setemployeesList]=useState([]);
    useEffect(()=> {
        Axios.get("http://localhost:5000/report").then((response) => {
            setemployeesList(response.data);
    
        });
    }, []);
   
return (
      <div style = {{marginTop:"50px"}}>
      
      <div className="title">Employee List</div>
      <br/> <br/>
      <button  className="btn-send">Print Report</button> 
      <br/> <br/> 
       
    <br/> <br/>
     <table className="table">
     <thead className="table-light">
       <tr className="table-info">
 
         <th scope="col">Month</th>
         <th scope="col">First Name</th>
         <th scope="col">Last Name</th>
         <th scope="col">Dates_worked</th>
   
 </tr>
 </thead>
 
 {employeesList.map((val)=>{
     return(
         <tbody>
         <tr>
            <td> {val.month} </td>
            <td> {val.firstName} </td>
            <td> {val.lastName} </td>
            <td> {val.work} </td>
             
            
           </tr>
           </tbody>
 )})}
      </table>
      
     <br/>




     <Link to="/Empreport">
        <button  className="btn-send">Add</button> 
        </Link>         
                  
                  <Link to="/Profile">
        <button  className="btn-send">Go Back</button> 
        </Link>         
                 
                  
     </div>
      
     
     )}
     
   
export default PrintReport;