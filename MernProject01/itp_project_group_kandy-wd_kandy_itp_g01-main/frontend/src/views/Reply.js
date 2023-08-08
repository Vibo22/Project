import React, {useState, useEffect} from 'react';
import {useNavigate,useParams,Link} from "react-router-dom";
import Axios from "axios";
import background from "../Images/inq3.png";
import "../stylesheets/Button.css";
import "../stylesheets/footer.css";
import '../stylesheets/Reply.css';
import "../stylesheets/navbar.css";



const Reply = ()=>{

    const myStyle={
        backgroundImage: `url(${background})` ,
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

   

    const[Status,setStatus]=useState("");


    

    const history = useNavigate();
    const [user, setUser]=useState({});

    const {InquiryID}=useParams();
    

    useEffect(() =>{
        Axios
        .get(`http://localhost:5000/inquiry/get/${InquiryID}`)
        .then((resp)  => setUser({...resp.data[0] }));
    }, [InquiryID]);

    //update

    const UpdateInquiry =async (e) =>{
        e.preventDefault();

        const data={
        Status:Status,
        }
        await Axios.put(`http://localhost:5000/inquiry/update/${InquiryID}`)
       
       
       // history('/DisplayAdmin');
       
       
    };


    return (
       
        <><div style={myStyle}>
            <div style={{ marginTop: "auto" ,fontFamily:"Times New Roman", fontSize:"16px" }}>
            <br /><br /><br />

            <div className="title">Cutomer Inquiries <br />   </div>

            <br /> <br />

            <div className="box">
                <form onSubmit={UpdateInquiry}>
                    <strong> Inquiry ID:</strong>
                    <span>{user.InquiryID} </span>
                    <br />
                    <br />

                    <strong> Email:</strong>
                    <span>{user.Email}</span>
                    <br />
                    <br />

                    <strong> Date:</strong>
                    <span>{user.Date} </span>
                    <br />
                    <br />

                    <strong> Inquiry:</strong>
                    <span> {user.Inquiry} </span>
                    <br />
                    <br />

                    <div>
                     <button className="btn btn-send" style={{color:"#99DDFF"}} >.<a href= 'mailto:' >Send Reply</a> </button>


                    </div>
 
                </form>




</div>

                  

                  
            
        </div></div>          </>
                    
                        
        

    );
};
    

export default Reply;