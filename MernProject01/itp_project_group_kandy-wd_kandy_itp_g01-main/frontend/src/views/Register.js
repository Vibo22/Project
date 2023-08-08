//import React, { Component } from "react";
import Axios from "axios"
import { toast } from "react-toastify";
import React,{useState}from "react";
import {Link} from "react-router-dom";
import "../stylesheets/Button.css";


function  Register(){

  const[firstName, setfirstName]=useState("");
  const[lastName, setlastName]=useState("");
  const[phone, setphone]=useState("");
  const[email, setemail]=useState("");
  const[password, setpassword]=useState("");
   

// insert Employee details 

  const  submit=() => {
    if (!firstName || !lastName || !phone || !email || !password ){
      toast.error("Please fill value into each field");
    }else{
      Axios.post("http://localhost:5000/add",{firstName:firstName,lastName:lastName,phone:phone,
      email :email,password:password
  })
    
}
}
   return (
     
    <div style = {{

      marginTop: "8px",
      
      background: "#3fd2c7"
      
      }}>
              
              <br/> <br/> <br/>
              <div className="title"> Registation Form </div>
              <br/> <br/>
               
               <form className="border border-light rounded borderstyles"
               style = {{
      
                margin:"auto",
      
                padding: "35px",
      
                maxWidth: "400px",
      
                alignContent: "center",
      
                background: "#99ddff",
      
                border: "#99ddff",
      
                color: "#00458b"
      
            }}>
    
            <div className="form-group">
            <label>First Name </label> 
            <br/>
            <input type= "text" className="form-control border border-primary" placeholder="first name..."
            name="firstName" onChange={(e)=>{
            setfirstName(e.target.value) ;

      }}  
          />
        </div>

             <div className="form-group">
             <label>Last Name</label>
             <br/>
             <input type= "text" className="form-control border border-primary" placeholder="last name...."
             name="lastName"  onChange={(e)=>{
             setlastName(e.target.value);
         }}  
        />
       </div>

             <div className="form-group">
             <label>Phone No</label>
             <br/>
             <input type= "text" className="form-control border border-primary" placeholder="phone no...."
             name="phone" onChange={(e)=>{
             setphone(e.target.value);

      }} 
      /> 
      </div>
        
 
             <div className="form-group">
             <label>Email</label>
             <br/>
             <input type= "text" className="form-control border border-primary" placeholder="email address...." 
             name="email" onChange={(e)=>{
             setemail(e.target.value);

      }}
        /> 
        </div>

             <div className="form-group">
             <label className="mb-2">Password</label>
             <br/>
             <input type= "password" className="form-control border border-primary" placeholder="password...." 
             name="password" onChange={(e)=>{
                   setpassword(e.target.value);

        }}
             />      
            </div>
                  
         
       
                <Link to="/Empdisplay">
                <button onClick={submit} className="btn btn-primary">Register</button><br/><br/>
                </Link>

                <Link to="/Profile">
                <button  className="btn-send">Go Back</button> 
                </Link>         
                  
     
                   

                  </form>
 
 </div>
   
   
  

)
}
 
 

 
 
  

  
export default Register;