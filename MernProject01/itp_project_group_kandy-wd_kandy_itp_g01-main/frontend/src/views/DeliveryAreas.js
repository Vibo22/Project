import React from 'react'
//import { List } from 'semantic-ui-react'
import "../stylesheets/DeliveryAreas.css";
import image from "../Images/areas.png";


const DeliveryAreas = () => {
  return (
    
    <div style = {{background: "#85a3e0"}}>
      
      <br></br>
        <h1 style={{ color: "#00458b" }}>Delivery Areas</h1>
        <br></br><br></br>
        <p className="para">Delivery is currently available only for the following cities: </p>
        <br></br>
       
        <ul className="list">
              <li>Kandy</li>
              <li>Peradeniya</li>
              <li>Pilimathalawa</li>
              <li>Kadugannawa</li>
              <li>Gelioya</li>
              <li>Gampola</li>
        </ul>

        <img className="img" src={image} alt=""/>
    </div>
  )
}

export default DeliveryAreas;

