import React, { useEffect, useState } from "react";

import "./styles.css";
import axios from "axios";
import Header from "../../components/labrotary/header";
import Footer from "../../components/labrotary/footer";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPasseord] = useState('');
  const [error, setError] = useState('');

  const LoginUser = async (event) => {
    event.preventDefault()
    await axios
      .get(`http://localhost:5001/api/v1/laboratorian`)
      .then((res) => {
        console.log(res.data.data);
        res.data.data.forEach(element => {
          console.log("test 1");
          if(element.email === email && element.password === password){
            console.log("test 2");
            localStorage.setItem("isLogedIn", "yes");
            localStorage.setItem("userData" , JSON.stringify(res.data));
            window.location.href = "/add-lab-test"
          }else{
            setError("User is not Exsist");
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Header />
      <center>
      <main style={{minHeight:"400px"}}>
        <div class="login" style={{}}>
          <span style={{color:"red"}}>{error}</span><br />
          <p>Hello! Welcome Back</p>
          <form action="/login" method="post">
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" value={email} required/>
            <input type="password" name="password" onChange={(e) => setPasseord(e.target.value)} placeholder="Password" value={password} required />
            <button type="submit" onClick={(e) => LoginUser(e)}>Login</button>
            <a href="/register">Don't have an account? Register</a>
          </form>
        </div>
      </main>
      </center>
      <Footer />
    </div>
  );
};

export default Login;
