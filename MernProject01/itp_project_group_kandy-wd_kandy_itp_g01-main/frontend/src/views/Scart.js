import React, {useState, useEffect, useReducer} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import "../stylesheets/Scart.css";
import { Container } from "react-bootstrap";

const Scart = () => {

    //insert data to order table
    const[CusId, setCusId] = useState(1);
    const submitOrderDetails = async(e) => {

        e.preventDefault();

        await axios.post("http://localhost:5000/order/insertordetails")

        .then(() => {
            alert("Place Order successfully")
            window.location = 'DeliveryDetails'
        });

    }
    const [data, setData] = useState([]);
    const initialState = {
        Quantity:"",
    }

    const history = useNavigate();
    //const []
    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/shopping_cart/get");
        setData(response.data);
    };

    //const Quantity=state;

   /* const [state, dispatch] = useReducer(
        reducer,
        {count: initialCount}
      );*/
    const{id}=useParams();
    const{name}=useParams();

    useEffect(()=> {
        loadData();
    }, [id]);
    
  
    //update
    const UpdateQuantity = async (id,name) => {
        
       //e.preventDefault();

        /*const data = {
            Quantity:Quantity, 
        }*/

        
        await axios.put(`http://localhost:5000/shopping_cart/update/${id}`);
        await axios.put(`http://localhost:5000/productQuantity/update/${name}`);
        //toast.success("Product Updated Successfully");
        //alert("Details added successfully..")
        history("/Scart");
    }

    const UpdateQuantityM = async (id,name) => {
        
        //e.preventDefault();
 
         /*const data = {
             Quantity:Quantity, 
         }*/
 
         
         await axios.put(`http://localhost:5000/shopping_cart/updatemin/${id}`)
         await axios.put(`http://localhost:5000/productQuantity/updatemin/${name}`);
         //toast.success("Product Updated Successfully");
         //alert("Details added successfully..")
         history("/Scart");
     }



   /* const setQuantity = (product) => {
        loadData(data => data.map(item => item.name === product.name ? {
          ...item,
          Quantity: item.Quantity
        } : item));
      };*/
/*
    const handleDecrement = (ID) => {
        setData (data =>
             
            PID ===item.ID ? {...item.Quantity, Quantity: item.Quantity - (item.Quantity > 1 ? 1:0)} : item.Quantity)
    }

    const handleIncrement = (ID) => {
        setData (data => 
            PID===item.ID ? {...item.Quantity, Quantity: item.Quantity + (item.Quantity < 10 ? 1:0)} : item.Quantity)
    } */


    //update
   /* const setQuantity = (x,y) => {
       
       document.getElementById('bla').innerHTML=x+y;
       
      };  */


      //update

    /*const initialState = {count: 0};

    const initialCount = {count:1};

    function init(initialCount) {
        return {count: initialCount};
      }

    function reducer(state, action) {
    switch (action.type) {
        case 'increment':
        return {count: state.count + 1};
        case 'decrement':
        return {count: state.count - 1};
        default:
        throw new Error();
    }
    }*/

    //delete

    const deleteProduct = (id) => {

      if(window.confirm("The record will delete permenantly")

      ){

        axios.delete(`http://localhost:5000/shopping_cart/delete/${id}`);

        

        //toast.success("Product Deleted Successfully");

        setTimeout(() => loadData(), 500);

      }

    };

   /* function Counter({initialCount}) {
        const [state, dispatch] = useReducer(reducer, initialCount, init);*/
    return (
        <div style={{marginTop: "25px"}}>
            <h1 style={{ color: "#00458b" }}>Shopping Cart</h1>
            <br></br><br></br>
            <table className="cart">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        
                        <th style={{textAlign: "center"}}>Item Name</th>
                        <th style={{textAlign: "center"}}>Price</th>
                        <th style={{textAlign: "center"}}>Quantity</th>
                        <th style={{textAlign: "center"}}>Total Amount</th>
                        <th style={{textAlign: "center"}}>Remove Item</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {

                             
                    

                        return (
                            <tr key={item.ID}>
                                <th scope="row">{index+1}</th>
                                
                                <td>{item.ItemName}</td>
                                <td>{item.Price}</td>
                                <td><button className="btn-sub" onClick={()=>UpdateQuantityM(item.ID,item.ItemName)}  >-</button>{item.Quantity} <button className="btn-add" onClick={()=>UpdateQuantity(item.ID,item.ItemName)} >+</button> </td>  
                                <td>{item.Price*item.Quantity}</td>
                                <td>
                                <button className="btn-delete" onClick = {() => deleteProduct(item.ID)}>

                                        <i className="far fa-trash-alt"></i>

                                </button>
                                </td>
                                
                            </tr>
                        
                        );
                    
                    })}
                    
                    
                </tbody>
                  
               
            
            </table>
            <br></br><br></br>
            <div className="box" >
                Subtotal: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      Rs.{data.reduce((total, item)=>total+(item.Price*item.Quantity),0)}
            </div>
            <br></br>
            
            <Link to = "/DisplayCustomer">
                <button type="button" class="btn-cs"  >Continue Shopping</button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Container>
            <div align = "right" style = {{marginRight:"80px"}}>
                <form
                    onSubmit={submitOrderDetails}
                    method="POST">
                    <input type="submit" className="btn-cs" value = "Check Out"/>
                </form>
            </div>
            </Container>

            <br></br><br></br>
           


        </div>
        
       
    );
                
};

export default Scart;

