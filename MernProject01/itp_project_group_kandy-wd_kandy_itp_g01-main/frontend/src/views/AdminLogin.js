//import React,{useState}from "react";
//import Axios from "axios"
import {useNavigate} from "react-router-dom";
import "../stylesheets/Button.css";

function  AdminLogin(){

    let navigate=useNavigate();

    
return (
    
        <>
        <div style = {{

marginTop: "10px",

background: "#3fd2c7"

}}>
        
        <br/> <br/> <br/>
        <div className="title"> Login Form </div>
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
              <label>Admin Email</label>
              <br/> <br/> <br/>
              <input type= "text"
              className="form-control border border-primary" placeholder="Your email...."
              name="email" 
             // onChange={(e)=>{
                //setemail(e.target.value);
                 
                
      
            //}}
            /> 
             <br/> <br/>
              </div>
              <div className="form-group">
              <label className="mb-2">Admin Password</label>
              <br/><br/> <br/>
              <input type= "password" 
              className="form-control border border-primary" placeholder="Your password...." 
              name="password"
              //onChange={(e)=>{
              //setpassword(e.target.value);
                         
        
      
              //}}
              />      
                        </div>
            
                        <br/> <br/>  <br/>
              
                        <button onClick={()=>{navigate("/Profile");
                        }}
                        className="btn btn-primary">Login</button> 
                   
                        
             
            
                        
              </form>
       
       </div>
</>
      
       )
        }
      export default AdminLogin;