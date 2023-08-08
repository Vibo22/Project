import React from "react";
import {Link} from "react-router-dom";
import { Container, Card } from 'react-bootstrap'
import image from '../Images/stock.jpg';
import axios from "axios";

const submitQuery = () => {
    axios.post("http://localhost:5000/dailysales/insert");
}

const StockDashboard = () => {

    return(
        <div style = {{marginTop: "10px"}}>
        <Container>
            <h1>Admin Dashboard</h1>
            <br/>
            <img src = {image} align = "right" width = "600px" height = "400px"></img> 
            <Link to = {`/DisplayAdmin`}>
                <Card className = 'shadow-lg rounded' 
                        style = {{
                            width: '18rem',
                            borderColor: "blue",
                            background: "#3fd2c7",
                        }}>
                    <Card.Body>
                        <Card.Title>Stock</Card.Title>
                    </Card.Body>
                </Card>
            </Link>

            <br/>


            <Link to = {`/displayOrderAdmin`}>
                <Card className = 'shadow-lg rounded' 
                        style = {{
                            width: '18rem',
                            borderColor: "blue",
                            background: "#3fd2c7",
                        }}>
                    <Card.Body>
                        <Card.Title>Orders</Card.Title>
                    </Card.Body>
                </Card>
            </Link>


            <br/>


            <Link to = {`/addExpences`}>
                <Card className = 'shadow-lg rounded'
                        onClick={() => submitQuery()}
                        style = {{
                            width: '18rem',
                            borderColor: "blue",
                            background: "#3fd2c7",
                        }}>
                    <Card.Body>
                        <Card.Title>Extra Expences</Card.Title>
                    </Card.Body>
                </Card>
            </Link>

            <br/>

            <Link to = {`/display`}>
                <Card className = 'shadow-lg rounded'
                        onClick={() => submitQuery()}
                        style = {{
                            width: '18rem',
                            borderColor: "blue",
                            background: "#3fd2c7",
                        }}>
                    <Card.Body>
                        <Card.Title>Inquiry</Card.Title>
                    </Card.Body>
                </Card>
            </Link>

            <br/>

            <Link to = {`/addSupplier`}>
                <Card className = 'shadow-lg rounded'
                        onClick={() => submitQuery()}
                        style = {{
                            width: '18rem',
                            borderColor: "blue",
                            background: "#3fd2c7",
                        }}>
                    <Card.Body>
                        <Card.Title>Supplier</Card.Title>
                    </Card.Body>
                </Card>
            </Link>

            <br/>

            <Link to = {`/Report`}>
                <Card className = 'shadow-lg rounded'
                        onClick={() => submitQuery()}
                        style = {{
                            width: '18rem',
                            borderColor: "blue",
                            background: "#3fd2c7",
                        }}>
                    <Card.Body>
                        <Card.Title>Reports</Card.Title>
                    </Card.Body>
                </Card>
            </Link>

            <br/>

            <Link to = {""}>
                <Card className = 'shadow-lg rounded'
                        onClick={() => submitQuery()}
                        style = {{
                            width: '18rem',
                            borderColor: "blue",
                            background: "#3fd2c7",
                        }}>
                    <Card.Body>
                        <Card.Title>Special Package</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
            <br/>
        </Container>
        </div>
    )

}

export default StockDashboard;