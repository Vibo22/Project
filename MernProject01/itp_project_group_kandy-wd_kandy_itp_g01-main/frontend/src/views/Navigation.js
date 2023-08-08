import React, { Component } from 'react';
import { Container, NavBar } from 'react-bootstrap';
import {Link, useNavigate, useParams} from "react-router-dom";
import "../stylesheets/navbar.css";

const Navigation = () => {

    
    return(
      <Container>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">Home</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/TermsAndConditions">About Us <span class="sr-only">(current)</span></a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <a class="nav-link" href="/DisplayCustomer">Shop</a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <a class="nav-link" href="/DeliveryAreas">Delivery Areas</a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </ul>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <div className="d-flex justify-content-end">
              <Link to = "/WishList">
                <i className="fa-solid fa-heart"></i>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to = "/Scart"> 
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
          </div>
        </nav>
        </Container>
      )
    }

export default Navigation;

