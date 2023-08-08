
import React,{useState,useEffect}from "react";
import Axios from "axios";
//import {Link} from "react-router-dom";
 
 
 

function Profile (){
  

    const[loginStatus,setloginStatus]=useState("");
    useEffect(()=> {
        Axios.get("http://localhost:5000/getadmin").then((response) => {
        if(response.data){
            setloginStatus(response.data)
        }else{
           setloginStatus(response.data[0].firstName)
    

        }
    
        });


      }, []);

<h1>Welcome to the admin page</h1>

    return(

      <div style = {{

        marginTop: "30px",
        
        background: "#3fd2c7"
        
        }}>
        <br/> <br/> <br/>
        <div className="title"> HR Manger </div>
        <br/> <br/> <br/> <br/> <br/>  
                 
                
     
  
<ul class="nav flex-column">

  <li class="nav-item">
    <a class="nav-link " href="/Stock">Admin Dashboard</a><br/>

    
  </li>

  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/Register">New Employee</a> <br/>
  </li>
   
  <li class="nav-item">
    <a class="nav-link" href="/Cusdisplay">Manage Customer</a><br/> 
  </li>
  <li class="nav-item">
    <a class="nav-link " href="/Empdisplay">Manage Employee</a><br/> 

    
  </li>
  <li class="nav-item">
    <a class="nav-link " href="/report">Employee Attendance Report</a><br/> <br/> <br/> <br/> <br/> <br/> <br/> 

    
  </li>

  
</ul>
 
</div>
);



}
        






  // <h1>My Profile</h1>
    
    

  


export default Profile;