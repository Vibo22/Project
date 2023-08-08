import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import { Container } from 'react-bootstrap'
import axios from "axios";
import "../App.css";
import "../stylesheets/Button.css";


const AddProduct = () => {

    const [PID, setPID] = useState(0);
    const [ProductName, setProductName] = useState("");
    const [Category, setCategory] = useState("");
    const [Price, setPrice] = useState(0);
    const [Quantity, setQuantity] = useState(0);
    const [Image, setImage] = useState("");

    const history = useNavigate();

    const {id} = useParams();

    const formData = new FormData()

    formData.append('PID', PID)
    formData.append('ProductName', ProductName)
    formData.append('Category', Category)
    formData.append('Price', Price)
    formData.append('Quantity', Quantity)
    formData.append('Image', Image)

  //insert stock data
  const submitData = async (e) => {

    e.preventDefault();

    if(!ProductName || !Category || !Price || !Quantity){
      toast.error("Please fill out all the required fields");
    }else if(Price < 0){
      toast.error("Price should be positive");
    }else if(Quantity < 0){
      toast.error("Quantity should be positive");
    }else{
        await axios.post("http://localhost:5000/stock/insert", formData)
        .then(() => {
          //toast.success("Product Added Successfully"); 
          alert("Product added Successfully")
          history('/DisplayAdmin')
      });
    }
    
/*
    const formData = new FormData()

    formData.append('ProductID', ProductID)
    formData.append('ProductName', ProductName)
    formData.append('Category', Category)
    formData.append('Price', Price)
    formData.append('Quantity', Quantity)
    formData.append('Status', Status)
    formData.append('Image', Image)

    await axios.post("http://localhost:5000/product/insert", formData)
    history('/DisplayAdmin');

    console.log(ProductID);
    console.log("------------------------");*/
  };

    return (
      <div style = {{
        marginTop: "10px",
        background: "#3fd2c7"
      }}>
        <Container>
          <h1> Add Product </h1>

          <form 
            className="border border-light rounded borderstyles"
            onSubmit={submitData} 
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
          <label> Product Name </label>
          <input type="text"
                 id = "ProductName"
                 name = "ProductName"
                 value = {ProductName}
                 autoComplete = "off"
                 onChange = {(e) => setProductName(e.target.value)} 
                 class="form-control border border-primary"/>
        </div>

        <div className="form-group">
            <label>Category</label>
            <select 
                className="form-control border border-primary" 
                id="Category" 
                name = "Category" 
                value = {Category} 
                onChange = {(e) => setCategory(e.target.value)}>
                <option> Select..... </option>
                <option> Air Freshner </option>
                <option> Car Care </option>
                <option> Dish washing </option>
                <option> Fabric Care </option>
                <option> Hand Sanitizer </option>
                <option> Hand Wash </option>
                <option> Surface Care </option>
            </select>
        </div>

        <div className="form-group">
          <label> Price </label>
          <input type="text"
                 id = "Price"
                 name = "Price"
                 placeholder="0.00"
                 value = {Price}
                 onChange = {(e) => setPrice(e.target.value)} 
                 class="form-control border border-primary" 
                 pattern="[0-9]+\.[0-9]{2}"
                 title = "Use the format 0.00"/>
        </div>

        <div className="form-group">
          <label> Quantity </label>
          <input type="Number"
                 id = "Quantity"
                 name = "Quantity"
                 value = {Quantity}
                 onChange = {(e) => setQuantity(e.target.value)} 
                 class="form-control border border-primary"/>
        </div>
        
        <br/><br/>
        <input type = "submit" value = "Add Product" className="btn btn-primary"/><br/><br/>

      </form>
        </Container>
      </div>
        
    )
}

export default AddProduct;