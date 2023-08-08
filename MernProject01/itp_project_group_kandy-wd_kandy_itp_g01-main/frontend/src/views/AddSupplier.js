
import React, {useState } from "react";
// import './App.css';
import {Link, useNavigate} from "react-router-dom";
import Axios from "axios";
import "../stylesheets/Button.css";

const AddSupplier = ()=> {

const[SupplierID, setSupplierID] = useState("");
const[Suppliername, setSuppliername] = useState("");
const[Companyname, setCompanyname] = useState("");
const[Itemname, setItemname] = useState("");
const[Numberofitems, setNumberofitems] = useState(0);
const[Email, setEmail] = useState("");
const[Contactnumber, setcontactnumber] = useState("");

const history = useNavigate();

const Submit = (e) => {
  e.preventDefault();
  Axios.post("http://localhost:5000/supplier/insert",{
    SupplierID:SupplierID,
    SupplierName:Suppliername,
    CompanyName:Companyname,
    ItemName:Itemname,
    NumberOfItem:Numberofitems,
    Email:Email,
    ContactNumber:Contactnumber,
    
  })
    alert("successful insert");
    history ('/DisplaySupplier')
   
};  

  return (

      <div style = {{background: "#3fd2c7"}}>

      
    <br></br>
    <div className="title"> <h2> <u> <b> SUPPLIER DETAILS </b> </u> </h2> </div> <br></br>




    <form className="border border-light rounded borderstyles" 
    method="post"
    style = {{



      margin:"auto",
      


      padding: "35px",



      maxWidth: "400px",



      alignContent: "center",



      background: "#99ddff",



      border: "#99ddff",



      color: "#00458b"



  }}

           
          >
       <br></br><br></br>
       
       <div className="form-group">
       <lable> <b> Supplier Name </b> </lable>
        <input type="text" className="form-control border border-primary" name="Suppliername" onChange={(e) => {setSuppliername(e.target.value);}} />
        </div>

        <div className="form-group">
        <lable> <b> Company Name </b> </lable>
        <input type="text" className="form-control border border-primary" name="Companyname" onChange={(e) => {setCompanyname(e.target.value);}} />
        </div>

        <div className="form-group">
        <lable> <b> Item Name </b> </lable>
        <input type="text" className="form-control border border-primary" name="Itemname" onChange={(e) => {setItemname(e.target.value);}} />
        </div>

        <div className="form-group">
        <lable> <b> Number Of Items </b> </lable>
        <input type="number" className="form-control border border-primary" name="Numberofitems" onChange={(e) => {setNumberofitems(e.target.value);}} />
        </div>

        <div className="form-group">
        <lable> <b> Email </b> </lable>
        <input type="text" className="form-control border border-primary" name="Email" onChange={(e) => {setEmail(e.target.value);}} />
        </div>
          
        <div className="form-group">
        <lable> <b> Contact Number </b>  </lable>
        <input type="text" className="form-control border border-primary" name="Contact number" onChange={(e) => {setcontactnumber(e.target.value);}} />
        </div>
        <br></br> <br></br>


        
        <button className="btn btn-primary" onClick={Submit}> Submit </button>
        
  

      </form>
         
      </div> 
      
    
  
   );
 }

 export default AddSupplier;