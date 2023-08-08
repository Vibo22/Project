import React, {useEffect, useState } from "react";
import Axios from 'axios';
import {useNavigate} from "react-router-dom";
import background from "../Images/inq2.png";
import "../stylesheets/Button.css";
import '../stylesheets/Review.css';
import "../stylesheets/navbar.css";
import { toast } from 'react-toastify';
import { Card, Row, Col, Container } from "react-bootstrap";
import image from '../Images/1653055828106.png';






function Review() {
   
   
  const [data,setData]=useState([]);

  const loadData=async() =>{
    const response=await Axios.get("http://localhost:5000/review/get");
    setData(response.data);
  };

  useEffect(() =>{
    loadData();
  },  []);



const[review, setreview] = useState("");
const history = useNavigate();



    const myStyle={
    backgroundImage: `url(${background})` ,
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};





    const [userInfo, setuserInfo] = useState({
        file:[],
        filepreview:null,
    });

    const handleInputChange = (event) => {
        setuserInfo({
            
            ...userInfo,
            file:event.target.files[0],
            filepreview:URL.createObjectURL(event.target.files[0]),
        });

    }




    

    const formdata = new FormData(); 
    formdata.append('Image', userInfo.file);
    formdata.append('review',review);





    const[isSucces,setSuccess]=useState(null);

    const submit =async(e) =>{
    e.preventDefault();

  
    if(!Image || !review){
        toast.error("please enter");
    }else{

   await Axios.post("http://localhost:5000/review", formdata ) 
          //  review:review, 
          //  headers: { "Content-Type": "multipart/form-data" } 
          .then(() => {
            toast.success("Added Successfully"); 
            history('/Review')
        });

    }
    //.then(res => { // then print response status
       // console.warn(res);
       // if(res.data.success==1){
        //    setSuccess("image upload successfully")
          // }
   // })
}




    return(
      



    <div style={myStyle}>
    <div className="container mr-60">

    
       <div className="title">Reviews </div>

       
       <br/>

      <div className="formdesign">
      {isSucces !== null ? <h4> {isSucces} </h4> :null }
        <div className="form-row">
          <label className="lable">Upload a Image :</label>
          <input type="file" className="file" name="upload_file"  onChange={handleInputChange} />
        
          </div>

            
        <div className="form-row">
        <br/>  
        <lable> Your Review :  </lable>
        <textarea id="msg" name="review"  placeholder="Would you like to write anything about this product?" cols="60" rows="5" onChange={(e) => {setreview(e.target.value);}} />      
        </div>
       


        <div className="form-row">
            <button type="submit" className="btn btn-dark"  onClick={submit} >save</button>
            
        </div>

   

       
        {userInfo.filepreview!==null ?
        <img className="previewimg" src={userInfo.filepreview} alt="UploadImage"/> : null}  
        </div>
        <br/>
            
        <Container>
            <Row>
            

            {data.map((item, k) => (
                    <Col key={k} xs={12} md={4} lg={3}>
                      <div style={{   border: "3px solid #07a8ff",fontFamily: "Times New Roman",fontSize:"15px"}}>
                        <Card >
                        
                        
                      
                        <Card.Body>
                                <Card.Img src = {image}/>
                                <Card.Img src={`http://localhost/3000/${item.Image}`} />
                                <Card.Title>{item.review}</Card.Title>
                               
                               
                            </Card.Body>

                        </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>

       
        </div>    
        </div>

        );

     
    }

    

export default Review;