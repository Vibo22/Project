import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import image from '../Images/stockDB.jpg';


const ProductDetail = () => {

    //const {id} = useParams()
/*
    const[Category, setCategory] = useState('');
    const[ProductName, setProductName] = useState("");
    const[Price, setPrice] = useState(0);
    const[Quantity, setQuantity] = useState(0);

    useEffect(() => {
        const getSingleProduct = async () => {
            const data = await axios.get(`http://localhost:5000/product/get/${id}`);
            console.log(data)
            console.log(data.Category)
            setCategory(data.Category)
            setProductName(data.ProductName)
            setPrice(data.Price)
            setQuantity(data.Quantity)
        }
        getSingleProduct()
    },[id])
*/
    
    const [Product, setProduct] = useState({});

    const {id} = useParams();

    useEffect (() => {
        axios
            .get(`http://localhost:5000/stock/get/${id}`)
            .then((res) => setProduct({...res.data[0]}));
    },[id]);


    //Shopping Cart

            const history = useNavigate();
        //Insert item to shopping cart

            const insertItem = (id) => {

            axios.post(`http://localhost:5000/shopping_cart/insert/${id}`);
            axios.put(`http://localhost:5000/updateQty/update/${id}`);
            history('/Scart');
        };

        //Insert item to Wish List

        const insertWish = (id) => {

            axios.post(`http://localhost:5000/wishlist/insert/${id}`);
        history('/WishList');
        };

/*
const [Product, setProduct] = useState({});

//read stock Product list
const data = async () => {
  const response = await axios.get(`http://localhost:5000/product/get/${id}`);
  setProduct(response.data);
};

useEffect(() => {
    data();
}, [])

*/
    return(
        <div style = {{marginTop: "100px"}}>
            <div className='card'>
                <div className='card-header'>
                
                <img className="card-img-left" src={image} alt="Card image cap"/>
                    <h5>{Product.ProductName}</h5>
                </div>
                <div className='container'>
                    <strong>{Product.Category}</strong><br/><br/>
                    <strong>Rs.{parseFloat(Product.Price).toFixed(2)}</strong><br/><br/>
                    <strong>Available : {Product.Quantity}</strong><br/><br/>
                </div>
                <Link to = "/Scart">
                        <button className="btn btn-primary" onClick={()=>insertItem(Product.PID)}><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>&nbsp;
                </Link>
                <Link to = "/WishList">
                    <button className="btn btn-primary" onClick={()=>insertWish(Product.PID)}><i class="fa-solid fa-heart"></i> Add to WishList</button>
                </Link>
            </div>
            
            
        </div>
    )
}

export default ProductDetail;