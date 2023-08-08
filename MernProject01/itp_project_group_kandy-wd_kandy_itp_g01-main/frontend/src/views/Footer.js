import React from "react";
import '../stylesheets/footer.css';

const Footer = () => {
    return(
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3><a href="/TermsAndConditions">About Us</a></h3>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div class="col-md-6 item">
                        <h3><a href="/review">Review</a></h3>
                    </div>
                    <div class="col item social"><a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a>
                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><i class="icon ion-social-twitter"></i></a>
                    <a href="#"><i class="icon ion-social-snapchat"></i></a>
                    <a href="https://www.instagram.com/"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Pradeepa Distributors © 2018</p>
            </div>
        </footer>
      </div>
      
    )
}

export default Footer;