import React, { useEffect, useState } from "react";

import "./styles.css";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Header from "../../components/labrotary/header";
import Footer from "../../components/labrotary/footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap";
import labtest from "./lab-test.jpeg"


const UserProfile = () => {
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [emailerror, setEmailerror] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');

  

  useEffect(() => {
    if(localStorage.getItem("isLogedIn") === 'yes'){
      let LogedInUser = localStorage.getItem("userData");
      console.log(LogedInUser);
      setName(JSON.parse(LogedInUser).data[0].name);
      setEmail(JSON.parse(LogedInUser).data[0].email);
      setPhone(JSON.parse(LogedInUser).data[0].phone);
      setId(JSON.parse(LogedInUser).data[0]._id);
    }else{
      window.location.href = "/"
    }
    
  }, []);

  const updateUser = async (event) => {
    event.preventDefault();
    if(!email){
      setEmailerror("Email is Required");
    }
    if(!phone){
      setPhoneError("Phone is Required");
    }
    if(phone.length !== 10){
      setPhoneError("Phone is Required");
    }
    if(emailerror !== '' && phoneError !== ''){
      let data = {
          id: id,
          name : "test update",
          email : email,
          phone: phone,
      }
    
      await axios.put('http://localhost:5001/api/v1/laboratorian', data).then((res) => {
                  console.log(res.data);
                  localStorage.setItem("userData" , JSON.stringify({"data" : [res.data]}));
      }).catch(err => {
          console.log("data",data)
          console.error(err);
      });
    }
  };
  const LogOut = async () => {
    localStorage.removeItem("isLogedIn");
    localStorage.removeItem("userData");
    window.location.href = "/"
  };
  

  return ( 
    <div>
      <Header />
      <main style={{minHeight:"400px"}}>
        <Container className="mt-5">
        <Row className="mt-5">
          <Col md="4" style={{background:"white",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"25px"}}>
            <div className="padding-box">
              <Button variant="secondary" style={{width:"-moz-available"}}><a href="/lab-test">Overview</a></Button><br /><br />
              <Button variant="secondary" style={{width:"-moz-available"}}><a href="/requested-lab-tests">Shedule</a></Button><br /><br />
              <Button variant="secondary" style={{width:"-moz-available"}}> <a href="/add-lab-test">Add Test</a></Button><br /><br />
              <Button variant="info" style={{width:"-moz-available"}}><a href="/user-profile">Profile</a></Button><br /><br /><br /><br /><br /><br /><br /><br />
              <Button variant="dark" style={{width:"-moz-available"}} onClick={() => LogOut()}>Log Out</Button><br /><br />
              <Button variant="danger" style={{width:"-moz-available"}}><a href="/user-profile">Delete Account</a></Button>
            </div>
          </Col>

          <Col md="1"></Col>
          <Col md="7" style={{background:"white",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"25px"}}>
            <div className="padding-box">
              <h2>Profile Information</h2>
              <Form className="mt-3" >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" defaultValue={name} onChange={(e) => setName(e.target.value)} required/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <span style={{color:"red"}}>{emailerror}</span><br />
                    <Form.Control type="email" placeholder="Email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} required/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <span style={{color:"red"}}>{phoneError}</span><br />
                    <Form.Control type="text" placeholder="Phone" defaultValue={phone} onChange={(e) => setPhone(e.target.value)} required/>
                  </Form.Group>
                  
                <Button onClick={(e) => updateUser(e)} as="input" type="submit" value="Submit" />
                              
              </Form>
            </div>
          </Col>
          
          
       

          
          

        </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
