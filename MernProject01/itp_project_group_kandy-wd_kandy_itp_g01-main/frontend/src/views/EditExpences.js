import axios from "axios";
import React, {useState, useEffect} from "react";
import { Container } from 'react-bootstrap'
import {Link, useParams, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


const EditExpences = () => {

    const initialState = {
        ExID: "",
        EDate: "",
        ECategory: "",
        EAmount: "",
    }

    const [state, setState] = useState(initialState);

    const {ExID, EDate, ECategory, EAmount} = state;

    const history = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({ ...state, [name]: value});
    }

    //update
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/extra_expences/get/${id}`)
            .then((res) => setState ({...res.data[0]}));
    }, [id]);

    const UpdateData = async (e) => {

        e.preventDefault();

        const data = {
            ExID : ExID,
            EDate : EDate,
            ECategory : ECategory,
            EAmount : EAmount, 
        }

        await axios.put(`http://localhost:5000/extra_expences/update/${id}`, data)

        //toast.success("Product Updated Successfully");
        alert("Details added successfully..")
        history("/DisplayExpences");
    }


    return (
        <div style = {{
            marginTop: "10px",
            background: "#3fd2c7"}}>
            <Container>
          <h1> Edit Expences </h1>

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
          <label> ID </label>
          <input type="text" 
                 name = "ExID"
                 id = "ExID"
                 value = {ExID || ""}
                 onChange = {handleInputChange}
                 className="form-control border border-primary"
                 readOnly/>
        </div> 

        <div className="form-group">
          <label> Date </label>
          <input type="datetime-local"
                 id = "EDate"
                 name = "EDate"
                 value = {EDate || ""}
                 readOnly
                 onChange = {handleInputChange} 
                 class="form-control border border-primary"/>
        </div>

        <div className="form-group">
            <label>Category</label>
            <select 
                className="form-control border border-primary" 
                id="Category" 
                name = "ECategory" 
                value = {ECategory || ""} 
                onChange = {handleInputChange}>
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
                 value = {EAmount || ""}
                 onChange = {handleInputChange} 
                 class="form-control"/>
        </div>
        
        <br/><br/>
        <input type = "submit" value = "Update" className="btn btn-primary"/><br/><br/>

        </form>
        </Container>
        </div>
    )
}

export default EditExpences;