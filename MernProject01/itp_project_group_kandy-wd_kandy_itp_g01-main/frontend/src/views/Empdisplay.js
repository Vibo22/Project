import Axios from "axios"
import React,{useState,useEffect}from "react";
import "../stylesheets/Button.css";
import {Link, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
 


function  Empdisplay(){
     
    const[data,setData]=useState([]);
    const loadData=async()=>{
        const response=await axios.get("http://localhost:5000/employee");
        setData(response.data);
    };

    useEffect(()=> {
        loadData();
    }, []);

    // delete employee account

    const deleteReview = (id)=>{
        if(window.confirm("Are you sure that you wanted to delete your account?")){
        Axios.delete(`http://localhost:5000/delete/emp/${id} `)
        toast.success("Your account deleted succesfully");
        setTimeout(()=>loadData(),500);
    } 
}

    /*useEffect(()=> {
        Axios.get("http://localhost:3002/employee").then((response) => {
            setemployeesList(response.data);
    
        });
    }, []);*/
    


return (
    <div style = {{marginTop:"50px"}}>
      
    <div className="title">Employee List</div>
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
          <th scope="col">Employee Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
   
    </tr>
    </thead>
 
 {data.map((val)=>{
     return(
         <tbody>
         <tr>
            <td> {val.id} </td>
            <td> {val.firstName} </td>
            <td> {val.lastName} </td>
            <td> {val.phone} </td>
            <td> {val.email}</td>
            <td> {val.password} </td>
            <td> 
                <Link to={`/update/Emp/${val.id}`}>
                <button className="btn-update">
                <i class="fa-solid fa-pen-to-square"></i>Edit</button>
                </Link>
                </td> 

            <td>
                <button className="btn-delete"onClick={()=>deleteReview(val.id)}>
                <i class="fa-solid fa-trash-can"></i>Delete
                </button>

                
                </td>
             
           </tr>
           </tbody>
 )})}
      </table>
      <br/> <br/> <br/> <br/> 
      <Link to="/Profile">
      <button  className="btn-send">Go Back</button> 
      </Link>         
                  
      </div> 
     
     )
     }
     
   
     

export default Empdisplay;