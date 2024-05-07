import React, { useEffect, useState } from "react";

import "./styles.css";
import axios from "axios";
import Header from "../../components/labrotary/header";
import Footer from "../../components/labrotary/footer";
import { Button, Form } from "react-bootstrap";

const Register = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  useEffect(() => {
    
  }, []);

  const AddUser = async (event) => {
    event.preventDefault()
    let data = {
        name : name,
        email : email,
        phone: phone,
        password: password,
    }
   
    await axios.post('http://localhost:5001/api/v1/laboratorian', data).then((res) => {
                console.log(res.data);
                window.location.href = "/"
    }).catch(err => {
        console.log("data",data)
        console.error(err);
    });
  };

  return (
    <div>
      <Header />
      <center>
      <main style={{minHeight:"400px"}}>
        <div class="login" style={{}}>
          <h1>Hello!</h1>
            <Form className="mt-3" type="post">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="name" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder=" Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label> 
                  <Form.Control name="purpose" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" required/> 
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone</Form.Label>
                   <Form.Control
                      name="phone"
                      type="tel"
                      maxLength={10}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      value={phone}
                      placeholder="Phone"
                    />
              </Form.Group>
              
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="timing" type="text" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required/>
                </Form.Group>
                
                <Button onClick={(e) => AddUser(e)} as="input" type="submit" value="Submit" />
              </Form>
        </div>
      </main>
      </center>
      <Footer />
    </div>
  );
};

export default Register;
