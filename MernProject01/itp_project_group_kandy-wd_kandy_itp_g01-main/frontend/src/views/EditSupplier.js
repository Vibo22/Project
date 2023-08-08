
import axios from "axios";

import React, {useState, useEffect} from "react";

import { Container } from 'react-bootstrap'

import {Link, useParams, useNavigate} from "react-router-dom";


const EditSupplier = ()=> {
/*
const[SupplierID, setSupplierID] = useState("");
const[Suppliername, setSuppliername] = useState("");
const[Companyname, setCompanyname] = useState("");
const[Itemname, setItemname] = useState("");
const[Numberofitems, setNumberofitems] = useState("");
const[Email, setEmail] = useState("");
const[Contactnumber, setcontactnumber] = useState("");
*/
const initialState = {

    SupplierID: "",

    SupplierName: "",

    CompanyName: "",

    ItemName: "",

    NumberOfItem: "",

    Email: "",

    ContactNumber: "",

}


const [state, setState] = useState(initialState);
const {SupplierID, SupplierName, CompanyName, ItemName, NumberOfItem, Email, ContactNumber} = state;
 const history = useNavigate();
 const handleInputChange = (e) => {
     const {name, value} = e.target;
     setState({ ...state, [name]: value});
     }
     //update    
     
     const {id} = useParams();
     useEffect(() => {
          axios
          .get(`http://localhost:5000/supplier/get/${id}`)
          .then((res) => setState ({...res.data[0]}));
         }, [id]);

         const UpdateData = async (e) => {
              e.preventDefault();
               const data = {
                    SupplierID : SupplierID,
                    SupplierName : SupplierName,
                    CompanyName : CompanyName,
                    ItemName : ItemName,
                    NumberOfItem : NumberOfItem,
                    Email : Email, 
                    ContactNumber : ContactNumber,
                     }
                     await axios.put(`http://localhost:5000/supplier/update/${id}`, data)
                     alert ("Updated Successfully")
                     history("/DisplaySupplier");
                    }
         
         

  return (
       

<div style = {{background: "#3fd2c7"}}>

     <div> <br></br> <br></br> <h2> <u> <b> <center> EDIT DETAILS </center> </b> </u> </h2> </div>

     <form

     onSubmit={UpdateData}
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
        <lable> <b> Supplier ID </b> </lable> 
        <input type="text" name="SupplierID" className="form-control border border-primary" value = {SupplierID || ""} onChange = {handleInputChange} readOnly/>
        </div>

        <br></br> 
       
        <div className="form-group">
        <lable> <b>Supplier Name</b> </lable>
        <input type="text" name="SupplierName" className="form-control border border-primary" value = {SupplierName || ""} onChange = {handleInputChange}/>
        </div>

        <br></br> 

        <div className="form-group">
        <lable> <b>Company Name</b> </lable>
        <input type="text"  name="CompanyName" className="form-control border border-primary" value = {CompanyName || ""} onChange = {handleInputChange}/>
        </div>

        <br></br> 

        <div className="form-group">
        <lable> <b>Item Name</b> </lable>
        <input type="text" name="ItemName" className="form-control border border-primary" value = {ItemName || ""} onChange = {handleInputChange}/>
        </div>

        <br></br> 
 
        <div className="form-group">
        <lable> <b>Number Of Items</b> </lable>
        <input type="number" name="NumberOfItem" className="form-control border border-primary" value = {NumberOfItem || ""} onChange = {handleInputChange}/>
        </div>

        <br></br> 

        <div className="form-group">
        <lable> <b>Email</b> </lable>
        <input type="text" name="Email" className="form-control border border-primary" value = {Email || ""} onChange = {handleInputChange}/>
        </div>
        <br></br> 

        
<input type = "submit" value = "Update" className="btn btn-primary"/><br/><br/>



     

        </form>
         
     </div>
    
  
   );
 }

 export default EditSupplier;