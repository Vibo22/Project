import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import image from '../Images/1644185182644.png';

const ProductCard = ({product}) => {
    const status = product.Status;
    if (status == "In Stock"){
        return (
            <>
                <div className='bg-light'>
                <Card className = 'shadow-lg m-2 p-3 rounded bg-light border border-primary' 
                        style = {{
                            width: '18rem',
                            height: '22rem',
                            display:'inline-block',
                        }}>
                    <Card.Body>
                        <h5 className="card-title text-white p-3 mb-2 bg-info font-weight-bold">{product.Category}</h5>
                        <br/>
                        <h5 className='font-weight-bold'> {product.ProductName} </h5>
                        <br/>
                        <h6 align = "right"> Rs.{parseFloat(product.Price).toFixed(2)} </h6> 
                        <h6 align = "left" className='p-2 bg-warning'> {product.Status} </h6>
                
                        <Link to = {`/DisplayCustomer/stock/${product.PID}`}>
                            <input type="button" className="btn btn-primary" value = "View Product"/> 
                        </Link>
    
                    </Card.Body>
                </Card>
    
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className='bg-white'>
                <Card className = 'shadow-lg m-2 p-3 rounded bg-light border border-danger' 
                        style = {{
                            width: '18rem',
                            display:'inline-block',
                        }}>
                    <Card.Body>
                        <h5 className="card-title text-white p-3 mb-2 bg-info font-weight-bold">{product.Category}</h5>
                        <br/>
                        <h5 className='font-weight-bold'> {product.ProductName} </h5>
                        <br/>
                        <h6 align = "right"> Rs.{parseFloat(product.Price).toFixed(2)} </h6> 
                        <h6 align = "left" className='p-2 bg-danger text-white'> {product.Status} </h6>
                
                        <Link to = {`/DisplayCustomer/stock/${product.PID}`}>
                            <input type="button" disabled = "true" className="btn btn-primary" value = "View Product"/> 
                        </Link>
    
                    </Card.Body>
                </Card>
    
                </div>
            </>
        )
    }
    
}

export default ProductCard;