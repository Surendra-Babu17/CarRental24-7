// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setUser }) => {
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) { toast.error("Fill all fields"); return; }

    // dummy auth — replace with real API
    const userData = { userName: form.email.split("@")[0], email: form.email };
    setUser(userData);
    toast.success("Login successful");
    nav("/rent"); // ← important: go to rent page on success
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" /><br/>
        <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p className="form-footer">New? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
