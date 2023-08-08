import React,{useState, useEffect} from "react";
import {toast} from "react-toastify";
import Axios from "axios";
import '../stylesheets/enterdelivery.css';
import '../stylesheets/Button.css';
import { Link, useNavigate } from "react-router-dom";
import image from '../Images/terms.jpg';

const TermsAndConditions = () => {

    return(
        <div style = {{marginTop: "60px"}}>

            <h3><b>Terms and Conditions</b></h3><br/><br/>

            <h5>Last updated: 22/05/2022</h5><br/>

            <div className="container" style = {{textAlign:"left"}}>
                <p>Please read these Terms and Conditionscarefully before using this website.
                Your access to and use of the Service is conditioned on your acceptance of and compliance with
                these Terms. These Terms apply to all visitors, users and others who access or use the Service.
                By accessing or using the Service you agree to be bound by these Terms. If you disagree
                with any part of the terms then you may not access the Service.
                </p>
            </div><br/>

            <h5><b>Purchases</b></h5><br/>
            <div className="container" style = {{textAlign:"left"}}>
                <p>If you wish to purchase any product or service made available through the Service
                    you may be asked to supply certain information relevant to your Purchase.
                    Your personal data will be used to process your order, support your experience throughout this website
                </p><br/>
            </div><br/>

            <h5><b>Payment Methods</b></h5><br/>

            <div className="container" style = {{textAlign:"left"}}>
                <p>Customers can use Cash on dekivery or Direct Bank transferring as a Payment Method<br/><br/>
                <b>Direct Bank Transfer:</b><br/>
                Make your payment directly into our bank account. Your order will be delivered after you make the payment.<br/>
                <b>Account Details:</b><br/>
                Pradeepa Distributors<br/>
                Acc No: 0003356799<br/>
                BOC, Pilimathalawa<br/>

                <h6 style = {{textAlign:"left", color:"#9d2c23"}}>Note: Please mention your Order ID as a reference number</h6>
                </p><br/>
                <div className="container">
                <img src={image} />
                </div>
                
            </div><br/>

        </div>
    )

}

export default TermsAndConditions;