import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import image from '../Images/main.jpg';
import "../stylesheets/MainPage.css";

const MainPage = () => {
    const myStyle={
        backgroundImage: `url(${image})` ,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return(
      
        
        <>
         <div style={myStyle}>
            <div>
                <br/><br/>
            <h1 align = "center" className="display-4 font-weight-bold text-white">Pradeepa Distributors</h1>
            <div align = "right" style = {{marginRight: "20px"}}>
                <Link to = "/login">
                    <button className="button"><span>Login</span></button>
               </Link>
               <Link to = "/addCustomer">
                    <button className="button"><span>SignUp</span></button>
               </Link>
           </div>
           </div>
        </div>
        
            
        </>
    )
}

export default MainPage;