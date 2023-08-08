import Axios from "axios"
import React,{useState,useEffect}from "react";
import {Link,useParams} from "react-router-dom";
 

function  Empupdate(){
            
    const[state,setState]=useState([]);
    const {id} =useParams();
    const{firstName,lastName,phone,email,password}=state;
  
    const handleInputChange = (e)=> {
      const{name,value}=e.target;
      setState({...state,[name]:value})
  
    }
  
    //update employee details
       
        const update= async (e) => {
  
        
        const data = {
            id : id,
            firstName : firstName,
            lastName : lastName,
            phone : phone,
            email : email,
            password : password, 
        }
  
       
      Axios.put(`http://localhost:5000/update/emp/${id} `,data)
        
      alert("Details Updated succesfully");
    
} 
  
     
    useEffect(()=> {
       Axios.get(`http://localhost:5000/get/emp/${id} `).then((resp) => setState({...resp.data[0]}));
   
       
   }, [id]);
  
    
  
     
    
     return (
       
          <div className="container">
          <div className="form input">
                  
          <div className="login-body">
          <h5 className="text-center mb-4">Register Now</h5>
          <form>
          
          <div className="form-group">
          <label>First Name </label> 
          <br/>
          <input type= "text"  name="firstName" value={firstName || ""}  onChange={handleInputChange}
          />
          </div>

          <div className="form-group">
          <label>Last Name</label>
          <br/>
          <input type= "text"  name="lastName" value={lastName || ""}  onChange={handleInputChange}
          />
         </div>

          <div className="form-group">
          <label>Phone No</label>
          <br/>
          <input type= "text"  name="phone" value={phone || ""}  onChange={handleInputChange}/> 
          </div>
          
          <div className="form-group">
          <label>Email</label>
          <br/>
          <input type= "text"  name="email" value={email || ""} onChange={handleInputChange} /> 
          </div>

          <div className="form-group">
          <label className="mb-2">Password</label>
          <br/>
          <input type= "password" className="form-control" name="password"
          value={password || ""} onChange={handleInputChange}
          />      
          </div>
                    
           
                     
          <button onClick={update}  className="login">Update</button> 
          <br/>
          <br/>

          <Link to="/Empdisplay">
          <button className="login">Go Back</button> 
          </Link>     
  
  
  </form>
   
   </div>
   </div>
   </div> 
     








    )
    }

export default Empupdate;