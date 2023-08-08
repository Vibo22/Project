import React,{useState}from "react";
import Axios from "axios"
import {Link, useParams} from "react-router-dom";

 
function  Login(){
  const [email, setemail]=useState("");
  const [password, setpassword]=useState("");
   
  const[loginStatus,setloginStatus]=useState("");


  Axios.defaults.withCredentials=true;
  
  // Validate username and password and get the validated details 
  
  const  login=() => {
    Axios.post("http://localhost:5000/login",{email :email,password:password,}).then((response)=>{
      if (response.data.message){
         setloginStatus(response.data.message)
          }else{
      setloginStatus(response.data[0].firstName)
      
     
      
    }
        
});
    /*const  login=() => {
      Axios.post("http://localhost:3001/login",{email :email,password:password,})*/
    
}

    
return (
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
        <label>Email</label>
        <br/><br/> 

        <input type= "text"
        className="form-control border border-primary" placeholder="Your email...." 
        name="email" 
        onChange={(e)=>{
          setemail(e.target.value);
           
     

      }}/> 
      <br/> 
      </div>

        <div className="form-group">
        <label className="mb-2">Password</label>
        <br/><br/> 
        <input type= "password" className="form-control" placeholder="Your Password...." name="password"
        onChange={(e)=>{
            setpassword(e.target.value);
                   
  

        }}/>      
        </div>
        <br/>

        <Link to="/DisplayCustomers">
        <button onClick={login} className="btn btn-primary">Login</button> 
        </Link>        
                  
        <h1>{loginStatus}</h1>
         
        <br/> <br/> 
                    <p className="pf">
                    Don't have an account?
                    <a href="/">Create one now</a>
                    </p>
                    <p className="pf">
                  
                    

                    <p className="pd">
                    I'm an admin?
                    <a href="/AdminLogin">Login</a>
                  </p>


                  </p>
                    
        </form>
 
 </div>
   
    
     

     
          
    )
  }
export default Login;