import React, { useEffect, useState } from "react";

import axios from "axios";

import Form from 'react-bootstrap/Form';
import Logo from "./logo.png"
import { Row } from "react-bootstrap";
import "./footer.css"


const Footer = () => {

  return (
    <div>
      <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
        <div class="footer-col">
                <img src={Logo} alt="logo"/>
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>hospital</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>services</h4>
  	 			<ul>
  	 				<li><a href="#">doctor</a></li>
  	 				<li><a href="#">patient</a></li>
  	 				<li><a href="#">pharmarcy</a></li>
  	 				<li><a href="#">laboratory</a></li>
  	 			</ul>
  	 		</div>
  	 		
  	 	</div>
  	 </div>
  </footer>
    </div>
  );
};

export default Footer;



