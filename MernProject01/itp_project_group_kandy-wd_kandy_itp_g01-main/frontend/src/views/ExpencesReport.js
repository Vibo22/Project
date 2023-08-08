import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import "../stylesheets/ExpenReport.css";


const ExpencesReport = () => {
    /*
    <div className="box" >
                Subtotal:     Rs.{((EAmount)=>EAmount+EAmount,0)}
            </div>*/

            const [rep, setRep] = useState([]);
            const [repTable, setRepTable] = useState([]);
        
            //Total amount
            const loadData = async () => {
                const response = await axios.get("http://localhost:5000/expenRe/get");
                setRep(response.data);
            };

            //Table
            const Data = async () => {
                const response = await axios.get("http://localhost:5000/repTable/get");
                setRepTable(response.data);
            };
        
            useEffect(()=> {
                loadData();
            }, []);

            useEffect(()=> {
               Data();
            }, []);
        
          
        
            const history = useNavigate(); 
            
            return (
                <div style={{marginTop: "50px"}}>
                    <h1 style={{ color: "#00458b" }}>Extra Expences Report</h1>
                    <br></br><br></br>
                    <div className="box">
                        <h3>Total amount of additional expences: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {rep.map((exre) => {
                            return(<h3><b>Rs.{exre.ETotal}</b></h3>)
                        })}</h3>
                    </div>
                    
             <br></br>
             <div>
            <table className="Extable">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>Date</th>
                        <th style={{textAlign: "center"}}>Total Amount (Rs.)</th>
                    </tr>
                </thead>
                <tbody>
                    {repTable.map((r) => {
                        return (
                            <tr >
                                <td>{r.EDate}</td> 
                                <td>{r.ETotal}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
            <br></br><br></br>
                </div>
            );
}; 

export default ExpencesReport;