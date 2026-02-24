import axios from "axios";
import React, { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
        const response = await axios.post(
        'http://localhost:3000/api/auth/login', {
        email, password
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
      <h2>Login</h2>

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

      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default Login;