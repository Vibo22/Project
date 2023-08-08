import React from 'react';
import '../stylesheets//Thankyou.css';
import image from '../Images/c2.jpg';
import background from "../Images/inq2.png";
import "../stylesheets/footer.css";
import "../stylesheets/navbar.css";



function Thankyou(){


    const myStyle={
        backgroundImage: `url(${background})` ,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return(
      
        
        <><>
         <div style={myStyle}></div>
        <div className="center">

            <img src={image} />

        </div>
            <div className="t1">
                <h2> <b>Thank You !</b> <br />  <b> Your submission has been sent.</b> </h2>
            </div></></>

    )
}

export default Thankyou;