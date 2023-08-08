import Axios from "axios"
import { toast } from "react-toastify";
import React,{useState}from "react";
import {Link} from "react-router-dom";
import "../stylesheets/Button.css";


function  Empreport(){

  const[month, setmonth]=useState("");
  const[firstName, setfirstName]=useState("");
  const[lastName, setlastName]=useState("");
  const[work, setwork]=useState("");
   

// insert Employee details

  const  submit=() => {
    if (!month || !firstName || !lastName || !work ){
      alert("Please fill value into each field");
    }else{
      Axios.post("http://localhost:5000/add/report",{month:month,firstName:firstName,lastName:lastName,work:work
      
  })
  alert("Data added successfully");  
}
}
   return (
     
    <div style = {{

      marginTop: "8px",
      
      background: "#3fd2c7"
      
      }}>
              
              <br/> <br/> <br/>
              <div className="title"> Report Form </div>
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
            <label>Month</label> 
            <br/>
            <input type= "text" className="form-control border border-primary" placeholder="Month..."
            name="firstName" onChange={(e)=>{
            setmonth(e.target.value) ;

      }}  
          />
        </div>

    
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
             <label>Dates_worked</label>
             <br/>
             <input type= "text" className="form-control border border-primary" placeholder="dates worked...."
             name="phone" onChange={(e)=>{
             setwork(e.target.value);

      }} 
      /> 
      </div>
        
 
          
                  
         
       
                 
                <button onClick={submit} className="btn btn-primary">Add</button><br/><br/>
                 

                <Link to="/PrintReport">
                <button  className="btn-send">Go Back</button> 
                </Link>         
                  
     
                   

                  </form>
 
 </div>
   
   
  

)
}
 
 

 
 
  

  
export default Empreport;