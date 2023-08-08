import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import { Container } from 'react-bootstrap'
import axios from "axios";
import "../App.css";
//import image from '../Images/1644185182644.png';
import "../stylesheets/Button.css";


const ExtraExpences = () => {

    const [ExID, setExID] = useState(0);
    const [EDate, setEDate] = useState("");
    const [ECategory, setECategory] = useState("");
    const [EAmount, setEAmount] = useState(0);

    const enableSubmit = (EDate != "") && (ECategory != "") && (EAmount != "") ;
    

    const history = useNavigate();

    const {id} = useParams();

    /*const formData = new FormData()

    formData.append('ExID', ExID)
    formData.append('EDate', EDate)
    formData.append('ECategory', ECategory)
    formData.append('EAmount', EAmount)
    

  //insert stock data
  const submitData = async (e) => {

    e.preventDefault();

    console.log(formData);
        await axios.post("http://localhost:5000/extra_expences/insert", formData)
        .then(() => {
          //toast.success("Product Added Successfully"); 
          alert("Details Added Successfully")
          history('/DisplayExpences')
      });
    */
   const submitData = (e)=> {
       e.preventDefault();
       axios.post("http://localhost:5000/extra_expences/insert",{
           EDate:EDate, 
           ECategory:ECategory,
           EAmount: EAmount,
       }).then(()=>{
           
           alert ("Added Success");
           history('/DisplayExpences')
       })
   };

  /* const validate = (values) => {
     const errors = {};
     if(!values.EAmount){
       errors.EAmount="Amount is reqiured!";
     }
   };*/

    return (
      <div style = {{
        marginTop: "10px",
        background: "#3fd2c7"
      }}>
        <Container>
          <h1> Add Extra Expences </h1>

          <form 
            className="border border-light rounded borderstyles"
            
            method="POST" 
            encType="multipart/form-data"
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
          <label> Date </label>
          <input type="datetime-local" 
                 id = "Date"
                 name = "EDate"
                 value = {EDate}
                 onChange = {(e) => setEDate(e.target.value)} 
                 class="form-control border border-primary" required/>
        </div>


        <div className="form-group">
            <label>Category</label>
            <select 
                className="form-control border border-primary" 
                id="Category" 
                name = "ECategory" 
                value = {ECategory} 
                onChange = {(e) => setECategory(e.target.value)} required>
                <option> Select..... </option>
                <option> Fuel </option>
                <option> Vehicle Service Cost </option>
                <option> Vehicle Rental Cost </option>
                <option> Stationary </option>
                
            </select>
        </div>

        <div className="form-group">
          <label> Amount </label>
          <input type="Number"
                 id = "EAmount"
                 name = "EAmount"
                 value = {EAmount}
                 onChange = {(e) => setEAmount(e.target.value)} 
                 class="form-control border border-primary" required />
        </div>

        
        <br/><br/>
        
     
      <button disabled={!enableSubmit} onClick={submitData} className="btn btn-primary">Add Extra Expences</button>
      
      <br></br>
      </form>
        </Container>
      </div>
        
    )
}

export default ExtraExpences;