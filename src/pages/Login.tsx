import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Path from "../routes/Path";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "patient@example.com" && password === "1234") {
      const user = { email: "patient@example.com", role: "patient" }; // Corrected role to "patient"
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        navigate(Path.PAITIANTMAIN, { replace: true });
        window.location.reload();
      }, 1500);
    } else if (email === "provider@example.com" && password === "1234") {
      const user = { email: "provider@example.com", role: "provider" };
      localStorage.setItem("user", JSON.stringify(user));
      navigate(Path.PROVIDERMAIN);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
