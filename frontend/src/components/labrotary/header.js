import React, { useEffect, useState } from "react";

import axios from "axios";

import Form from "react-bootstrap/Form";
import Logo from "./logo.png";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div>
      <header>
        <div class="header-container">
          <Row>
            <div class="logo">
              <img src={Logo} alt="logo" />
            </div>
          </Row>
          <br />
          <br />
          <Row>
            <nav>
              <Button variant="primary" style={{width:"-moz-available"}}><a href="/login">Login</a></Button>
            </nav>
          </Row>
        </div>
        <Row>
            <Col md="3"></Col>
            <Col md="6">
                <div>  
                <nav style={{marginLeft:"500px"}}>
                    <ul>
                    <li>
                        <a href="#"><b>Home</b></a>
                    </li>
                    <li>
                        <a href="#"><b>Services</b></a>
                    </li>
                    <li>
                        <a href="#"><b>Find a Doctor</b></a>
                    </li>
                    <li>
                        <a href="#"><b>Contact</b></a>
                    </li>
                    <li>
                        <a href="#"><b>Laboratory</b></a>
                    </li>
                    <li>
                        <a href="#"><b>Pharmacy</b></a>
                    </li>
                    </ul>
                </nav>
                </div>
            </Col>
            <Col md="3"></Col>
        </Row>
      </header>
    </div>
  );
};

export default Header;
