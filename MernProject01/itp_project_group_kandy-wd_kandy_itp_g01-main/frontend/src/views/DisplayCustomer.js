import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import ProductCard from './ProductCard';
import image from '../Images/britol.jpg';
import { Card } from 'react-bootstrap';


const DisplayCustomer = () => {
/*
    const[products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get("http://localhost:5000/product/get")
            console.log(data)
            setProducts(data)
        }
        getProducts()
    },[])
*/

        const [ProductData, setProductData] = useState([]);

        //read stock Product list
        const data = async () => {
        const response = await axios.get("http://localhost:5000/stock/get");
        setProductData(response.data);
        console.log(data)
        };

        useEffect(() => {
            data();
        }, [])

        //<Container className="justify-content-center m-5 p-2">
    

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
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/DisplayCustomer/AirFreshner">Air Freshner</a>
                        <a className="dropdown-item" href="/DisplayCustomer/CarCare">Car Care</a>
                        <a className="dropdown-item" href="/DisplayCustomer/DishWashing">Dish Washing</a>
                        <a className="dropdown-item" href="/DisplayCustomer/FabricCare">Fabric Care</a>
                        <a className="dropdown-item" href="/DisplayCustomer/HandSanitizer">Hand Sanitizer</a>
                        <a className="dropdown-item" href="/DisplayCustomer/HandWash">Hand Wash</a>
                        <a className="dropdown-item" href="/DisplayCustomer/SurfaceCare">Surface Care</a>
                    </div>
            </div>
                <br/>
                <h2 className='text-white p-3 mb-2 bg-info font-weight-bold'> All Products</h2>
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

export default DisplayCustomer;