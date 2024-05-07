import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import "./styles.css";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Header from "../../components/labrotary/header";
import Footer from "../../components/labrotary/footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap";
import labtest from "./lab-test.jpeg"

const LabTestList = () => {
  const [labTests, setLabTests] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLabTests, setFilteredLabTests] = useState([])
  const [isLogin, setIsLogin] = useState("");


  useEffect(() => {
    
    setIsLogin(localStorage.getItem("isLogedIn"))
    axios
      .get("http://localhost:5001/api/v1/lab-tests")
      .then((res) => {
        console.log(res.data);
        setLabTests(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); 
  
  useEffect(() => {
    // Filter labTests based on searchQuery
    const filteredTests = labTests.filter((test) =>
      test.test_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredLabTests(filteredTests);
  }, [searchQuery, labTests]);

  const RequestLabTest = async (event , test_name) => {
    event.preventDefault()
    let data = {
      test_name : test_name,
      requested_user_name: "Sayuri",
      requested_user_contact_number: "0761230552",
      requested_date: "2024/04/30",
      status: "PENDING"
    }
   
    await axios.post('http://localhost:5001/api/v1/requested-lab-tests', data).then((res) => {
                console.log(res.data);
                //window.location.href = "/requested-lab-tests"
                Swal.fire({
                  title: "Good job!",
                  text: "Your request has been sent!",
                  icon: "success"
                }).then((result) => {
                  console.log(result);
                }).catch((error) => {
                  console.error(error);
                });
    }).catch(err => {
        console.log("data",data)
        console.error(err);
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const deleteLabTest = async (event , id) => {
    event.preventDefault();
    let dataReject = {
      id : id,
    }
    await axios.delete(`http://localhost:5001/api/v1/lab-tests/${id}`).then((res) => {
                console.log(res.data);
                axios
                .get("http://localhost:5001/api/v1/lab-tests")
                .then((res) => {
                  console.log(res.data);
                  setLabTests(res.data.data);
                })
                .catch((err) => {
                  console.error(err);
                });
    }).catch(err => {
      console.log("data",dataReject)
                console.error(err);
    });

  }

  return (
    <div>
      <Header />
      <main style={{minHeight:"400px"}}>
        <Container className="mt-5">
        <Form style={{width:"1057px"}}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="search"value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          
          </Form.Group>
        </Form>
        <Row className="mt-5">
          {labTests.map((row) => (
          <Col md="4" key={row.test_name}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={labtest} />
              <Card.Body>
                <Card.Title>{row.test_name}</Card.Title>
                <Card.Text>
                Purpose -  {row.purpose} <br />
                Preparation -  {row.preparation} <br />
                Timing -  {row.timing} <br />
                </Card.Text>
                Price - Rs. {row.price} {isLogin === "yes" ? 
                <div>
                  <Button variant="primary" className="request-button"> <a style={{color:"white"}} href={`/update-lab-test?id=${row._id}&test_name=${row.test_name}&purpose=${row.purpose}&preparation=${row.preparation}&timing=${row.timing}&price=${row.price}`}>Edit</a></Button> 
                  <Button variant="danger" className="request-button" onClick={(e) => deleteLabTest(e,row._id)}> Delete</Button> </div> 
                  : <Button variant="primary" className="request-button" onClick={(e) => RequestLabTest(e , row.test_name)}> Request</Button> }
                </Card.Body>
            </Card>
          </Col>
         ))}
        </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default LabTestList;

