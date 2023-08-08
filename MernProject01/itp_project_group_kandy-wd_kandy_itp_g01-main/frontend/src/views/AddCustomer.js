import React,{useState}from "react";
import Axios from "axios";
import {Link} from "react-router-dom";
import "../stylesheets/Button.css";


function  AddCustomer(){

  const[firstName, setfirstName]=useState("");
  const[lastName, setlastName]=useState("");
  const[phone, setphone]=useState("");
  const[email, setemail]=useState("");
  const[password, setpassword]=useState("");
  const[confirmpassword, setconfirmpassword]=useState("");
   


  // insert Customer details 
   
  const  submitReview=() => {
    if (!firstName || !lastName || !phone || !email || !password ||!confirmpassword ){
      alert("Please fill value into each field");
    }else{
      Axios.post("http://localhost:5000/insert",{firstName:firstName,lastName:lastName,phone:phone,
      email :email,password:password,confirmpassword:confirmpassword
  })

  alert("Your Account craeted successfully");}
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
       <input type= "text" className="form-control border border-primary" placeholder="Your first name..."
        name="firstName" onChange={(e)=>{
          setfirstName(e.target.value) ;

        }}  
        />
          
        </div>

        <div className="form-group">
        <label>Last Name</label>
        <br/>
        <input type= "text" className="form-control border border-primary"  placeholder="Your last name...."
        name="lastName"  onChange={(e)=>{
             setlastName(e.target.value);
            
        }}  
        />
            
        </div>

        <div className="form-group">
        <label>Phone No</label>
        <br/>
        <input type= "text" className="form-control border border-primary" placeholder="Your phone no...."  
        name="phone" onChange={(e)=>{
          setphone(e.target.value);

        }} 
        />  

        </div>
        
        <div className="form-group">
        <label>Email</label>
        <br/>
        <input type= "text" className="form-control border border-primary" placeholder="Your email...." 
        name="email" onChange={(e)=>{
          setemail(e.target.value);

        }}
        /> 

        </div>

        <div className="form-group">
                    <label className="mb-2">Password</label>
                    <br/>
                    <input type= "password" 
                    className="form-control border border-primary"   placeholder="Your password...."
                    name="password"
                    onChange={(e)=>{
                   setpassword(e.target.value);

        }}
        /> 

       </div>

        <div className="form-group">
                    <label className="mb-2">Confirm Password</label>
                    <br/>
                    <input type= "password" 
                    className="form-control border border-primary"   placeholder="Your confirm password...."
                    name="password"
                    onChange={(e)=>{
                  setconfirmpassword(e.target.value);

        }}/>    
                </div>
                         
         
                  
        <Link to="/DisplayCustomers">             
        <button onClick={submitReview} className="btn btn-primary">Register</button> <br/>  <br/>
        </Link>
        <p className="pd">
                    Already have an account?
                    <a href="/Login">Login</a>
                    </p>


 </form>
 
 </div>
   
  

)
}

export default AddCustomer;
 

 
 
  