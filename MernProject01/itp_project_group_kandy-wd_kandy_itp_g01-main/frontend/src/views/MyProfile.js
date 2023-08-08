import Axios from "axios"
import React,{useState,useEffect}from "react";
import {Link} from "react-router-dom";


function  MyProfile(){
     

    const[customersList,setcustomersList]=useState([]);

    // delete profile 

    const deleteReview = (id)=>{
        if(window.confirm("Are you sure that you wanted to delete your account?")){
        Axios.delete(`http://localhost:5000/delete/${id} `)
        alert("Your account deleted succesfully");
    } 
}   

    // get profile
    useEffect(()=> {
        Axios.get("http://localhost:5000/get").then((response) => {
            setcustomersList(response.data);
    
        });
    }, []);


    return (
        <div style = {{marginTop:"150px"}}>
          
        <h1>My List</h1>
           <table className="table">
              <thead className="thead-dark">
     <tr>
                <th scope="col">Customer Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
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
            <td> 
                <Link to={`/update/${val.id}`}>
                <button className="btn btn-warning">
                Edit
                </button> 
                </Link>

                <button className="btn btn-danger" onClick={()=>deleteReview(val.id)}>
                Delete
                </button>
                </td>

                </tr>
                </tbody>
 )})}
 
      </table> 

      </div>
      
     
      )}
      






    export default MyProfile;