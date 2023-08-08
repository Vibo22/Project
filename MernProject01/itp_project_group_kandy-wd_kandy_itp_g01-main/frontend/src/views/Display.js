import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
//import './Display.css';
import "../stylesheets/Button.css";
import "../stylesheets/footer.css";
import "../stylesheets/navbar.css";
import {toast} from "react-toastify";
import { Container } from 'react-bootstrap'
import Axios from 'axios';

const Display = () => {


  const [data,setData]=useState([]);

  const loadData=async() =>{
    const response=await Axios.get("http://localhost:5000/inquiry/get");
    setData(response.data);
  };

  useEffect(() =>{
    loadData();
  },  []);


  const deleteInquiry = (id)=>{
    if(
      window.confirm("Are you sure that you wanted to delete that inquiry ?")){
    
      Axios.delete(`http://localhost:5000/inquiry/delete/${id}`);
      Axios.post(`http://localhost:5000/Deleted_Inquiry/insert/${id}`)
    
     // toast.success("Inquiry deleted successfully");
      setTimeout(() => loadData(),500);
    }
  };

  





   // const [InquiryList, setInquiryList] = useState([]);
    //const [search, setSearch] = useState('');

   
    //const data = async () => {
     // const response = await Axios.get("http://localhost:3001/api/get");
    //  setInquiryList(response.data);
  //  };

 //   useEffect(() => {
  //      data();
  //  }, [])

  //  const deleteInquiry = (id) => {
   //   if(window.confirm("The record will delete permenantly")
    //  ){
      //  Axios.delete(`http://localhost:3001/api/delete/${id}`);
      //  toast.success("Inquiry Deleted Successfully");
      //  setTimeout(() => data(), 500);
    //  }
   // };

    return (
        <div style = {{marginTop: "80px" ,fontFamily:"Times New Roman", alignItems:"center",alignContent:"center"}}>
        <div className="title"> Inquiries </div>
        
              <form className="form-inline">

              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>

              <button className='btnsearch' type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>

              </form>
             




         <table className="table">
           <thead className="table-light">
           <tr className="table-info">
                  <th scope="col">Inquiry ID</th>
                  <th  scope="col">Date</th>
                  <th  scope="col">Name</th>
                  <th  scope="col">Email</th>
                  <th  scope="col"> Order ID</th>
                  <th  scope="col">Item Name</th>
                  <th  scope="col">Type of Inquiry</th>
                  <th  scope="col">Inquiry</th>
                  <th  scope="col">Status</th>
                  
              </tr>
            </thead>
      
             {data.map((item) =>{
                return (
                  <tbody>
                <tr>
                 
                
                  <td>{item.InquiryID}</td>
                  <td>{item.Date}</td>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.orderID}</td>
                  <td>{item.ItemName}</td>
                  <td style={{width:"8%"}} >{item.TypeOfInquiry}</td>
                  <td style={{width:"18%"}} >{item.Inquiry}</td>
                  <td>{item.Status}</td>
                  
                  <td>
                  <Link to={`/Reply/${item.InquiryID}`}>
                      <button className="btn btn-view"> <i class="fa-solid fa-eye"></i>   View</button>
                    </Link>

                  
                    <button className="btn btn-delete" 
                    onClick={() => deleteInquiry(item.InquiryID)}> <i class="fa-solid fa-trash-can"></i> Delete</button>
                  
                    


                  </td>
                </tr>
                </tbody>
                );
             })}
            
          </table>

          <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
          
        </div>
    );
};

export default Display;