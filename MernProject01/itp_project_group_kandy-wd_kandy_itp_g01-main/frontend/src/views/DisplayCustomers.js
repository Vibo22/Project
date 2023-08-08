import Axios from "axios"
import React,{useState,useEffect}from "react";
import {Link, useParams} from "react-router-dom";
import "../stylesheets/Button.css";

function  DisplayCustomers(){
    const[customersList,setcustomersList]=useState([]);

    // delete customer

    const deleteReview = (id)=>{
        if(window.confirm("Are you sure that you wanted to delete your account?")){
        Axios.delete(`http://localhost:5000/delete/${id} `)
        alert("Your account deleted succesfully");
    } 
}   

  // get customer 

   useEffect(()=> {
       Axios.get("http://localhost:5000/get").then((response) => {
        setcustomersList(response.data);

    });
}, []);

return (
      <div style = {{marginTop:"50px"}}>
      
      <div className="title">Customer List</div>
      <br/> <br/> 
      <div class="search-container">

      <form className="search" >
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
      </div>
      <br/> <br/>

      <table className="table">
      <thead className="table-light">
      <tr className="table-info">
 
          <th scope="col">Customer Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Confirm Password</th>
   
       </tr>
       </thead>
 
   {customersList.map((val)=>{
        return( 

         <tbody>
         <tr>
             
            <td> {val.id} </td>
            <td> {val.firstName} </td>
            <td> {val.lastName} </td>
            <td> {val.phone} </td>
            <td> {val.email}</td>
            <td> {val.password} </td>
            <td> {val.confirmpassword} </td>
            <td> 
                <Link to={`/update/${val.id}`}>
                <button className="btn-update">
                <i class="fa-solid fa-pen-to-square"></i>Edit</button> 
                </Link>

                <button className="btn-delete" onClick={()=>deleteReview(val.id)}>
                <i class="fa-solid fa-trash-can"></i>Delete
                </button>

                <Link to={`/view/${val.id}`}>
                <button className="btn-update">
                 View</button> 
                </Link>

           </td>
           </tr>
           </tbody>
 )})}

      </table>
      <br/>
                  <p className="pd">
                   I'm an admin?
                  <a href="/AdminLogin">Login</a>
                  </p>

                  <Link to="/Profile">
                  <button  className="btn-send">Go Back</button> 
                  </Link>         
                 
                  
     </div>
      
     
     )}
     
   
     

export default DisplayCustomers;