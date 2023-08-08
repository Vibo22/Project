/////////////GetSale.js////////

import axios from "axios";
import React, {useState, useEffect} from "react";
import { Container } from 'react-bootstrap'
import {Link, useParams, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
//import DatePicker from "react-date-picker";
//import "react-datepicker/dist/react-date-picker.css";


const DailySales = () => {

    const initialState = {
        PID: "",
        ProductName: "",
        Date: "",
        Quantity: "",
    }

    const [state, setState] = useState(initialState);
    //const[selectedDate, setSelectedDate] = useState(null);

    const {PID, ProductName, Quantity} = state;

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({ ...state, [name]: value});
    }

    const history = useNavigate();

    //update
   const {id} = useParams();
   //const {sid} = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/dailysale/get/${id}`)
            .then((res) => setState ({...res.data[0]}));
    }, [id]);

    /*
    const UpdateData = async (e) => {

        e.preventDefault();

        //alert("success")
        const data = {
            PID : PID,
            ProductName : ProductName,
            Date : Date,
            Quantity : Quantity, 
        }

        await axios.put(`http://localhost:5000/dailysales/update/${id}`, data)
        alert(id);

        //toast.success("Product Updated Successfully");
        //history("/DisplayAdmin");
    }

    const [ProID, setPID] = useState(0);
    const [proName, setProName] = useState("");
    const [pDate, setDate] = useState("");
    const [Qty, setQty] = useState(0);

    const Data = new FormData()

    Data.append('PID', ProID)
    Data.append('ProductName', proName)
    Data.append('Date', pDate)
    Data.append('Quantity', Qty)
    
*/
    const submitSalesData = async (e) => {
        e.preventDefault();

        const Data = {
            Quantity : Quantity,
        }
        /*
        if(Quantity < 0){
            toast.error("Quantity should be a positive number");
        }else{
            await axios.put(`http://localhost:5000/dailysale/update/${id}`, Data);
            await axios.put(`http://localhost:5000/dailysale/updateSale/${id}`);
            alert("Sale inserted successfully..");
        }
        */

        await axios.put(`http://localhost:5000/dailysale/update/${id}`, Data);
        await axios.put(`http://localhost:5000/dailysale/updateSale/${id}`);
        alert("Sale inserted successfully..");
        window.location = '/DisplayAdmin'
        
    }

    return (
        <div style = {{marginTop: "150px"}}>
            <Container>
          <h1> Add Daily Sales </h1>

          <form 
            onSubmit={submitSalesData} 
            style = {{
                margin:"auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center",
            }}>  

        <div className="form-group">
          <label> Product ID </label>
          <input type="text" 
                 name = "ProductID"
                 id = "ProductID"
                 value = {PID}
                 //value = {ProID}
                 //onChange = {handleInputChange}
                 //onChange = {(e) => setPID(e.target.value)} 
                 className="form-control border border-primary"
                 readOnly/>
        </div>

        <div className="form-group">
          <label> Product Name </label>
          <input type="text"
                 id = "ProductName"
                 name = "ProductName"
                 value = {ProductName}
                 //onChange = {handleInputChange} 
                 //onChange = {(e) => setProName(e.target.value)} 
                 class="form-control border border-primary"
            />
        </div>

        <div className="form-group">
          <label> Quantity </label>
          <input type="Number"
                 id = "Quantity"
                 name = "Quantity"
                 //onChange = {(e) => setQty(e.target.value)} 
                 value = {Quantity}
                 onChange = {handleInputChange} 
                 class="form-control border border-primary"/>
        </div>

        
        
        
        <input type = "submit" value = "Add Sale" className="btn btn-primary"/>
        

        </form>
        </Container>
        </div>
    )
}

export default DailySales;