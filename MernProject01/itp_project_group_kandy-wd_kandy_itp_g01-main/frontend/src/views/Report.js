import React, {useState, useEffect} from "react";
import { Container } from 'react-bootstrap'
import axios from 'axios';

const Report = () => {

    const [SalesList, setSalesList] = useState([]);
    const [totalSale, setTotalSale] = useState([]);
    //const [MinimumSale, setMinimumSale] = useState([]);
    //const [MaximumSale, setMaximumSale] = useState([]);

     //read sales list
     const data = async () => {
        const response = await axios.get("http://localhost:5000/sales/get");
        setSalesList(response.data);
      }; 

      useEffect(() => {
        data();
    }, [])

    //sum of sales
    const sumOfSales = async () => {
        const response = await axios.get("http://localhost:5000/sales/sum");
        setTotalSale(response.data);
        console.log(response.data)
      }; 

      useEffect(() => {
          sumOfSales();
      },[])

  /*    //minimum of sales
    const MinimumSales = async () => {
      const response = await axios.get("http://localhost:5000/sales/min");
      setMinimumSale(response.data);
      console.log(response.data)
    }; 

    useEffect(() => {
        MinimumSales();
    },[])


     //maximum of sales
     const MaximumSales = async () => {
      const response = await axios.get("http://localhost:5000/sales/max");
      setMaximumSale(response.data);
      console.log(response.data)
    }; 

    useEffect(() => {
        MaximumSales();
    },[])

*/

    return (
        <div style = {{marginTop: "80px"}}>
          <div className='container'>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/Report">Daily Sales Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/ExpencesReport">Extra Expences</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/OrderReport">Order Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Inquiry_Delete">Inquiry Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#">Supplier Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#">Special Package Report</a>
                    </li>
                </ul>
            </div><br/>

        <h1>Dialy Sales Report</h1>

        <Container>
            <table className="table" 
                   style = {{
                     alignContent : "center",
                     width : "350px",
            }}>
              {totalSale.map((tsale) => {
                return(
                  <tbody>
                    <tr>
                      <td align = "left"> Total sale </td>
                      <td align = "right"> {tsale.Total_Sale} </td>
                    </tr>
                    <tr>
                      <td align = "left"> Maximum sale </td>
                      <td align = "right"> {tsale.Max_Sale} </td>
                    </tr>
                    <tr>
                      <td align = "left"> Minimum sale </td>
                      <td align = "right"> {tsale.Min_Sale} </td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
            <br/><br/>
            <table className="table">
              <thead className="table-light">
              <tr className = "table-info">
                <th scope="col">Sales ID</th>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Sale</th>
              </tr>
              </thead>
              {SalesList.map((sales) =>{
                return(
                  <tbody>
                  <tr key = {sales.SalesID}>
                    <td>{sales.SalesID}</td>
                    <td>{sales.PID}</td>
                    <td align = "left">{sales.ProductName}</td>
                    <td>{sales.Quantity}</td>
                    <td>{sales.Sale}</td>
                  </tr>
              </tbody>)
              })}
            </table>
          </Container>
        </div>
    )
}

export default Report;