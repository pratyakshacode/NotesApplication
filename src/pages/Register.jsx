import axios from "axios";
import React, { useState } from "react";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
        const response = await axios.post(
        'http://localhost:3000/api/auth/register', {
        name, email, password
      }, {
        withCredentials: true
      });
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="register-container">
      <h2>Register</h2>


      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default Register;