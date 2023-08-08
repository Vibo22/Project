import axios from "axios";
import React, {useState, useEffect} from "react";
import { Container } from 'react-bootstrap'
import {Link, useParams, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


const EditProduct = () => {

    //const {ProductID} = useParams();
/*
    const [ProductID, setProductID] = useState("");
    const [ProductName, setProductName] = useState("");
    const [Category, setCategory] = useState("");
    const [Price, setPrice] = useState(0);
    const [Quantity, setQuantity] = useState(0);
    const [Status, setStatus] = useState("");
    //const [Image, setImage] = useState("");

    
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get(`http://localhost:5000/product/get/${ProductID}`)
            setProductID(data.ProductID)
            setProductName(data.ProductName)
            setCategory(data.Category)
            setPrice(data.Price)
            setQuantity(data.Quantity)
            console.log(data.ProductName)
            console.log(data)
        }
        getData()
    },[ProductID])
    */

    const initialState = {
        PID: "",
        ProductName: "",
        Category: "",
        Price: "",
        Quantity: "",
        Status: "",
        Image: "",
    }

    const [state, setState] = useState(initialState);

    const {PID, ProductName, Category, Price, Quantity, Status} = state;

    const history = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({ ...state, [name]: value});
    }

    //update
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/stock/get/${id}`)
            .then((res) => setState ({...res.data[0]}));
    }, [id]);

    const UpdateData = async (e) => {

        e.preventDefault();

        const data = {
            PID : PID,
            ProductName : ProductName,
            Category : Category,
            Price : Price,
            Quantity : Quantity,
            Status : Status, 
        }

        if(!ProductName || !Category || !Price){
            toast.error("Please fill out all the required fields");
        }else if(Price < 0){
            toast.error("Price should be a positive number");
        }else if(Quantity < 0){
            toast.error("Quantity should be a positive number");
        }else{
            await axios.put(`http://localhost:5000/stock/update/${id}`, data);
            await axios.put("http://localhost:5000/stock/updateStatus")
            await axios.put("http://localhost:5000/stock/updateStatusPlus")
            //toast.success("Product Updated Successfully");
            alert("Product updated successfully..")
            history("/DisplayAdmin");
          }
    }


    return (
        <div style = {{
            marginTop: "10px",
            background: "#3fd2c7"}}>
            <Container>
          <h1> Edit Product </h1>

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
          <label> Product ID </label>
          <input type="text" 
                 name = "ProductID"
                 id = "ProductID"
                 value = {PID || ""}
                 onChange = {handleInputChange}
                 className="form-control border border-primary"
                 readOnly/>
        </div> 

        <div className="form-group">
          <label> Product Name </label>
          <input type="text"
                 id = "ProductName"
                 name = "ProductName"
                 value = {ProductName || ""}
                 autoComplete = "off"
                 onChange = {handleInputChange} 
                 class="form-control border border-primary"/>
        </div>

        <div className="form-group">
            <label>Category</label>
            <select 
                className="form-control border border-primary" 
                id="Category" 
                name = "Category" 
                value = {Category || ""} 
                onChange = {handleInputChange}>
                <option> Select..... </option>
                <option> Air Freshner </option>
                <option> Car Care </option>
                <option> Dish washing </option>
                <option> Fabric Care </option>
                <option> Hand Sanitizer </option>
                <option> Hand Wash </option>
                <option> Surface Care </option>
                <option> Toilet Care </option>
            </select>
        </div>

        <div className="form-group">
          <label> Price </label>
          <input type="text"
                 id = "Price"
                 name = "Price" 
                 //value = {Price || ""}
                 value ={parseFloat(Price || "").toFixed(2)}
                 onChange = {handleInputChange} 
                 class="form-control"
                 pattern="[0-9]+\.[0-9]{2}"
                 title = "Use the format 0.00"/>
        </div>

        <div className="form-group">
          <label> Quantity </label>
          <input type="Number"
                 id = "Quantity"
                 name = "Quantity"
                 value = {Quantity || ""}
                 onChange = {handleInputChange} 
                 class="form-control border border-primary"/>
        </div>
        
       
        
        <br/><br/>
        <input type = "submit" value = "Update" className="btn btn-primary"/><br/><br/>

        </form>
        </Container>
        </div>
    )
}

export default EditProduct;