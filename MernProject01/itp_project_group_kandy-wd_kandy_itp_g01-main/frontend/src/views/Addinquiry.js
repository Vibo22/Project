
import React, {useEffect, useState } from "react";
import "../stylesheets/Button.css";
import "../stylesheets/footer.css";
import "../stylesheets/navbar.css";
import {Link ,useNavigate,useParams} from "react-router-dom";
import {toast} from "react-toastify";
import { Container } from 'react-bootstrap'
import axios from "axios";

//import Moment from 'react-moment';
//import 'moment-timezone';





//const initialState={
 // Date:"",
 // Name:"",
 // Email:"",
 //// orderID:"",
 // ItemName:"",
  //TypeOfInquiry:"",
 // Inquiry:"",
//};



const Addinquiry= ()=> {

  

  
  

//const [state,setState]=useState(initialState);

//const{Date,Name,Email,orderID,ItemName,TypeOfInquiry,Inquiry}=state;
const[Date, setDate] = useState("");
const[Name, setName] = useState("");
const[Email, setEmail] = useState("");
const[orderID, setorderID] = useState("");
const[ItemName, setItemName] = useState("");
const[TypeOfInquiry,setTypeOfInquiry] = useState("");
const[Inquiry, setInquiry] = useState("");



//const areAllFieldsFilled = (Date !== "") && (Name !== "") && (Email !== "") && (orderID !== "") && (ItemName !== "") && (TypeOfInquiry !== "") && (Inquiry !== "")


const history = useNavigate();


const {id} = useParams();
/*
const formData=new FormData()

    formData.append('Date', Date)
    formData.append('Name', Name)
    formData.append('Email', Email)
    formData.append('orderID', orderID)
    formData.append('ItemName', ItemName)
    formData.append('TypeOfInquiry', TypeOfInquiry)
    formData.append('Inquiry', Inquiry)

*/

const Submit=async (e) =>{
 // alert('button click catched');
 // window.location = 'Thankyou'


  e.preventDefault();
  if(!Date || !Name|| !Email|| !ItemName|| !TypeOfInquiry|| !Inquiry){
    // console.log("not inserted");
    toast.error("Please fill out all the required fields");

  }else  {
     await axios.post("http://localhost:5000/inquiry/insert",{
  Date:Date,
  Name:Name,
  Email:Email,
  orderID:orderID,
  ItemName:ItemName,
  TypeOfInquiry:TypeOfInquiry,
  Inquiry:Inquiry,

  }) 
 
 .then(() =>{
  alert("Successfully inserted");
  window.location = '/Thankyou'
  history('/Display');
     });
    }
};



    // Date,
   //  Name,
    // Email,
    // orderID,
   //  ItemName,
   //  TypeOfInquiry,
   //  Inquiry 
   // }).then(()=>{
   //     setState({Date:"",Name:"",Email:"",orderID:"",ItemName:"",TypeOfInquiry:"",Inquiry});
   // })
  ////  .catch((err)=>toast.error(err.response.data));
 // }

//};
/*

const Submit = () => {
 
 Axios.post("http://localhost:5000/inquiry/insert",{
  Date:Date,
  Name:Name,
  Email:Email,
  orderID:orderID,
  ItemName:ItemName,
  TypeOfInquiry:TypeOfInquiry,
  Inquiry:Inquiry,
 
 }).then(() => {
   toast.success("Inquiry Added Successfully"); 
  alert("successful insert");
   history('/Display')
}); 
}; */



return (
 
  <><>  <div style={{ marginTop: "0px", background: "#3fd2c7" }}>

    <br />
    <Container>
    <div className="title"> Inquiry Form  </div>  <br />
    <form className="border border-light rounded borderstyles"
      style={{
        margin: "auto",

        padding: "35px",

        maxWidth: "400px",

        alignContent: "center",

        background: "#99ddff",

        border: "#99ddff",

        color: "#00458b",

        fontFamily: "Times New Roman",

        textAlign: "center"
      }}

    >

          
            


      <lable> <b> Date </b> </lable>
      <input type="date" className="text"    name="Date" onChange={(e) => { setDate(e.target.value); } } />



      <div className="form-group">
        <lable> <b>Name</b> </lable>
        <input type="text" className="form-control border border-primary" placeholder="Your Name..." name="Name" onChange={(e) => { setName(e.target.value); } } required />
      </div>

      <div className="form-group">
        <lable> <b>Email</b> </lable>
        <input type="text" className="form-control border border-primary" placeholder="Your Email..."    pattern="[a-z0-9._%+-]+@+[a-z0-9]+\.[a-z0-9]{2,3}" name="Email" onChange={(e) => { setEmail(e.target.value); } } required />
      </div>

      <div className="form-group">
        <lable> <b>Order ID</b> </lable>
        <input type="number" className="form-control border border-primary" placeholder="Your Order ID..." name="orderID" onChange={(e) => { setorderID(e.target.value); } } required />
      </div>

      <div className="form-group">
        <lable> <b>Item Name</b> </lable>
        <select id="type" className="form-control border border-primary" style={{ height: "40px", margin: "auto" }} name="ItemName" onChange={(e) => { setItemName(e.target.value); } } required >
        <option> Select...</option>
        <option> Air Freshner </option>
        <option> Car Care </option>
        <option> Dish washing </option>
        <option> Fabric Care </option>
        <option> Hand Sanitizer </option>
        <option> Hand Wash </option>
        <option> Surface Care </option>
      
    </select></div>

    <div className="form-group">
      <lable> <b>Inquiry Type</b> </lable>
      <select id="type" className="form-control border border-primary" style={{ height: "40px", margin: "auto" }} name="TypeOfInquiry" onChange={(e) => { setTypeOfInquiry(e.target.value); } } required>
        <option> Select...</option>
        <option> Damage Items</option>
        <option> Complains</option>
      </select>
    </div>




    <div className="form-group">
      <lable> <b>Inquiry</b>  </lable>
      <textarea id="message" className="form-control border border-primary" name="Inquiry" placeholder="Enter your Inquiry here..." cols="80" rows="7" onChange={(e) => { setInquiry(e.target.value); } } required></textarea>
    </div>


    
    

      <button className="btn btn-primary"  onClick={Submit}>   Submit Form   </button>

    
    
    </form> 
    </Container>
  <br/> </div>     
  </> </> 

 );
        
    
}



 export default Addinquiry;
        
        
