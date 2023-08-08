import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import ProductCard from './ProductCard';
import {Link} from "react-router-dom";
import image from '../Images/britol.jpg';

const DisplayHandWash = () => {

    const [ProductData, setProductData] = useState([]);

        //read stock Product list
        const data = async() => {
            const response = await axios.get("http://localhost:5000/stock/get/handwash");
            setProductData(response.data);
            console.log()
            };

        useEffect(() => {
            data();
        }, [])


    return(
        <div style = {{marginTop: "10px"}}>
            <Container>
            <div className="dropdown" align = "left">
                <button className="btn btn-secondary dropdown-toggle" 
                        type="button" 
                        id="dropdownMenuButton" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                    Shop By category
                </button>

                <Link to = '/DisplayCustomer'>
                    <button type="button" class="btn btn-primary btn-sm float-xl-right">All Products</button>
                </Link>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/DisplayCustomer/AirFreshner">Air Freshner</a>
                    <a className="dropdown-item" href="/DisplayCustomer/CarCare">Car Care</a>
                    <a className="dropdown-item" href="/DisplayCustomer/DishWashing">Dish Washing</a>
                    <a className="dropdown-item" href="/DisplayCustomer/FabricCare">Fabric Care</a>
                    <a className="dropdown-item" href="/DisplayCustomer/HandSanitizer">Hand Sanitizer</a>
                    <a className="dropdown-item active" href="/DisplayCustomer/HandWash">Hand Wash</a>
                    <a className="dropdown-item" href="/DisplayCustomer/SurfaceCare">Surface Care</a>
                </div>
            </div>
            <br/>
            <h1 className='text-white p-3 mb-2 bg-info font-weight-bold'> Hand Wash </h1>
            <hr/>

            <img src = {image} 
                        style = {{
                            width : '80rem'
                }} alt = "stock"/>

            <Row>
                {
                    ProductData.map(pro => {
                        return <Col key={pro.PID}>
                            <ProductCard product = {pro}/>
                        </Col>
                    })
                }
            </Row>
            </Container>
        </div>
    )
}

export default DisplayHandWash;