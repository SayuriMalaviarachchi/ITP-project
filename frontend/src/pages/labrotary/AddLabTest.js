import React, { useEffect, useState } from "react";

import "./styles.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Header from "../../components/labrotary/header";
import Footer from "../../components/labrotary/footer";
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const AddLabTest = () => {
  const [testName, setTestName] = React.useState('');
  const [purpose, setPurpose] = React.useState('');
  const [preparation, setPreparation] = React.useState('');
  const [timing, setTiming] = React.useState('');
  const [price, setPrice] = React.useState('');




// Define onClick event handler
const handleClick = () => {
  // Define test variable or get it from somewhere
  const test = "exeTest";
  
 
};

  useEffect(() => {
    
  }, []);

  

  const AddLabTest = async (event) => {
    event.preventDefault()
    let data = {
        test_name : testName,
        test_description : "test",
        purpose: purpose,
        preparation: preparation,
        timing: timing,
        price : price,
    }
    //frontend to backend 
    await axios.post('http://localhost:5001/api/v1/lab-tests', data).then((res) => {
                console.log(res.data);
                window.location.href = "/lab-test"
    }).catch(err => {
        console.log("data",data)
        console.error(err);
    });
  };

  

    
    const RequestLabTest = async (event , test_name) => {
      event.preventDefault()
      let data = {
        test_name : test_name,
        requested_user_name: "Sayuri",
        requested_user_contact_number: "0761230552",
        requested_date: "2024/05/07",
        status: "PENDING"
      }
     
      await axios.post('http://localhost:5001/api/v1/requested-lab-tests', data).then((res) => {
                  console.log(res.data);
                  //window.location.href = "/requested-lab-tests"
                  Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
      }).catch(err => {
          console.log("data",data)
          console.error(err);
      });
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
              <Button variant="info" style={{width:"-moz-available"}}>Add Test</Button><br /><br />
              <Button variant="secondary" style={{width:"-moz-available"}}><a href="/user-profile">Profile</a></Button><br /><br /><br /><br /><br /><br /><br /><br />
              <Button variant="dark" style={{width:"-moz-available"}} onClick={() => LogOut()}>Log Out</Button><br /><br />
              <Button variant="danger" style={{width:"-moz-available"}}>Delete Account</Button>
            </div>
          </Col>
          <Col md="1"></Col>
          <Col md="7" style={{background:"white",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"25px"}}>
            <div className="padding-box">
              <h2>Add Test</h2>
              <Form className="mt-3" type="post">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Test Name</Form.Label>
                  <Form.Control name="test_name" type="text" onChange={(e) => setTestName(e.target.value)} value={testName} placeholder="Test Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Purpose</Form.Label>
                  <Form.Control name="purpose" type="text" onChange={(e) => setPurpose(e.target.value)} value={purpose} placeholder="Purpose" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Preparation</Form.Label>
                  <Form.Control name="preparation" type="text" onChange={(e) => setPreparation(e.target.value)} value={preparation} placeholder="Preparation" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Timing</Form.Label>
                  <Form.Control name="timing" type="text" onChange={(e) => setTiming(e.target.value)} value={timing} placeholder="Timing" required/>
                </Form.Group>
                <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                  <Form.Label>Price</Form.Label>
                  <Form.Control name="price" type="text" onChange={(e) => {
                    const value = parseInt(e.target.value);
                       setPrice(isNaN(value) ? '' : value); // If NaN, set to empty string, otherwise set to parsed integer
                       }} 
                        value={price} placeholder="Price" required/>
                </Form.Group>
                
                <Button onClick={(e) => AddLabTest(e)} as="input" type="submit" value="Submit" />
               
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

export default AddLabTest;
